export const tsTypeReferences = new Map(
  Object.entries({
    // Unchanged
    'JSX.IntrinsicElements': 'JSX.IntrinsicElements',
    'JSX.Element': 'JSX.Element',
    Context: 'Context',

    PropsWithChildren: 'ParentProps',
    ComponentPropsWithRef: 'ComponentProps',
    HTMLProps: 'JSX.HTMLAttributes',
    RefAttributes: 'JSX.HTMLAttributes',
    ReactNode: 'JSX.Element',
    HTMLAttributes: 'JSX.HTMLAttributes',
    PropsWithoutRef: 'ComponentProps',
    ComponentType: 'Component',
    FC: 'Component',
    Component: 'Component',
    ReactElement: 'JSX.Element',
    LazyExoticComponent: 'JSX.Component',
  }),
)
