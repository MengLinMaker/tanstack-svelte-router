import { describe, expect, test } from 'vitest'
import { portReactToSolid } from '../src'

describe('API difference `@testing-library/react`', () => {
  test('render', () => {
    const code = `const App: ReactNode = () => <div attr className='class'>hello</div>;`
    const expectedCode = `const App: ReactNode = () => <div attr className='class'>hello</div>;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })
})
