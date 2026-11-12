'use client'

import type { MouseEvent, PointerEvent, ReactNode } from 'react'
import type { FileKind } from '../atoms'
import { useCursor } from '../lib/cursor'
import { Tab } from '../molecules'
import styles from './editor-pane.module.css'

export type PaneTab = { label: string; kind?: FileKind; isActive?: boolean }

type EditorPaneProps = {
  id: string
  label: string
  language: string
  tabs: PaneTab[]
  variant?: 'editor' | 'panel'
  className?: string
  children: ReactNode
}

/** A tab strip over a body of code lines. Hovering a line moves the shared cursor. */
export const EditorPane = ({ id, label, language, tabs, variant = 'editor', className, children }: EditorPaneProps) => {
  const { moveTo } = useCursor()

  const trackLine = (event: MouseEvent<HTMLDivElement> | PointerEvent<HTMLDivElement>) => {
    if (!(event.target instanceof Element)) return
    const line = event.target.closest('[data-line]')?.getAttribute('data-line')
    if (line) moveTo({ line: Number(line), language })
  }

  return (
    <section id={id} aria-label={label} tabIndex={-1} className={[styles.pane, className].filter(Boolean).join(' ')} data-variant={variant}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <Tab key={tab.label} variant={variant} {...tab} />
        ))}
      </div>
      <div className={styles.body} onMouseOver={trackLine} onPointerDown={trackLine}>
        {children}
      </div>
    </section>
  )
}
