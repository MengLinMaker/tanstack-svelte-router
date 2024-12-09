import type Babel from '@babel/core'

export default function (_babel: typeof Babel): Babel.PluginObj<any> {
  const state: {
    importNamespaceReact: null | string
  } = {
    importNamespaceReact: null,
  }
  return {
    visitor: {
      ImportDeclaration: (path) => {
        if (path.node.source.value == 'react') {
          // import ... "react"
          // import ... "solid-js"
          path.node.source.value = 'solid-js'

          if (
            path.node.specifiers[0] &&
            path.node.specifiers[0].type == 'ImportNamespaceSpecifier'
          ) {
            // import * as React from "react"
            // import * as Solid ...
            state.importNamespaceReact = path.node.specifiers[0].local.name
            path.node.specifiers[0].local.name = 'Solid'
          }
        }
      },
    },
  }
}
