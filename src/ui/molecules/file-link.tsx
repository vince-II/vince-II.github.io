import { FileBadge, type FileKind } from '../atoms'
import styles from './file-link.module.css'

type FileLinkProps = { name: string; kind: FileKind; href: string }

export const FileLink = ({ name, kind, href }: FileLinkProps) => (
  <a className={styles.link} href={href}>
    <FileBadge kind={kind} />
    {name}
  </a>
)
