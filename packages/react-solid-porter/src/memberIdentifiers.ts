export const memberIndentifiers = new Map(
  Object.entries({
    // Unchanged
    createContext: 'createContext',
    useContext: 'useContext',
    'JSX.IntrinsicElements': 'JSX.IntrinsicElements',
    Context: 'Context',
    'JSX.Element': 'JSX.Element',

    // Changed
    RefAttributes: 'JSX.HTMLAttributes',
    ReactNode: 'JSX.Element',
    createElement: 'createComponent',
    useState: 'createSignal',
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
  }),
)
