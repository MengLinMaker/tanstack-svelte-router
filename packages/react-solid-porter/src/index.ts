import { transformSync } from '@babel/core'
import { memberIndentifiers } from './memberIdentifiers'
import type Babel from '@babel/core'

// TODO: port code
// useRef
// forwardedRef
// useTransition
// ErrorInfo
// act
// useSyncExternalStore

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
        if (t.isStringLiteral(path.node.source, { value: 'react' })) {
          // import ... "react"
          // import ... "solid-js"
          path.node.source = t.stringLiteral('solid-js')
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
        } else if (
          t.isStringLiteral(path.node.source, {
            value: '@testing-library/react',
          })
        ) {
          // import ... "@testing-library/react"
          // import ... "@solidjs/testing-library"
          path.node.source = t.stringLiteral('@solidjs/testing-library')
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
          t.isIdentifier(path.node.object, { name: state.importNamespaceReact })
        ) {
          path.node.object = t.identifier('Solid')

          const newMemberIdentifier = memberIndentifiers.get(
            path.get('property').getSource(),
          )
          if (newMemberIdentifier)
            path.node.property = t.identifier(newMemberIdentifier)
          else {
            const loc = path.node.property.loc
            console.warn(
              `Member ported via hacky workaround: ${loc?.start.line}:${loc?.start.column} ${loc?.identifierName}`,
            )
          }
        }
      },

      TSTypeReference: (path) => {
        // RefObject<T>
        // T
        if (path.getSource().slice(0, 15) === 'React.RefObject') {
          path.replaceWith(path.node.typeParameters!.params[0]!)
        }

        // type: React.JSX.Element
        // type: Solid.JSX.Element
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
        // React.useCallback(() => {})
        // () => {}
        if (path.getSource().slice(0, 17) === 'React.useCallback') {
          path.replaceWith(path.node.arguments[0]!)
        }

        // render(<Component />)
        // render(() => <Component />)
        if (
          t.isIdentifier(path.node.callee, { name: 'render' }) &&
          t.isJSXElement(path.node.arguments[0])
        ) {
          path.node.arguments = [
            t.arrowFunctionExpression([], path.node.arguments[0], false),
          ]
        }

        // React.forwardRef((props, ref) => <div ref={ref} />);
        // props => <div ref={props.ref} />);
        if (path.getSource().slice(0, 16) === 'React.forwardRef') {
          const forwardRefFunc = path.node.arguments[0]
          if (
            t.isArrowFunctionExpression(forwardRefFunc) ||
            t.isFunctionExpression(forwardRefFunc)
          ) {
            const props = forwardRefFunc.params[0]! as Babel.types.Identifier
            const ref = forwardRefFunc.params[1]! as Babel.types.Identifier
            // Replace `ref` with `props.ref`
            path.traverse({
              JSXExpressionContainer: (path) => {
                if (
                  t.isIdentifier(path.node.expression, {
                    name: ref.loc!.identifierName!,
                  })
                ) {
                  path.replaceWith(
                    t.jsxExpressionContainer(t.memberExpression(props, ref)),
                  )
                }
              },
            })
            path.replaceWith(
              t.arrowFunctionExpression([props], forwardRefFunc.body),
            )
          } else {
            const loc = path.node.loc
            throw Error(
              `Unexpected: ${loc?.start.line}:${loc?.start.column} ${path.getSource()}`,
            )
          }
        }
      },

      JSXElement: (path) => {
        // <Fragment></Fragment>
        // <></>
        if (path.getSource().slice(1, 9) === 'Fragment') {
          path.replaceWith(
            t.jSXFragment(
              t.jSXOpeningFragment(),
              t.jSXClosingFragment(),
              path.node.children,
            ),
          )
        }
      },
    },
  }
}

export const portReactToSolid = (code: string) => {
  const transform = transformSync(code, {
    plugins: [['@babel/plugin-syntax-typescript', { isTSX: true }], plugin],
  })
  if (!transform) throw Error('cannot parse code')
  return transform.code
}
