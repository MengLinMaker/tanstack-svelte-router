import { describe, expect, test } from 'vitest'
import { portReactToSolid } from '../src'

describe('import `@testing-library/react`', () => {
  test('import default statement - unsupported', () => {
    const code = `import ReactTest from "@testing-library/react";`
    expect(() => portReactToSolid(code)).toThrowError()
  })

  test('import namespace statement - unsupported', () => {
    const code = `import * as ReactTest from "@testing-library/react";`
    expect(() => portReactToSolid(code)).toThrowError()
  })

  test('import specifier statement', () => {
    const code = `import { render, cleanup } from "@testing-library/react";`
    const expectedCode = `import { render, cleanup } from "@solidjs/testing-library";`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })
})

describe('API difference `@testing-library/react`', () => {
  test('render', () => {
    const code = `import { render } from "@testing-library/react"; render(<Component />);`
    const expectedCode = `import { render } from "@solidjs/testing-library";
render(() => <Component />);`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })
})
