import type { Contact } from '@/content/profile'
import { CopyButton, Icon } from '@/ui'
import styles from './contact-bar.module.css'

type ContactBarProps = { contact: Contact }

const EMAIL_ID = 'contact-email'

/** Email, LinkedIn and GitHub, in the title bar so they are on screen on every page. */
export const ContactBar = ({ contact }: ContactBarProps) => (
  <nav className={styles.bar} aria-label="Contact" id="contact">
    <a className={`${styles.chip} ${styles.mail}`} href={`mailto:${contact.email}`}>
      <Icon name="mail" />
      <span id={EMAIL_ID} className={styles.address}>{contact.email}</span>
      <span className={styles.short}>Email</span>
    </a>
    <CopyButton value={contact.email} fallbackTargetId={EMAIL_ID} compact />
    <a className={styles.chip} href={contact.linkedin.url} target="_blank" rel="noopener">
      LinkedIn <Icon name="arrow-up-right" className={styles.out} />
    </a>
    <a className={styles.chip} href={contact.github.url} target="_blank" rel="noopener">
      GitHub <Icon name="arrow-up-right" className={styles.out} />
    </a>
  </nav>
)
