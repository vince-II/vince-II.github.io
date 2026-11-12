import type { MouseEventHandler } from 'react'
import { FileBadge, type FileKind } from '../atoms'
import styles from './file-link.module.css'

type FileLinkProps = {
  name: string
  kind: FileKind
  href: string
  isActive?: boolean
  depth?: number
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const FileLink = ({ name, kind, href, isActive = false, depth = 0, onClick }: FileLinkProps) => (
  <a
    className={styles.link}
    href={href}
    data-active={isActive}
    data-depth={depth}
    aria-current={isActive ? 'location' : undefined}
    onClick={onClick}
  >
    <FileBadge kind={kind} />
    {name}
  </a>
)
