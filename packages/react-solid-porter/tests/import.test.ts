import { describe, expect, test } from 'vitest'
import { portReactToSolid } from '../src'

describe('import `react`', () => {
  test('import irrelevant no change', () => {
    const code = `import { root } from "react-dom";`
    const expectedCode = `import { root } from "react-dom";`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('import default statement', () => {
    const code = `import React from "react";`
    const expectedCode = `import Solid from "solid-js";`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('import namespace statement', () => {
    const code = `import * as React from "react";`
    const expectedCode = `import * as Solid from "solid-js";`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('import namespace statement v2', () => {
    const code = `import * as ReactImport from "react";`
    const expectedCode = `import * as Solid from "solid-js";`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('import specifier statement', () => {
    const code = `import { Suspense, Element } from "react";`
    const expectedCode = `import { Suspense, Element } from "solid-js";`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })
})
