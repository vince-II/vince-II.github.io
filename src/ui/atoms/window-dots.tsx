import styles from './window-dots.module.css'

export const WindowDots = () => (
  <span className={styles.dots} aria-hidden="true">
    <i className={styles.close} />
    <i className={styles.minimize} />
    <i className={styles.zoom} />
  </span>
)
