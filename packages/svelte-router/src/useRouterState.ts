import { useStore } from '@tanstack/svelte-store'
import { useRouter } from './useRouter'
// TODO: update type class
// import type { AnyRouter, RegisteredRouter, RouterState } from './router'

export function useRouterState<
  // TRouter extends AnyRouter = RegisteredRouter,
  // TSelected = RouterState<TRouter['routeTree']>,
  TRouter = any,
  TSelected = any,
>(opts?: {
  router?: TRouter
  // select: (state: RouterState<RegisteredRouter['routeTree']>) => TSelected
  select: (state: any) => TSelected
}): TSelected {
  const contextRouter = useRouter<TRouter>({
    warn: opts?.router === undefined,
  })
  // @ts-expect-error TODO: correct types
  return useStore((opts?.router || contextRouter).__store, opts?.select as any)
}
