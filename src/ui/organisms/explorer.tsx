import type { FileKind } from '../atoms'
import { FileLink } from '../molecules'
import styles from './explorer.module.css'

export type ExplorerFile = { name: string; kind: FileKind; href: string }

type ExplorerProps = { root: string; files: ExplorerFile[] }

export const Explorer = ({ root, files }: ExplorerProps) => (
  <nav className={styles.explorer} aria-label="Files">
    <h2 className={styles.heading}>EXPLORER</h2>
    <div className={styles.folder}>{root}</div>
    {files.map((file) => (
      <FileLink key={file.href} {...file} />
    ))}
  </nav>
)
