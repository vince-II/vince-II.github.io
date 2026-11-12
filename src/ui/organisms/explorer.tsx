'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import type { FileKind } from '../atoms'
import { FileLink } from '../molecules'
import styles from './explorer.module.css'

export type ExplorerFile = {
  name: string
  kind: FileKind
  href: string
  /** Shown as selected when no in-page file is targeted, e.g. the current page itself. */
  isPage?: boolean
  depth?: number
}

type ExplorerProps = { root: string; files: ExplorerFile[] }

const isInPage = (href: string) => href.startsWith('#')

const resolveActive = (files: ExplorerFile[], hash: string) => {
  const targeted = files.find((file) => isInPage(file.href) && file.href === hash)
  return (targeted ?? files.find((file) => file.isPage))?.href
}

/** Moves keyboard focus to the pane a file opens, after the browser has jumped to it. */
const focusPane = (href: string) => {
  requestAnimationFrame(() => document.getElementById(href.slice(1))?.focus({ preventScroll: true }))
}

export const Explorer = ({ root, files }: ExplorerProps) => {
  const [activeHref, setActiveHref] = useState(() => files.find((file) => file.isPage)?.href)
  const nav = useRef<HTMLElement>(null)

  // On phones the explorer is a horizontal strip; keep the selected file in view.
  useEffect(() => {
    nav.current?.querySelector('[aria-current]')?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }, [activeHref])

  useEffect(() => {
    const sync = () => setActiveHref(resolveActive(files, window.location.hash))
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [files])

  const open = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isInPage(href)) return
    if (window.location.hash === href) {
      event.preventDefault()
      document.getElementById(href.slice(1))?.scrollIntoView({ block: 'start' })
      replayHighlight(href)
    }
    setActiveHref(href)
    focusPane(href)
  }

  return (
    <nav ref={nav} className={styles.explorer} aria-label="Files">
      <h2 className={styles.heading}>EXPLORER</h2>
      <div className={styles.folder}>{root}</div>
      {files.map((file) => (
        <FileLink key={file.href} {...file} isActive={file.href === activeHref} onClick={open(file.href)} />
      ))}
    </nav>
  )
}

/** Clicking the file that is already open replays the pane's highlight. */
const replayHighlight = (href: string) => {
  const pane = document.getElementById(href.slice(1))
  if (!pane) return
  pane.removeAttribute('data-flash')
  void pane.offsetWidth
  pane.setAttribute('data-flash', '')
}
