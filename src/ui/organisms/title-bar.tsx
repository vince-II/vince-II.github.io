import { WindowDots } from '../atoms'
import styles from './title-bar.module.css'

type TitleBarProps = { path: string }

export const TitleBar = ({ path }: TitleBarProps) => (
  <div className={styles.bar}>
    <WindowDots />
    <span className={styles.path}>{path}</span>
  </div>
)
