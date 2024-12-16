export const memberIndentifiers = new Map(
  Object.entries({
    // Unchanged
    createContext: 'createContext',
    useContext: 'useContext',
    'JSX.IntrinsicElements': 'JSX.IntrinsicElements',
    Context: 'Context',
    Suspense: 'Suspense',
    'JSX.Element': 'JSX.Element',

    // Changed
    RefAttributes: 'JSX.HTMLAttributes',
    ComponentPropsWithRef: 'ComponentProps',
    ReactNode: 'JSX.Element',
    createElement: 'createComponent',
    useState: 'createSignal',
    HTMLProps: 'JSX.HTMLAttributes',
    useLayoutEffect: 'createEffect',
    useEffect: 'createEffect',
    ReactElement: 'Component',
    useMemo: 'createMemo',
    PropsWithoutRef: 'ComponentProps',
    HTMLAttributes: 'JSX.HTMLAttributes',
    ComponentType: 'Component',
    FC: 'Component',
    Component: 'Component',
    LazyExoticComponent: 'JSX.Component',
    memo: 'createMemo',
    PropsWithChildren: 'ParentProps',
  }),
)
