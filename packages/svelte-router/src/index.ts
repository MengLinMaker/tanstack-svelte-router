export {
  createHistory,
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
} from '@tanstack/history'
export type {
  BlockerFn,
  HistoryLocation,
  RouterHistory,
  ParsedPath,
  HistoryState,
} from '@tanstack/history'
export { default as invariant } from 'tiny-invariant'
export { default as warning } from 'tiny-warning'

// export { useAwaited, Await } from './tmp/awaited'
// export type { AwaitOptions } from './tmp/awaited'

// export { ScriptOnce } from './tmp/ScriptOnce'

// export { defer } from './tmp/defer'
// export type { DeferredPromiseState, DeferredPromise } from './tmp/defer'

// export { CatchBoundary, ErrorComponent } from './tmp/CatchBoundary'

// export {
//   FileRoute,
//   createFileRoute,
//   FileRouteLoader,
//   LazyRoute,
//   createLazyRoute,
//   createLazyFileRoute,
// } from './tmp/fileRoute'
// export type {
//   FileRoutesByPath,
//   FileRouteTypes,
//   LazyRouteOptions,
// } from './tmp/fileRoute'

// export * from './tmp/history'

// export { lazyRouteComponent } from './tmp/lazyRouteComponent'

// export { useLinkProps, createLink, Link, linkOptions } from './tmp/link'
// export type {
//   CleanPath,
//   Split,
//   ParsePathParams,
//   Join,
//   Last,
//   RemoveTrailingSlashes,
//   RemoveLeadingSlashes,
//   SearchPaths,
//   SearchRelativePathAutoComplete,
//   RelativeToParentPathAutoComplete,
//   RelativeToCurrentPathAutoComplete,
//   AbsolutePathAutoComplete,
//   RelativeToPathAutoComplete,
//   NavigateOptions,
//   ToOptions,
//   ToMaskOptions,
//   ToSubOptions,
//   ResolveRoute,
//   SearchParamOptions,
//   PathParamOptions,
//   ToPathOption,
//   ActiveOptions,
//   LinkOptions,
//   CheckPath,
//   ResolveRelativePath,
//   UseLinkPropsOptions,
//   ActiveLinkOptions,
//   LinkProps,
//   LinkComponent,
//   LinkComponentProps,
//   CreateLinkProps,
//   MakeOptionalPathParams,
// } from './tmp/link'

// export type { ParsedLocation } from './tmp/location'

// export {
//   Matches,
//   useMatchRoute,
//   MatchRoute,
//   useMatches,
//   useParentMatches,
//   useChildMatches,
//   isMatch,
// } from './tmp/Matches'
// export type {
//   RouteMatch,
//   AnyRouteMatch,
//   MatchRouteOptions,
//   UseMatchRouteOptions,
//   MakeMatchRouteOptions,
//   MakeRouteMatch,
//   MakeRouteMatchUnion,
// } from './tmp/Matches'

// export { matchContext } from './tmp/matchContext'

// export { Match, Outlet } from './tmp/Match'

// export { isServerSideError, defaultDeserializeError } from './tmp/isServerSideError'

// export { useMatch } from './tmp/useMatch'

// export { useLoaderDeps } from './tmp/useLoaderDeps'

// export { useLoaderData } from './tmp/useLoaderData'

// export {
//   joinPaths,
//   cleanPath,
//   trimPathLeft,
//   trimPathRight,
//   trimPath,
//   resolvePath,
//   parsePathname,
//   interpolatePath,
//   matchPathname,
//   removeBasepath,
//   matchByPath,
// } from './tmp/path'
// export type { Segment } from './tmp/path'

export { encode, decode } from './qss'

// export { redirect, isRedirect } from './tmp/redirects'
// export type { AnyRedirect, Redirect, ResolvedRedirect } from './tmp/redirects'

export { rootRouteId } from './root'
export type { RootRouteId } from './root'

