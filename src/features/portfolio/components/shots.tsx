import type { Project } from '@/content/profile'
import styles from './shots.module.css'

type ShotsProps = { shots: NonNullable<Project['shots']> }

/** A row of product screenshots; each opens full size in a new tab. Scrolls sideways on phones. */
export const Shots = ({ shots }: ShotsProps) => (
  <ul className={styles.row}>
    {shots.map((shot) => (
      <li key={shot.src} className={styles.item} data-kind={shot.kind}>
        <a href={shot.src} target="_blank" rel="noopener" className={styles.link}>
          <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" decoding="async" className={styles.image} />
        </a>
      </li>
    ))}
  </ul>
)
