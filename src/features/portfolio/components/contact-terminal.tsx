import type { Contact } from '@/content/profile'
import { Caret, CopyButton, EditorPane, KeyValue, ShellPrompt } from '@/ui'

type ContactTerminalProps = { contact: Contact }

const EMAIL_ID = 'contact-email'

export const ContactTerminal = ({ contact }: ContactTerminalProps) => (
  <EditorPane
    id="contact"
    label="Contact"
    language="Shell"
    variant="panel"
    tabs={[{ label: 'TERMINAL', isActive: true }, { label: 'OUTPUT' }, { label: 'PROBLEMS 0' }]}
  >
    <ShellPrompt user="vince" host="portfolio">cat contact</ShellPrompt>
    <KeyValue label="email">
      <a id={EMAIL_ID} href={`mailto:${contact.email}`}>{contact.email}</a>
      <CopyButton value={contact.email} fallbackTargetId={EMAIL_ID} />
    </KeyValue>
    <KeyValue label="linkedin">
      <a href={contact.linkedin.url} target="_blank" rel="noopener">{contact.linkedin.label}</a>
    </KeyValue>
    <KeyValue label="github">
      <a href={contact.github.url} target="_blank" rel="noopener">{contact.github.label}</a>{' '}
      <Caret />
    </KeyValue>
  </EditorPane>
)
