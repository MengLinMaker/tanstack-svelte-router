import { getContext, setContext } from 'svelte'

export const MATCH_CONTEXT_KEY = Symbol('MatchContext')

let matchContextValue: string | undefined = undefined

// Setting Context (equivalent to React's Context.Provider)
export function setMatchContext(value: string | undefined) {
  matchContextValue = value
  setContext(MATCH_CONTEXT_KEY, matchContextValue)
}

// Getting Context (equivalent to React's useContext)
export function getMatchContext(): string | undefined {
  return getContext<string | undefined>(MATCH_CONTEXT_KEY)
}
