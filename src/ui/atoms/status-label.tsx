import styles from './status-label.module.css'

export type Status = 'live' | 'building'

const GLYPHS: Record<Status, string> = { live: '●', building: '◐' }

type StatusLabelProps = {
  status: Status
  /** Hide the word on very narrow screens, keeping it for screen readers. */
  collapsible?: boolean
}

export const StatusLabel = ({ status, collapsible = false }: StatusLabelProps) => (
  <span className={`${styles.label} ${styles[status]}`}>
    <span aria-hidden="true">{GLYPHS[status]}</span> <span className={collapsible ? styles.collapsible : undefined}>{status}</span>
  </span>
)
