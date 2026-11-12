import type { ReactNode } from 'react'
import styles from './key-value.module.css'

type KeyValueProps = { label: string; children: ReactNode }

export const KeyValue = ({ label, children }: KeyValueProps) => (
  <div className={styles.row}>
    <span className={styles.key}>{label}</span>
    <span className={styles.value}>{children}</span>
  </div>
)
