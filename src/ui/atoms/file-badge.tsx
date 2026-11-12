import styles from './file-badge.module.css'

export type FileKind = 'tsx' | 'ts' | 'yml' | 'md' | 'sh'

const LABELS: Record<FileKind, string> = { tsx: 'TSX', ts: 'TS', yml: 'YML', md: 'MD', sh: '$_' }

type FileBadgeProps = { kind: FileKind }

export const FileBadge = ({ kind }: FileBadgeProps) => (
  <span className={`${styles.badge} ${styles[kind]}`} aria-hidden="true">
    {LABELS[kind]}
  </span>
)
