import { describe, expect, test } from 'vitest'
import { memberIndentifiers, portReactToSolid } from '../src'

describe('member complex', () => {
  test.each(Array.from(memberIndentifiers.entries()))(
    `replace member: %s => %s`,
    (oldMember, newMember) => {
      const code = `import * as React from "react"; React.${oldMember};`
      const expectedCode = `import * as Solid from "solid-js";
Solid.${newMember};`
      const newCode = portReactToSolid(code)
      expect(newCode).toBe(expectedCode)
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
      const newCode = portReactToSolid(code)
      expect(newCode).toBe(expectedCode)
    },
  )
})
