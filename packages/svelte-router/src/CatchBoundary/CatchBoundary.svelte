<script lang="ts">
  import type { ErrorRouteComponent } from '../route'
  import type { Component } from 'svelte'
  // import ErrorComponent from './ErrorComponent.svelte'

  const props = $props<{
    getResetKey: () => number | string
    children: Component
    errorComponent?: ErrorRouteComponent
    onCatch?: (error: Error, errorInfo: any) => void
  }>()

  // const RenderedErrorComponent: Component =
  //   props.errorComponent ?? ErrorComponent
</script>

<!-- <svelte:boundary}> -->
{@render props.children()}

<!-- {#snippet failed(error, reset)}
    <RenderedErrorComponent/>
  {/snippet}
</svelte:boundary> -->