// export {
//   RouteApi,
//   getRouteApi,
//   Route,
//   createRoute,
//   RootRoute,
//   rootRouteWithContext,
//   createRootRoute,
//   createRootRouteWithContext,
//   createRouteMask,
//   NotFoundRoute,
// } from './tmp/route'
// export type {
//   AnyPathParams,
//   ResolveParams,
//   SearchSchemaInput,
//   SearchValidatorAdapter,
//   AnySearchSchema,
//   AnyContext,
//   RouteContext,
//   PreloadableObj,
//   RoutePathOptions,
//   StaticDataRouteOption,
//   RoutePathOptionsIntersection,
//   RouteOptions,
//   FileBaseRouteOptions,
//   BaseRouteOptions,
//   UpdatableRouteOptions,
//   UpdatableStaticRouteOption,
//   MetaDescriptor,
//   RouteLinkEntry,
//   ParseParamsFn,
//   RouteLoaderFn,
//   LoaderFnContext,
//   SearchFilter,
//   ResolveId,
//   InferFullSearchSchema,
//   InferFullSearchSchemaInput,
//   ResolveFullSearchSchema,
//   ResolveFullSearchSchemaInput,
//   AnyRoute,
//   RouteConstraints,
//   AnyRootRoute,
//   ResolveFullPath,
//   RouteMask,
//   ErrorRouteProps,
//   ErrorComponentProps,
//   NotFoundRouteProps,
//   ReactNode,
//   SyncRouteComponent,
//   AsyncRouteComponent,
//   RouteComponent,
//   ErrorRouteComponent,
//   NotFoundRouteComponent,
//   TrimPath,
//   TrimPathLeft,
//   TrimPathRight,
//   RootRouteOptions,
//   AnyRouteWithContext,
//   ParseSplatParams,
//   SplatParams,
//   StringifyParamsFn,
//   ParamsOptions,
//   FullSearchSchemaOption,
//   RouteContextFn,
//   RouteContextOptions,
//   BeforeLoadFn,
//   BeforeLoadContextOptions,
//   AnySearchValidator,
//   DefaultSearchValidator,
//   ContextOptions,
//   SearchValidatorObj,
//   AnySearchValidatorObj,
//   AnySearchValidatorAdapter,
//   AnySearchValidatorFn,
//   SearchValidatorFn,
//   SearchValidator,
//   InferAllParams,
//   InferAllContext,
//   ResolveSearchSchemaFnInput,
//   ResolveSearchSchemaInput,
//   ResolveSearchSchema,
//   LooseReturnType,
//   LooseAsyncReturnType,
//   ContextReturnType,
//   ContextAsyncReturnType,
//   RouteContextParameter,
//   BeforeLoadContextParameter,
//   ResolveAllContext,
//   ResolveLoaderData,
//   ResolveAllParamsFromParent,
//   ResolveRouteContext,
//   ResolveSearchSchemaFn,
// } from './tmp/route'

// export type {
//   ParseRoute,
//   RoutesById,
//   RouteById,
//   RouteIds,
//   RoutesByPath,
//   RouteByPath,
//   RoutePaths,
//   FullSearchSchema,
//   AllParams,
//   AllLoaderData,
//   FullSearchSchemaInput,
//   AllContext,
// } from './tmp/routeInfo'

// export {
//   componentTypes,
//   createRouter,
//   Router,
//   lazyFn,
//   SearchParamError,
//   PathParamError,
//   getInitialRouterState,
//   defaultSerializeError,
// } from './tmp/router'
// export type {
//   Register,
//   AnyRouter,
//   RegisteredRouter,
//   HydrationCtx,
//   RouterContextOptions,
//   TrailingSlashOption,
//   RouterOptions,
//   RouterErrorSerializer,
//   RouterState,
//   ListenerFn,
//   BuildNextOptions,
//   DehydratedRouterState,
//   DehydratedRouteMatch,
//   DehydratedRouter,
//   RouterConstructorOptions,
//   RouterEvents,
//   RouterEvent,
//   RouterListener,
//   AnyRouterWithContext,
//   ExtractedEntry,
//   StreamState,
// } from './tmp/router'

// export { RouterProvider, RouterContextProvider } from './tmp/RouterProvider'
// export type {
//   RouterProps,
//   CommitLocationOptions,
//   MatchLocation,
//   NavigateFn,
//   BuildLocationFn,
//   InjectedHtmlEntry,
// } from './tmp/RouterProvider'

// export {
//   useScrollRestoration,
//   useElementScrollRestoration,
//   ScrollRestoration,
// } from './tmp/scroll-restoration'
// export type { ScrollRestorationOptions } from './tmp/scroll-restoration'

// export {
//   defaultParseSearch,
//   defaultStringifySearch,
//   parseSearchWith,
//   stringifySearchWith,
// } from './tmp/searchParams'
// export type { SearchSerializer, SearchParser } from './tmp/searchParams'

// export { defaultTransformer } from './tmp/transformer'
// export type { RouterTransformer } from './tmp/transformer'

// export { useBlocker, Block } from './tmp/useBlocker'

// export { useNavigate, Navigate } from './tmp/useNavigate'
// export type { UseNavigateResult } from './tmp/useNavigate'

// export { useParams } from './tmp/useParams'

// export { useSearch } from './tmp/useSearch'

// export {
//   getRouterContext, // SSR
// } from './tmp/routerContext'

// export { useRouteContext } from './tmp/useRouteContext'

// export { useRouter } from './tmp/useRouter'

// export { useRouterState } from './tmp/useRouterState'

// export { useLocation } from './tmp/useLocation'

export {
  escapeJSON, // SSR
  // useLayoutEffect, // SSR is same in Svelte
  pick,
  functionalUpdate,
  replaceEqualDeep,
  isPlainObject,
  isPlainArray,
  deepEqual,
  // useStableCallback,
  // shallow,
} from './utils'

// export {
//   notFound,
//   isNotFound,
//   CatchNotFound,
//   DefaultGlobalNotFound,
// } from './tmp/not-found'
// export type { NotFoundError } from './tmp/not-found'

// export type { Manifest, RouterManagedTag } from './tmp/manifest'

export { createControlledPromise } from './utils'
export type { ControlledPromise } from './utils'

// export { retainSearchParams, stripSearchParams } from './tmp/searchMiddleware'
