export interface RouteMatch<
  TRouteId,
  TFullPath,
  TAllParams,
  TFullSearchSchema,
  TLoaderData,
  TAllContext,
  TLoaderDeps,
> {
  id: string
  routeId: TRouteId
  fullPath: TFullPath
  index: number
  pathname: string
  params: TAllParams
  status: 'pending' | 'success' | 'error' | 'redirected' | 'notFound'
  isFetching: false | 'beforeLoad' | 'loader'
  error: unknown
  paramsError: unknown
  searchError: unknown
  updatedAt: number
  // loadPromise?: ControlledPromise<void>
  // beforeLoadPromise?: ControlledPromise<void>
  // loaderPromise?: ControlledPromise<void>
  loaderData?: TLoaderData
  __routeContext: Record<string, unknown>
  __beforeLoadContext: Record<string, unknown>
  context: TAllContext
  search: TFullSearchSchema
  fetchCount: number
  abortController: AbortController
  cause: 'preload' | 'enter' | 'stay'
  loaderDeps: TLoaderDeps
  preload: boolean
  invalid: boolean
  // meta?: Array<React.JSX.IntrinsicElements['meta']>
  // links?: Array<React.JSX.IntrinsicElements['link']>
  // scripts?: Array<React.JSX.IntrinsicElements['script']>
  headers?: Record<string, string>
  globalNotFound?: boolean
  // staticData: StaticDataRouteOption
  // minPendingPromise?: ControlledPromise<void>
  pendingTimeout?: ReturnType<typeof setTimeout>
}
