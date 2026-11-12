import type { ReactNode } from 'react'
import { CodeLine } from '../atoms'

export type Line = ReactNode | { content: ReactNode; size: 'display' }

type CodeBlockProps = {
  lines: Line[]
  /** Line number of the first line. */
  start?: number
  /** Stagger each line in on load. */
  staggered?: boolean
}

const isDisplayLine = (line: Line): line is { content: ReactNode; size: 'display' } =>
  typeof line === 'object' && line !== null && 'size' in line

export const CodeBlock = ({ lines, start = 1, staggered = false }: CodeBlockProps) => (
  <>
    {lines.map((line, index) => {
      const display = isDisplayLine(line)
      return (
        <CodeLine
          key={start + index}
          number={start + index}
          size={display ? 'display' : 'default'}
          enterIndex={staggered ? index : undefined}
        >
          {display ? line.content : line}
        </CodeLine>
      )
    })}
  </>
)
