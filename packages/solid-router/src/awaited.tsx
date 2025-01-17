import * as Solid from 'solid-js'
import warning from 'tiny-warning'
import { useRouter } from './useRouter'
import { defaultSerializeError } from './router'
import { defer } from './defer'
import {
  defaultDeserializeError,
  isServerSideError,
} from './core/isServerSideError'
import type { DeferredPromise } from './defer'

export type AwaitOptions<T> = {
  promise: Promise<T>
}

export function useAwaited<T>({
  promise: _promise,
}: AwaitOptions<T>): [T, DeferredPromise<T>] {
  const router = useRouter()
  const promise = _promise as DeferredPromise<T>

  defer(promise)

  if (promise.status === 'pending') {
    throw promise
  }

  if (promise.status === 'error') {
    if (typeof document !== 'undefined') {
      if (isServerSideError(promise.error)) {
        throw (
          router.options.errorSerializer?.deserialize ?? defaultDeserializeError
        )(promise.error.data as any)
      } else {
        warning(
          false,
          "Encountered a server-side error that doesn't fit the expected shape",
        )
        throw promise.error
      }
    } else {
      throw {
        data: (
          router.options.errorSerializer?.serialize ?? defaultSerializeError
        )(promise.error),
        __isServerError: true,
      }
    }
  }

  return [promise.data as any, promise]
}

export function Await<T>(
  props: AwaitOptions<T> & {
    fallback?: Solid.JSX.Element
    children: (result: T) => Solid.JSX.Element
  },
) {
  const inner = <AwaitInner {...props} />
  if (props.fallback) {
    return <Solid.Suspense fallback={props.fallback}>{inner}</Solid.Suspense>
  }
  return inner
}

function AwaitInner<T>(
  props: AwaitOptions<T> & {
    fallback?: Solid.JSX.Element
    children: (result: T) => Solid.JSX.Element
  },
): Solid.JSX.Element {
  const [data] = useAwaited(props)
  return props.children(data)
}
