import { getRouterContext } from './getRouterContext'
import routerContextComponent from './routerContext.svelte'

const routerContext = {
  Provider: routerContextComponent
}

export { routerContext, getRouterContext }