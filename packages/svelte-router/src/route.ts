import type { Component } from 'svelte'

export type AnyPathParams = {}

export type AnySearchSchema = {}

export type SearchMiddlewareContext<TSearchSchema> = {
  search: TSearchSchema
  next: (newSearch: TSearchSchema) => TSearchSchema
}

export type ErrorComponentProps = {
  error: Error
  info?: { componentStack: string }
  reset: () => void
}

export type SearchMiddleware<TSearchSchema> = (
  ctx: SearchMiddlewareContext<TSearchSchema>,
) => TSearchSchema

export type SyncRouteComponent<TProps> = (props: TProps) => Component

export type AsyncRouteComponent<TProps> = SyncRouteComponent<TProps> & {
  preload?: () => Promise<void>
}

export type RouteComponent<TProps = any> = AsyncRouteComponent<TProps>

export type ErrorRouteComponent = RouteComponent<ErrorComponentProps>
