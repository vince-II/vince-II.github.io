import type { Project } from '@/content/profile'
import { CodeBlock, CodeLine, EditorPane, Icon, IconSwap, StatusLabel, Token, type Line } from '@/ui'
import styles from './case-study.module.css'

type CaseStudyProps = { project: Project }

const frontmatter = (project: Project): Line[] => [
  <Token kind="comment">---</Token>,
  <>
    <Token kind="property">status</Token>: <StatusLabel status={project.status} />
  </>,
  <>
    <Token kind="property">type</Token>: <Token kind="string">{project.kind}</Token>
  </>,
  ...(project.role
    ? [
        <>
          <Token kind="property">role</Token>: <Token kind="string">{project.role}</Token>
        </>,
      ]
    : []),
  ...(project.stack?.length
    ? [
        <>
          <Token kind="property">stack</Token>: [<Token kind="string">{project.stack.join(', ')}</Token>]
        </>,
      ]
    : []),
  <Token kind="comment">---</Token>,
  null,
  {
    size: 'display',
    content: (
      <>
        <Token kind="keyword"># </Token>
        <h2 className={styles.title}>{project.name}</h2>
      </>
    ),
  },
  ...(project.summary?.length ? [null, ...project.summary] : []),
]

export const CaseStudy = ({ project }: CaseStudyProps) => {
  const lines = frontmatter(project)
  return (
    <EditorPane
      id={project.slug}
      label={project.name}
      language="Markdown"
      tabs={[{ label: `${project.slug}.md`, kind: 'md', isActive: true }]}
      className={styles.card}
    >
      <CodeBlock lines={lines} />
      {project.url ? (
        <>
          <CodeBlock start={lines.length + 1} lines={[null]} />
          <CodeLine number={lines.length + 2} href={project.url} className={`${styles.visit} swap-trigger`}>
            <span>
              <Token kind="bullet">→</Token> <span className={styles.url}>visit {project.url.replace(/^https?:\/\//, '')}</span>
            </span>
            <span className={styles.icon}>
              <IconSwap idle={<span className={styles.dot} />} active={<Icon name="arrow-up-right" />} />
            </span>
          </CodeLine>
        </>
      ) : (
        <CodeBlock start={lines.length + 1} lines={[null, <><Token kind="keyword">&gt;</Token> <Token kind="comment">not public yet</Token></>]} />
      )}
    </EditorPane>
  )
}
