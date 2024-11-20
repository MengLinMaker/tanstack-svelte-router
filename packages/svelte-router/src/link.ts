export type IsRequiredParams<TParams> =
  Record<never, never> extends TParams ? never : true

export type ParsePathParams<
  T extends string,
  TAcc = never,
> = T extends `${string}$${string}`
  ? T extends `${string}$${infer TPossiblyParam}`
  ? TPossiblyParam extends `${string}/${string}`
  ? TPossiblyParam extends `${infer TParam}/${infer TRest}`
  ? ParsePathParams<TRest, TParam extends '' ? TAcc : TParam | TAcc>
  : never
  : TPossiblyParam extends ''
  ? TAcc
  : TPossiblyParam | TAcc
  : TAcc
  : TAcc


export interface NavigateOptionProps {
  // `replace` is a boolean that determines whether the navigation should replace the current history entry or push a new one.
  replace?: boolean
  resetScroll?: boolean
  /** @deprecated All navigations now use startTransition under the hood */
  startTransition?: boolean
  // if set to `true`, the router will wrap the resulting navigation in a document.startViewTransition() call.
  viewTransition?: boolean
  ignoreBlocker?: boolean
}
