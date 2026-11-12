import { FileBadge, Icon, type FileKind } from '../atoms'
import styles from './tab.module.css'

type TabProps = {
  label: string
  kind?: FileKind
  isActive?: boolean
  variant?: 'editor' | 'panel'
  /** Makes the tab a link that opens in a new tab. */
  href?: string
}

export const Tab = ({ label, kind, isActive = false, variant = 'editor', href }: TabProps) => {
  const content = (
    <>
      {kind && <FileBadge kind={kind} />}
      {label}
      {href && <Icon name="arrow-up-right" className={styles.external} />}
    </>
  )
  if (href) {
    return (
      <a className={`${styles.tab} ${styles.link}`} data-variant={variant} href={href} target="_blank" rel="noopener">
        {content}
      </a>
    )
  }
  return (
    <span className={styles.tab} data-active={isActive} data-variant={variant}>
      {content}
    </span>
  )
}
