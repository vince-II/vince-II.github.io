'use client'

import { useCursor } from '../lib/cursor'
import styles from './status-bar.module.css'

type StatusBarProps = { branch: string; status: string; encoding?: string; theme?: string }

export const StatusBar = ({ branch, status, encoding = 'UTF-8', theme = 'Dracula' }: StatusBarProps) => {
  const { position } = useCursor()
  return (
    <footer className={styles.bar}>
      <span className={styles.group}>
        <span>⎇ {branch}</span>
        <span className={styles.live}>{status}</span>
      </span>
      <span className={styles.group}>
        <span>
          Ln {position.line}, Col 1
        </span>
        <span className={styles.optional}>{position.language}</span>
        <span className={styles.optional}>{encoding}</span>
        <span className={styles.optional}>{theme}</span>
      </span>
    </footer>
  )
}
