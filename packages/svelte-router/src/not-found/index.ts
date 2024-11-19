import DefaultGlobalNotFound from './DefaultGlobalNotFound.svelte'
import CatchNotFound from './CatchNotFound.svelte'

export { DefaultGlobalNotFound, CatchNotFound }

export type NotFoundError = {
  /**
    @deprecated
    Use `routeId: rootRouteId` instead
  */
  global?: boolean
  /**
    @private
    Do not use this. It's used internally to indicate a path matching error
  */
  _global?: boolean
  data?: any
  throw?: boolean
  // TODO: fix types which depend on `Route` class
  // routeId?: RouteIds<RegisteredRouter['routeTree']>
  routeId?: any
  headers?: HeadersInit
}

export function notFound(options: NotFoundError = {}) {
  ;(options as any).isNotFound = true
  if (options.throw) throw options
  return options
}

export function isNotFound(obj: any): obj is NotFoundError {
  return !!obj?.isNotFound
}
