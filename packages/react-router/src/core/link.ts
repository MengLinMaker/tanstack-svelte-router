export type IsRequiredParams<TParams> =
  Record<never, never> extends TParams ? never : true
