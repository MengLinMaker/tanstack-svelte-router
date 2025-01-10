import { describe, expect, test } from 'vitest'
import { portReactToSolid } from '../src'

describe('JSX', () => {
  test('render', () => {
    const code = `const App: ReactNode = () => <div attr className='class'>hello</div>;`
    const expectedCode = `const App: ReactNode = () => <div attr className='class'>hello</div>;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('<React.Suspense></React.Suspense>', () => {
    const code = `const App: ReactNode = () => <React.Suspense><p>hello</p></React.Suspense>;`
    const expectedCode = `const App: ReactNode = () => <Solid.Suspense><p>hello</p></Solid.Suspense>;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('<React.Fragment></React.Fragment>', () => {
    const code = `const App: ReactNode = () => <React.Fragment><p>hello</p></React.Fragment>;`
    const expectedCode = `const App: ReactNode = () => <><p>hello</p></>;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('forwardRef', () => {
    const code = `import React from "react";React.forwardRef((props, ref) => <div ref={ref} />);`
    const expectedCode = `import Solid from "solid-js";(props) => <div ref={props.ref} />;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('useCallback', () => {
    const code = `import React from "react";React.useCallback(() => {});`
    const expectedCode = `import Solid from "solid-js";() => {};`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('type: RefObject', () => {
    const code = `import React from "react";let a: React.RefObject<T>;`
    const expectedCode = `import Solid from "solid-js";let a: T;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('type: HTMLProps', () => {
    const code = `let a: React.HTMLProps<T>;`
    const expectedCode = `let a: Solid.JSX.HTMLAttributes<T>;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('type: React.ForwardedRef', () => {
    const code = `import React from "react";let a: React.ForwardedRef<T>;`
    const expectedCode = `import Solid from "solid-js";let a: T;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })

  test('edge case: extend type', () => {
    const code = `import React from "react";
type UseLinkReactProps<TComp> = TComp extends keyof React.JSX.IntrinsicElements
? React.JSX.IntrinsicElements[TComp]
: React.PropsWithoutRef<
  TComp extends React.ComponentType<infer TProps> ? TProps : never
> &
React.RefAttributes<
  TComp extends
  | React.FC<{ ref: infer TRef }>
  | React.Component<{ ref: infer TRef }>
  ? TRef
  : never
>;`
    const expectedCode = `import Solid from "solid-js";
type UseLinkReactProps<TComp> = TComp extends keyof Solid.JSX.IntrinsicElements ?
Solid.JSX.IntrinsicElements[TComp] :
Solid.ComponentProps<
  TComp extends Solid.Component<infer TProps> ? TProps : never> &

Solid.JSX.HTMLAttributes<
  TComp extends
  Solid.Component<{ref: infer TRef;}> |
  Solid.Component<{ref: infer TRef;}> ?
  TRef :
  never>;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(expectedCode)
  })
})
