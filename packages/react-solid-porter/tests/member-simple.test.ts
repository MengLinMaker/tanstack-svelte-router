import { describe, expect, test } from 'vitest'
import { transformSync } from '@babel/core'
import plugin from '../src'

export const portReactSolid = (code: string) => {
  const transform = transformSync(code, {
    plugins: ['@babel/plugin-syntax-typescript', plugin],
  })
  if (transform === null) throw Error('cannot parse code')
  return transform
}

describe('member simple', () => {
  test('default namespace import', () => {
    const code = `import React from "react"; React.Suspense;`
    const expectedCode = `import Solid from "solid-js";
Solid.Suspense;`
    const newCode = portReactSolid(code)
    expect(newCode.code).toBe(expectedCode)
  })

  test('irrelevant default namespace import', () => {
    const code = `import React from "react"; console.log;`
    const expectedCode = `import Solid from "solid-js";
console.log;`
    const newCode = portReactSolid(code)
    expect(newCode.code).toBe(expectedCode)
  })

  test('namespace import', () => {
    const code = `import * as React from "react"; React.Suspense;`
    const expectedCode = `import * as Solid from "solid-js";
Solid.Suspense;`
    const newCode = portReactSolid(code)
    expect(newCode.code).toBe(expectedCode)
  })

  test('namespace import v2', () => {
    const code = `import * as ReactImport from "react"; ReactImport.Suspense;`
    const expectedCode = `import * as Solid from "solid-js";
Solid.Suspense;`
    const newCode = portReactSolid(code)
    expect(newCode.code).toBe(expectedCode)
  })

  test('specifier import', () => {
    const code = `import { Suspense } from "react"; Suspense;`
    const expectedCode = `import { Suspense } from "solid-js";
Suspense;`
    const newCode = portReactSolid(code)
    expect(newCode.code).toBe(expectedCode)
  })
})
