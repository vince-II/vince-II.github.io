import type { ReactNode } from 'react'
import styles from './icon-swap.module.css'

type IconSwapProps = {
  idle: ReactNode
  active: ReactNode
  /** Force the active icon. Without it, the swap follows hover/focus on the nearest `.swap-trigger`. */
  isActive?: boolean
}

/** Cross-fades two mounted icons: scale .25 -> 1, opacity, blur 4px -> 0, no overshoot. */
export const IconSwap = ({ idle, active, isActive = false }: IconSwapProps) => (
  <span className={styles.swap} data-active={isActive} aria-hidden="true">
    <span className={styles.idle}>{idle}</span>
    <span className={styles.active}>{active}</span>
  </span>
)
