import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_first/_second-layout/route-without-file/layout-a',
)({
  component: LayoutAComponent,
})

function LayoutAComponent() {
  return <div>I'm layout A!</div>
}