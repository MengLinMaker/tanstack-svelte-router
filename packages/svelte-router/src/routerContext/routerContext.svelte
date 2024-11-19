<script lang="ts">
  import { setContext } from 'svelte'
  import { contextKey } from './getRouterContext'
  // TODO: update type class
  // import type { Router } from './router'

  // let routerContextValue = $state<Router<any, any>>()
  let routerContextValue = $state()
  setContext(contextKey, routerContextValue)
</script>
