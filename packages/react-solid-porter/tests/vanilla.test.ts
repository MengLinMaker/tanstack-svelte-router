import { describe, expect, test } from 'vitest'
import { portReactToSolid } from '../src'

describe('vanilla', () => {
  test('No change typescript', () => {
    const code = `const a: any = 1;
const b: number = 2;
const c = 3;`
    const newCode = portReactToSolid(code)
    expect(newCode).toBe(code)
  })
})
