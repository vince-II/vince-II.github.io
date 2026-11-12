import styles from './status-label.module.css'

export type Status = 'live' | 'building'

const GLYPHS: Record<Status, string> = { live: '●', building: '◐' }

type StatusLabelProps = { status: Status }

export const StatusLabel = ({ status }: StatusLabelProps) => (
  <span className={`${styles.label} ${styles[status]}`}>
    {GLYPHS[status]} {status}
  </span>
)
