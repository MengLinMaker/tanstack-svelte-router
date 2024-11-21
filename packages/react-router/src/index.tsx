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

export { useAwaited, Await } from './awaited'
export type { AwaitOptions } from './awaited'

export { ScriptOnce } from './ScriptOnce'

export { defer } from './defer'
export type { DeferredPromiseState, DeferredPromise } from './defer'

export { CatchBoundary, ErrorComponent } from './CatchBoundary'

export {
  FileRoute,
  createFileRoute,
  FileRouteLoader,
  LazyRoute,
  createLazyRoute,
  createLazyFileRoute,
} from './fileRoute'
export type {
  FileRoutesByPath,
  FileRouteTypes,
  LazyRouteOptions,
} from './fileRoute'

export * from './history'

export { lazyRouteComponent } from './lazyRouteComponent'

export { useLinkProps, createLink, Link, linkOptions } from './link'
export type {
  CleanPath,
  Split,
  ParsePathParams,
  Join,
  Last,
  RemoveTrailingSlashes,
  RemoveLeadingSlashes,
  SearchPaths,
  SearchRelativePathAutoComplete,
  RelativeToParentPathAutoComplete,
  RelativeToCurrentPathAutoComplete,
  AbsolutePathAutoComplete,
  RelativeToPathAutoComplete,
  NavigateOptions,
  ToOptions,
  ToMaskOptions,
  ToSubOptions,
  ResolveRoute,
  SearchParamOptions,
  PathParamOptions,
  ToPathOption,
  ActiveOptions,
  LinkOptions,
  CheckPath,
  ResolveRelativePath,
  UseLinkPropsOptions,
  ActiveLinkOptions,
  LinkProps,
  LinkComponent,
  LinkComponentProps,
  CreateLinkProps,
  MakeOptionalPathParams,
} from './link'

export type { ParsedLocation } from './location'

export {
  Matches,
  useMatchRoute,
  MatchRoute,
  useMatches,
  useParentMatches,
  useChildMatches,
  isMatch,
} from './Matches'
export type {
  RouteMatch,
  AnyRouteMatch,
  MatchRouteOptions,
  UseMatchRouteOptions,
  MakeMatchRouteOptions,
  MakeRouteMatch,
  MakeRouteMatchUnion,
} from './Matches'

export { matchContext } from './matchContext'

export { Match, Outlet } from './Match'

export { isServerSideError, defaultDeserializeError } from './core/isServerSideError'

export { useMatch } from './useMatch'

export { useLoaderDeps } from './useLoaderDeps'

export { useLoaderData } from './useLoaderData'

export {
  joinPaths,
  cleanPath,
  trimPathLeft,
  trimPathRight,
  trimPath,
  resolvePath,
  parsePathname,
  interpolatePath,
  matchPathname,
  removeBasepath,
  matchByPath,
} from './core/path'
export type { Segment } from './core/path'

export { encode, decode } from './core/qss'

export { redirect, isRedirect } from './redirects'
export type { AnyRedirect, Redirect, ResolvedRedirect } from './redirects'

export { rootRouteId } from './core/root'
export type { RootRouteId } from './core/root'

