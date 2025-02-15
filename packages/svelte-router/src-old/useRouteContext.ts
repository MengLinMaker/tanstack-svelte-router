import { useMatch } from './useMatch'
import type { MakeRouteMatch } from './Matches'
import type { AnyRoute } from './route'
import type { AllContext, RouteById, RouteIds } from './routeInfo'
import type { RegisteredRouter } from './router'
import type { Constrain, Expand, StrictOrFrom } from '../utils'

export type UseRouteContextOptions<
  TFrom,
  TStrict extends boolean,
  TRouteContext,
  TSelected,
> = StrictOrFrom<TFrom, TStrict> & {
  select?: (search: TRouteContext) => TSelected
}

export function useRouteContext<
  TRouteTree extends AnyRoute = RegisteredRouter['routeTree'],
  TFrom extends string | undefined = undefined,
  TStrict extends boolean = true,
  TRouteContext = TStrict extends false
    ? AllContext<TRouteTree>
    : Expand<RouteById<TRouteTree, TFrom>['types']['allContext']>,
  TSelected = TRouteContext,
>(
  opts: UseRouteContextOptions<
    Constrain<TFrom, RouteIds<TRouteTree>>,
    TStrict,
    TRouteContext,
    TSelected
  >,
): TSelected {
  return useMatch({
    ...(opts as any),
    select: (match: MakeRouteMatch<TRouteTree, TFrom>) =>
      opts.select ? opts.select(match.context) : match.context,
  })
}
