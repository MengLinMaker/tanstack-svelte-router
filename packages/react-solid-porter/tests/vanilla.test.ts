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

describe('vanilla', () => {
  test('No change typescript', () => {
    const code = `const a: any = 1;
const b: number = 2;
const c = 3;`
    const newCode = portReactSolid(code)
    expect(newCode.code).toBe(code)
  })
})
