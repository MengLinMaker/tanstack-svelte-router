import type * as Solid from 'solid-js'

export function ScriptOnce({
  className,
  children,
  log,
  ...rest
}: {
  children: string
  log?: boolean
} & Solid.JSX.HTMLAttributes<HTMLScriptElement>) {
  if (typeof document !== 'undefined') {
    return null
  }

  return (
    <script
      {...rest}
      className={`tsr-once ${className || ''}`}
      dangerouslySetInnerHTML={{
        __html: [
          children,
          (log ?? true) && process.env.NODE_ENV === 'development'
            ? `console.info(\`Injected From Server:
${children}\`)`
            : '',
        ]
          .filter(Boolean)
          .join('\n'),
      }}
    />
  )
}
