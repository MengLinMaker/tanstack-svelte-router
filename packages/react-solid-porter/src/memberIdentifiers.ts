export const memberIndentifiers = new Map(
  Object.entries({
    // Unchanged
    createContext: 'createContext',
    useContext: 'useContext',
    Context: 'Context',
    Suspense: 'Suspense',
    Component: 'Component',
    useTransition: 'useTransition',

    // Changed
    createElement: 'createComponent',
    useState: 'createSignal',
    useLayoutEffect: 'createEffect',
    useEffect: 'createEffect',
    ReactElement: 'Component',
    useMemo: 'createMemo',
    memo: 'createMemo',
  }),
)
