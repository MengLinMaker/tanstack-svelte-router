import { describe, expect, test } from 'vitest'
import { transformSync } from '@babel/core'
import plugin, { memberIndentifiers } from '../src'

export const portReactSolid = (code: string) => {
  const transform = transformSync(code, {
    plugins: ['@babel/plugin-syntax-typescript', plugin],
  })
  if (transform === null) throw Error('cannot parse code')
  return transform
}

describe('member complex', () => {
  test.each(Array.from(memberIndentifiers.entries()))(
    `replace member: %s => %s`,
    (oldMember, newMember) => {
      const code = `import * as React from "react"; React.${oldMember};`
      const expectedCode = `import * as Solid from "solid-js";
Solid.${newMember};`
      const newCode = portReactSolid(code)
      expect(newCode.code).toBe(expectedCode)
    },
  )
})

describe('member type complex', () => {
  test.each(Array.from(memberIndentifiers.entries()))(
    `replace member: %s => %s`,
    (oldMember, newMember) => {
      const code = `import * as React from "react"; let a: React.${oldMember};`
      const expectedCode = `import * as Solid from "solid-js";
let a: Solid.${newMember};`
      const newCode = portReactSolid(code)
      expect(newCode.code).toBe(expectedCode)
    },
  )
})
