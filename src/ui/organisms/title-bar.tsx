import type { ReactNode } from 'react'
import { WindowDots } from '../atoms'
import styles from './title-bar.module.css'

type TitleBarProps = { path: string; actions?: ReactNode }

export const TitleBar = ({ path, actions }: TitleBarProps) => (
  <div className={styles.bar}>
    <span className={styles.dots}>
      <WindowDots />
    </span>
    <span className={styles.path}>{path}</span>
    {actions && <div className={styles.actions}>{actions}</div>}
  </div>
)
