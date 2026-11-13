import type { ReactNode } from 'react'
import { enterDelay } from '../lib/enter'
import styles from './editor-window.module.css'

type EditorWindowProps = {
  titleBar: ReactNode
  explorer: ReactNode
  primary: ReactNode
  secondary: ReactNode
  panel?: ReactNode
  statusBar: ReactNode
}

/** Layout only: an editor window with explorer, two editor columns, a bottom panel and a status bar. */
export const EditorWindow = ({ titleBar, explorer, primary, secondary, panel, statusBar }: EditorWindowProps) => (
  <div className={styles.desk}>
    <main className={`${styles.window} enter`} style={enterDelay(0)}>
      {titleBar}
      <div className={styles.body}>
        <div className={`${styles.explorer} enter`} style={enterDelay(100)}>
          {explorer}
        </div>
        <div className={styles.panes}>
          <div className={`${styles.primary} enter`} style={enterDelay(200)}>
            {primary}
          </div>
          <div className={`${styles.secondary} enter`} style={enterDelay(300)}>
            {secondary}
          </div>
          {panel && (
            <div className={`${styles.panel} enter`} style={enterDelay(500)}>
              {panel}
            </div>
          )}
        </div>
      </div>
      {statusBar}
    </main>
  </div>
)
