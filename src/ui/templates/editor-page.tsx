import type { ReactNode } from 'react'
import { enterDelay } from '../lib/enter'
import styles from './editor-page.module.css'

type EditorPageProps = {
  titleBar: ReactNode
  explorer: ReactNode
  statusBar: ReactNode
  children: ReactNode
}

/** Layout only: an editor window whose main area scrolls with the page. */
export const EditorPage = ({ titleBar, explorer, statusBar, children }: EditorPageProps) => (
  <div className={styles.desk}>
    <main className={`${styles.window} enter`} style={enterDelay(0)}>
      {titleBar}
      <div className={styles.body}>
        <div className={`${styles.explorer} enter`} style={enterDelay(100)}>
          {explorer}
        </div>
        <div className={`${styles.content} enter`} style={enterDelay(200)}>
          {children}
        </div>
      </div>
      {statusBar}
    </main>
  </div>
)
