import type { CSSProperties, ReactNode } from 'react'
import styles from './code-line.module.css'

const EXTERNAL = { target: '_blank', rel: 'noopener' } as const
const isExternal = (href: string) => /^https?:\/\//.test(href)

type CodeLineProps = {
  number: number
  children?: ReactNode
  size?: 'default' | 'display'
  /** Position in a staggered enter sequence. Omit for no per-line animation. */
  enterIndex?: number
  href?: string
  className?: string
}

export const CodeLine = ({ number, children, size = 'default', enterIndex, href, className }: CodeLineProps) => {
  const classes = [styles.line, size === 'display' && styles.display, enterIndex !== undefined && 'enter-line', className]
    .filter(Boolean)
    .join(' ')
  const style = enterIndex === undefined ? undefined : ({ '--i': enterIndex } as CSSProperties)
  const content = children ?? ' '

  if (href) {
    return (
      <a className={classes} style={style} data-line={number} href={href} {...(isExternal(href) ? EXTERNAL : {})}>
        {content}
      </a>
    )
  }
  return (
    <div className={classes} style={style} data-line={number}>
      {content}
    </div>
  )
}