export {
  RouteApi,
  getRouteApi,
  Route,
  createRoute,
  RootRoute,
  rootRouteWithContext,
  createRootRoute,
  createRootRouteWithContext,
  createRouteMask,
  NotFoundRoute,
} from './route'
export type {
  AnyPathParams,
  ResolveParams,
  SearchSchemaInput,
  SearchValidatorAdapter,
  AnyContext,
  RouteContext,
  PreloadableObj,
  RoutePathOptions,
  StaticDataRouteOption,
  RoutePathOptionsIntersection,
  RouteOptions,
  FileBaseRouteOptions,
  BaseRouteOptions,
  UpdatableRouteOptions,
  UpdatableStaticRouteOption,
  MetaDescriptor,
  RouteLinkEntry,
  ParseParamsFn,
  RouteLoaderFn,
  LoaderFnContext,
  SearchFilter,
  ResolveId,
  InferFullSearchSchema,
  InferFullSearchSchemaInput,
  ResolveFullSearchSchema,
  ResolveFullSearchSchemaInput,
  AnyRoute,
  RouteConstraints,
  AnyRootRoute,
  ResolveFullPath,
  RouteMask,
  ErrorRouteProps,
  ErrorComponentProps,
  NotFoundRouteProps,
  ReactNode,
  SyncRouteComponent,
  AsyncRouteComponent,
  RouteComponent,
  ErrorRouteComponent,
  NotFoundRouteComponent,
  TrimPath,
  TrimPathLeft,
  TrimPathRight,
  RootRouteOptions,
  AnyRouteWithContext,
  ParseSplatParams,
  SplatParams,
  StringifyParamsFn,
  ParamsOptions,
  FullSearchSchemaOption,
  RouteContextFn,
  RouteContextOptions,
  BeforeLoadFn,
  BeforeLoadContextOptions,
  AnySearchValidator,
  DefaultSearchValidator,
  ContextOptions,
  SearchValidatorObj,
  AnySearchValidatorObj,
  AnySearchValidatorAdapter,
  AnySearchValidatorFn,
  SearchValidatorFn,
  SearchValidator,
  InferAllParams,
  InferAllContext,
  ResolveSearchSchemaFnInput,
  ResolveSearchSchemaInput,
  ResolveSearchSchema,
  LooseReturnType,
  LooseAsyncReturnType,
  ContextReturnType,
  ContextAsyncReturnType,
  RouteContextParameter,
  BeforeLoadContextParameter,
  ResolveAllContext,
  ResolveLoaderData,
  ResolveAllParamsFromParent,
  ResolveRouteContext,
  ResolveSearchSchemaFn,
} from './route'
export type {
  AnySearchSchema,
} from './core/route'

export type {
  ParseRoute,
  RoutesById,
  RouteById,
  RouteIds,
  RoutesByPath,
  RouteByPath,
  RoutePaths,
  FullSearchSchema,
  AllParams,
  AllLoaderData,
  FullSearchSchemaInput,
  AllContext,
} from './routeInfo'

export {
  componentTypes,
  createRouter,
  Router,
  lazyFn,
  SearchParamError,
  PathParamError,
  getInitialRouterState,
  defaultSerializeError,
} from './router'
export type {
  Register,
  AnyRouter,
  RegisteredRouter,
  HydrationCtx,
  RouterContextOptions,
  TrailingSlashOption,
  RouterOptions,
  RouterErrorSerializer,
  RouterState,
  ListenerFn,
  BuildNextOptions,
  DehydratedRouterState,
  DehydratedRouteMatch,
  DehydratedRouter,
  RouterConstructorOptions,
  RouterEvents,
  RouterEvent,
  RouterListener,
  AnyRouterWithContext,
  ExtractedEntry,
  StreamState,
} from './router'

export { RouterProvider, RouterContextProvider } from './RouterProvider'
export type {
  RouterProps,
  CommitLocationOptions,
  MatchLocation,
  NavigateFn,
  BuildLocationFn,
  InjectedHtmlEntry,
} from './RouterProvider'

export {
  useScrollRestoration,
  useElementScrollRestoration,
  ScrollRestoration,
} from './scroll-restoration'
export type { ScrollRestorationOptions } from './scroll-restoration'

export {
  defaultParseSearch,
  defaultStringifySearch,
  parseSearchWith,
  stringifySearchWith,
} from './core/searchParams'
export type { SearchSerializer, SearchParser } from './core/searchParams'

export { defaultTransformer } from './core/transformer'
export type { RouterTransformer } from './core/transformer'

export { useBlocker, Block } from './useBlocker'

export { useNavigate, Navigate } from './useNavigate'
export type { UseNavigateResult } from './useNavigate'

export { useParams } from './useParams'

export { useSearch } from './useSearch'

export {
  getRouterContext, // SSR
} from './routerContext'

export { useRouteContext } from './useRouteContext'

export { useRouter } from './useRouter'

export { useRouterState } from './useRouterState'

export { useLocation } from './useLocation'

export {
  useLayoutEffect, // SSR
  useStableCallback,
} from './utils'

export {
  escapeJSON, // SSR
  pick,
  functionalUpdate,
  replaceEqualDeep,
  isPlainObject,
  isPlainArray,
  deepEqual,
  shallow,
} from './core/utils'

export {
  notFound,
  isNotFound,
  CatchNotFound,
  DefaultGlobalNotFound,
} from './not-found'
export type { NotFoundError } from './not-found'

export type { Manifest, RouterManagedTag } from './manifest'

export { createControlledPromise } from './core/utils'
export type { ControlledPromise } from './core/utils'

export { retainSearchParams, stripSearchParams } from './searchMiddleware'
