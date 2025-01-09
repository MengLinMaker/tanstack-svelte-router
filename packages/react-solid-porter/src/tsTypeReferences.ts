export const tsTypeReferences = new Map(
  Object.entries({
    // Unchanged
    'JSX.IntrinsicElements': 'JSX.IntrinsicElements',
    'JSX.Element': 'JSX.Element',

    PropsWithChildren: 'ParentProps',
    ComponentPropsWithRef: 'ComponentProps',
    HTMLProps: 'JSX.HTMLAttributes',
    RefAttributes: 'JSX.HTMLAttributes',
    ReactNode: 'JSX.Element',
  }),
)
