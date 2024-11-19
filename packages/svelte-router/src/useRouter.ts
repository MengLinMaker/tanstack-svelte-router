import warning from 'tiny-warning'
import { getRouterContext } from './routerContext'
// TODO: update type class
// import type { AnyRouter, RegisteredRouter } from './router'

// export function useRouter<TRouter extends AnyRouter = RegisteredRouter>(opts?: {
export function useRouter<TRouter extends any>(opts?: {
  warn?: boolean
}): TRouter {
  const value = getRouterContext()
  warning(
    !((opts?.warn ?? true) && !value),
    'useRouter must be used inside a <RouterProvider> component!',
  )
  return value as any
}
