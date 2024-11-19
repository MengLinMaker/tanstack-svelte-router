import type {
  ControlledPromise,
} from './utils'

declare global {
  interface Window {
    __TSR__?: {
      matches: Array<{
        __beforeLoadContext?: string
        loaderData?: string
        extracted?: Array<ExtractedEntry>
      }>
      streamedValues: Record<
        string,
        {
          value: any
          parsed: any
        }
      >
      cleanScripts: () => void
      dehydrated?: any
    }
  }
}

export type ExtractedEntry = {
  dataType: '__beforeLoadContext' | 'loaderData'
  type: 'promise' | 'stream'
  path: Array<string>
  value: any
  id: number
  streamState?: StreamState
  matchIndex: number
}

export type StreamState = {
  promises: Array<ControlledPromise<string | null>>
}
