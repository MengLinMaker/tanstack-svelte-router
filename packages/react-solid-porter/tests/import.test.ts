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

describe('import irrelevant no change', () => {
  test('import react', () => {
    const code = `import { root } from "react-dom";`
    const expectedCode = `import { root } from "react-dom";`
    const newCode = portReactSolid(code)
    expect(newCode.code).toBe(expectedCode)
  })
})

describe('import namespace statement', () => {
  test('import react', () => {
    const code = `import * as React from "react";`
    const expectedCode = `import * as Solid from "solid-js";`
    const newCode = portReactSolid(code)
    expect(newCode.code).toBe(expectedCode)
  })
})

describe('import specifier statement', () => {
  test('import react', () => {
    const code = `import { JSX } from "react";`
    const expectedCode = `import { JSX } from "solid-js";`
    const newCode = portReactSolid(code)
    expect(newCode.code).toBe(expectedCode)
  })
})
