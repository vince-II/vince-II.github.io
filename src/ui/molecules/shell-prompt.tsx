import type { ReactNode } from 'react'
import styles from './shell-prompt.module.css'

type ShellPromptProps = { user: string; host: string; children?: ReactNode }

export const ShellPrompt = ({ user, host, children }: ShellPromptProps) => (
  <div>
    <span className={styles.host}>
      {user}@{host}
      <span className={styles.path}>:~$</span>
    </span>{' '}
    {children}
  </div>
)
