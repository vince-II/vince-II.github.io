import type { Book } from '@/content/profile'
import { CodeLine, EditorPane, Token } from '@/ui'
import styles from './reading-file.module.css'

type ReadingFileProps = { books: Book[] }

export const ReadingFile = ({ books }: ReadingFileProps) => (
  <EditorPane id="reading" label="Books I've read" language="Markdown" tabs={[{ label: 'reading.md', kind: 'md', isActive: true }]}>
    <CodeLine number={1}>
      <Token kind="keyword">#</Token> <span className={styles.heading}>Books I&apos;ve read</span>
    </CodeLine>
    <ul className={styles.shelf}>
      {books.map((book) => (
        <li key={book.slug} className={styles.book}>
          <img className={styles.cover} src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} width={128} height={193} loading="lazy" />
          <span className={styles.title} title={book.title}>{book.title}</span>
          <span className={styles.author} title={book.author}>{book.author}</span>
        </li>
      ))}
    </ul>
  </EditorPane>
)
