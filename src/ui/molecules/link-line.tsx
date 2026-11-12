import { CodeLine, Icon, IconSwap, StatusLabel, Token, type Status } from '../atoms'
import styles from './link-line.module.css'

type LinkLineProps = { number: number; label: string; href: string; status: Status }

/** A markdown list item that links out; the dot becomes an arrow on hover. */
export const LinkLine = ({ number, label, href, status }: LinkLineProps) => (
  <CodeLine number={number} href={href} className={`${styles.row} swap-trigger`}>
    <span>
      <Token kind="bullet">-</Token> <span className={styles.url}>{label}</span>
    </span>
    <StatusLabel status={status} />
    <span className={styles.icon}>
      <IconSwap idle={<span className={styles.dot} />} active={<Icon name="arrow-up-right" />} />
    </span>
  </CodeLine>
)
