import { getContext } from 'svelte'

export const contextKey = 'tanstack-svelte-router'
export const getRouterContext = () => getContext(contextKey)
