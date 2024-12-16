import { describe, expect, test } from 'vitest'
import { portReactToSolid } from '../src'

describe('JSX', () => {
  test('render', () => {
    const code = `const App: ReactNode = () => <div attr className='class'>hello</div>;`
    const expectedCode = `const App: ReactNode = () => <div attr className='class'>hello</div>;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('<Fragment></Fragment>', () => {
    const code = `const App: ReactNode = () => <Fragment><p>hello</p></Fragment>;`
    const expectedCode = `const App: ReactNode = () => <><p>hello</p></>;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('forwardRef', () => {
    const code = `import React from "react"; React.forwardRef((props, ref) => <div ref={ref} />);`
    const expectedCode = `import Solid from "solid-js";
props => <div ref={props.ref} />;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('type: RefObject', () => {
    const code = `import React from "react"; let a: React.RefObject<T>;`
    const expectedCode = `import Solid from "solid-js";
let a: T;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('type: RefObject', () => {
    const code = `import React from "react"; React.useCallback(() => {});`
    const expectedCode = `import Solid from "solid-js";
() => {};`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })
})
