<script lang="ts">
  // import ErrorComponent from './ErrorComponent.svelte'
  import type { Component } from 'svelte'

  type ErrorRouteComponent = Component

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
