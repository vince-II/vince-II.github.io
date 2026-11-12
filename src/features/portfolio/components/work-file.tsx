import type { Project } from '@/content/profile'
import { CodeBlock, CodeLine, EditorPane, LinkLine, Token } from '@/ui'
import styles from './work-file.module.css'

type WorkFileProps = { projects: Project[] }

const HEADER_LINES = 1

export const WorkFile = ({ projects }: WorkFileProps) => (
  <EditorPane id="work" label="Work" language="Markdown" tabs={[{ label: 'work.md', kind: 'md', isActive: true }]}>
    <CodeBlock
      lines={[
        <>
          <Token kind="keyword">#</Token> <span className={styles.heading}>Selected work</span>
        </>,
      ]}
    />
    {projects.map((project, index) => (
      <LinkLine key={project.slug} number={HEADER_LINES + index + 1} label={project.name} href={`/work#${project.slug}`} status={project.status} />
    ))}
    <CodeLine number={HEADER_LINES + projects.length + 1} href="/work" className={`${styles.all} swap-trigger`}>
      <Token kind="comment">[</Token>
      <span className={styles.allLabel}>read the case studies</span>
      <Token kind="comment">](/work)</Token>
    </CodeLine>
  </EditorPane>
)
