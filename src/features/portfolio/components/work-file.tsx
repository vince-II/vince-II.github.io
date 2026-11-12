import type { Project } from '@/content/profile'
import { CodeBlock, EditorPane, LinkLine, Token } from '@/ui'
import styles from './work-file.module.css'

type WorkFileProps = { projects: Project[] }

const HEADER_LINES = 2

export const WorkFile = ({ projects }: WorkFileProps) => (
  <EditorPane id="work" label="Work" language="Markdown" tabs={[{ label: 'work.md', kind: 'md', isActive: true }]}>
    <CodeBlock
      lines={[
        <>
          <Token kind="keyword">#</Token> <span className={styles.heading}>Selected work</span>
        </>,
        null,
      ]}
    />
    {projects.map((project, index) => (
      <LinkLine key={project.url} number={HEADER_LINES + index + 1} label={project.name} href={project.url} status={project.status} />
    ))}
  </EditorPane>
)
