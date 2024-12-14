import { transformSync } from '@babel/core'
import type Babel from '@babel/core'

// TODO: remove code
// useRef
// forwardedRef
// RefObject
// useCallback
// useTransition
// ErrorInfo
// Fragment
// act

export const memberIndentifiers = new Map(
  Object.entries({
    // Unchanged
    createContext: 'createContext',
    useContext: 'useContext',
    'JSX.IntrinsicElements': 'JSX.IntrinsicElements',
    Context: 'Context',
    Suspense: 'Suspense',
    'JSX.Element': 'JSX.Element',

    // Changed
    RefAttributes: 'JSX.HTMLAttributes',
    ComponentPropsWithRef: 'ComponentProps',
    ReactNode: 'JSX.Element',
    createElement: 'createComponent',
    useState: 'createSignal',
    HTMLProps: 'JSX.HTMLAttributes',
    useLayoutEffect: 'createEffect',
    useEffect: 'createEffect',
    ReactElement: 'Component',
    useMemo: 'createMemo',
    PropsWithoutRef: 'ComponentProps',
    HTMLAttributes: 'JSX.HTMLAttributes',
    ComponentType: 'Component',
    FC: 'Component',
    Component: 'Component',
    LazyExoticComponent: 'JSX.Component',
    memo: 'createMemo',
    PropsWithChildren: 'ParentProps',

    // Unsupported
    // useSyncExternalStore: '',
  }),
)

const plugin = ({ types: t }: typeof Babel): Babel.PluginObj<any> => {
  const state: {
    importNamespaceReact: null | string
    importSpecifierReact: Set<string>
    importSpecifierTestingLibrary: Set<string>
  } = {
    importNamespaceReact: null,
    importSpecifierReact: new Set(),
    importSpecifierTestingLibrary: new Set(),
  }
  return {
    visitor: {
      ImportDeclaration: (path) => {
        if (path.node.source.value === 'react') {
          // import ... "react"
          // import ... "solid-js"
          path.node.source.value = 'solid-js'
          if (
            path.node.specifiers[0] &&
            (t.isImportNamespaceSpecifier(path.node.specifiers[0]) ||
              t.isImportDefaultSpecifier(path.node.specifiers[0]))
          ) {
            // import * as React from "react"
            // import * as Solid from "solid-js"
            // import React from "react"
            // import Solid from "solid-js"
            state.importNamespaceReact = path.node.specifiers[0].local.name
            path.node.specifiers[0].local.name = 'Solid'
          } else {
            for (const specifier of path.node.specifiers) {
              state.importSpecifierReact.add(specifier.local.name)
            }
          }
        } else if (path.node.source.value === '@testing-library/react') {
          // import ... "@testing-library/react"
          // import ... "@solidjs/testing-library"
          path.node.source.value = '@solidjs/testing-library'
          if (
            path.node.specifiers[0] &&
            (t.isImportNamespaceSpecifier(path.node.specifiers[0]) ||
              t.isImportDefaultSpecifier(path.node.specifiers[0]))
          ) {
            const loc = path.node.loc
            throw Error(
              `Testing library namespace and default specifier unsupported: ${loc?.start.line}:${loc?.start.column} ${path.getSource()}`,
            )
          } else {
            for (const specifier of path.node.specifiers) {
              state.importSpecifierTestingLibrary.add(specifier.local.name)
            }
          }
        }
      },

      MemberExpression: (path) => {
        // React.Element
        // Solid.Element
        if (
          state.importNamespaceReact &&
          path.node.object.loc?.identifierName === state.importNamespaceReact
        ) {
          // @ts-expect-error
          path.node.object.name = 'Solid'

          const newMemberIdentifier = memberIndentifiers.get(
            // @ts-expect-error - Check if members need replacing
            path.node.property.loc?.identifierName,
          )
          // @ts-expect-error
          if (newMemberIdentifier) path.node.property.name = newMemberIdentifier
          else {
            const loc = path.node.property.loc
            console.warn(
              `Member ported via hacky workaround: ${loc?.start.line}:${loc?.start.column} ${loc?.identifierName}`,
            )
          }
        }
      },

      TSTypeReference: (path) => {
        // variable: React.JSX.Element
        // variable: Solid.JSX.Element
        const splitType = path.getSource().split('.')
        if (splitType[0] === state.importNamespaceReact) {
          const member = splitType.slice(1, splitType.length).join('.')
          if (memberIndentifiers.get(member)) {
            const newSplitType = memberIndentifiers.get(member)!.split('.')
            let currentNode:
              | Babel.types.TSQualifiedName
              | Babel.types.Identifier = t.identifier('Solid')
            for (;;) {
              const identifierName = newSplitType.shift()
              if (!identifierName) break
              currentNode = t.tsQualifiedName(
                currentNode,
                t.identifier(identifierName),
              )
            }
            path.node.typeName = currentNode
          } else {
            const loc = path.node.loc
            throw Error(
              `Type member not ported: ${loc?.start.line}:${loc?.start.column} ${path.getSource()}`,
            )
          }
        }
      },

      CallExpression: (path) => {
        // render(<Component />)
        // render(() => <Component />)
        if (
          path.node.callee.loc?.identifierName === 'render' &&
          t.isJSXElement(path.node.arguments[0])
        ) {
          path.node.arguments = [
            t.arrowFunctionExpression([], path.node.arguments[0], false),
          ]
        }
      },
    },
  }
}
export default plugin

export const portReactToSolid = (code: string) => {
  const transform = transformSync(code, {
    plugins: [['@babel/plugin-syntax-typescript', { isTSX: true }], plugin],
  })
  if (transform === null) throw Error('cannot parse code')
  return transform.code
}
