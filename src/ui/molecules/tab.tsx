import { FileBadge, type FileKind } from '../atoms'
import styles from './tab.module.css'

type TabProps = { label: string; kind?: FileKind; isActive?: boolean; variant?: 'editor' | 'panel' }

export const Tab = ({ label, kind, isActive = false, variant = 'editor' }: TabProps) => (
  <span className={styles.tab} data-active={isActive} data-variant={variant}>
    {kind && <FileBadge kind={kind} />}
    {label}
  </span>
)
