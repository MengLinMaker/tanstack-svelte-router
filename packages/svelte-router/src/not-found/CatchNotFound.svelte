<script lang="ts">
  import { CatchBoundary } from '../CatchBoundary'
  import { useRouterState } from '../useRouterState'
  import { isNotFound } from '.'
  import type { NotFoundError } from '.'
  import type { Component } from 'svelte'

  const props = $props<{
    fallback?: (error: NotFoundError) => Component
    onCatch?: (error: Error, errorInfo: any) => void
    children: React.ReactNode
  }>()

  // TODO: Some way for the user to programmatically reset the not-found boundary?
  const resetKey = useRouterState({
    select: (s) => `not-found-${s.location.pathname}-${s.status}`,
  })
</script>

<CatchBoundary
  getResetKey={() => resetKey}
  onCatch={(error, errorInfo) => {
    if (isNotFound(error)) {
      props.onCatch?.(error, errorInfo)
    } else {
      throw error
    }
  }}
  errorComponent={({ error }: { error: Error }) => {
    if (isNotFound(error)) {
      return props.fallback?.(error)
    } else {
      throw error
    }
  }}
>
  {props.children}
</CatchBoundary>
