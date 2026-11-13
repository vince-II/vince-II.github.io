import type { Project } from '@/content/profile'
import { CodeBlock, CodeLine, EditorPane, Token } from '@/ui'
import { CaseStudy } from './case-study'
import styles from './work-index.module.css'

type WorkIndexProps = { projects: Project[] }

export const WorkIndex = ({ projects }: WorkIndexProps) => (
  <div className={styles.page}>
    <EditorPane id="readme" label="Work" language="Markdown" tabs={[{ label: 'work/README.md', kind: 'md', isActive: true }]}>
      <CodeBlock
        lines={[
          {
            size: 'display',
            content: (
              <>
                <Token kind="keyword"># </Token>
                <h1 className={styles.title}>Work</h1>
              </>
            ),
          },
          <Token kind="comment">
            {projects.length} products from Kaslu, my own studio. Click a screenshot to see it full size.
          </Token>,
        ]}
      />
      <CodeLine number={3} href="/" className={styles.back}>
        <Token kind="comment">[</Token>
        <span className={styles.backLabel}>← back to index.tsx</span>
        <Token kind="comment">](/)</Token>
      </CodeLine>
    </EditorPane>
    <div className={styles.grid}>
      {projects.map((project) => (
        <CaseStudy key={project.slug} project={project} />
      ))}
    </div>
  </div>
)
