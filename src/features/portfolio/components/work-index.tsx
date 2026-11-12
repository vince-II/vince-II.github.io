import type { Project } from '@/content/profile'
import { CodeBlock, EditorPane, Token } from '@/ui'
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
            {projects.length} projects. Products I&apos;m building and websites I&apos;ve shipped for clients.
          </Token>,
        ]}
      />
    </EditorPane>
    <div className={styles.grid}>
      {projects.map((project) => (
        <CaseStudy key={project.slug} project={project} />
      ))}
    </div>
  </div>
)
