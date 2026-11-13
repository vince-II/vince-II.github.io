import type { Project } from '@/content/profile'
import { CodeBlock, CodeLine, EditorPane, Icon, IconSwap, StatusLabel, Token, type Line } from '@/ui'
import styles from './case-study.module.css'
import { BACKLINKS } from '../files'
import { Shots } from './shots'

type CaseStudyProps = { project: Project }

const field = (key: string, value: Line) => (
  <>
    <Token kind="property">{key}</Token>: {value}
  </>
)

const documentLines = (project: Project): Line[] => [
  <Token kind="comment">---</Token>,
  field('status', <StatusLabel status={project.status} />),
  field('type', <Token kind="string">{project.kind}</Token>),
  ...(project.role ? [field('role', <Token kind="string">{project.role}</Token>)] : []),
  ...(project.stack?.length ? [field('stack', <Token kind="string">[{project.stack.join(', ')}]</Token>)] : []),
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
  ...(project.summary ?? []).map((sentence) => <span className={styles.prose}>{sentence}</span>),
  ...(project.highlights?.length
    ? [
        null,
        <>
          <Token kind="keyword">##</Token> <span className={styles.subheading}>What it does</span>
        </>,
        ...project.highlights.map((item) => (
          <>
            <Token kind="bullet">-</Token> <span className={styles.prose}>{item}</span>
          </>
        )),
      ]
    : []),
]

export const CaseStudy = ({ project }: CaseStudyProps) => {
  const lines = documentLines(project)
  const last = lines.length
  const end = last + 2
  const backlinks = (
    <>
      <Token kind="comment">{'<!-- linked from '}</Token>
      {BACKLINKS.map((link, index) => (
        <span key={link.href}>
          {index > 0 && <Token kind="comment"> · </Token>}
          <a className={styles.backlink} href={link.href}>
            {link.name}
          </a>
        </span>
      ))}
      <Token kind="comment">{' -->'}</Token>
    </>
  )
  return (
    <EditorPane
      id={project.slug}
      label={project.name}
      language="Markdown"
      tabs={[{ label: `${project.slug}.md`, kind: 'md', isActive: true }]}
      className={styles.card}
    >
      <div className={styles.layout}>
        <div className={styles.text}>
          <CodeBlock lines={lines} />
          {project.url ? (
            <>
              <CodeBlock start={last + 1} lines={[null]} />
              <CodeLine number={last + 2} href={project.url} className={`${styles.visit} swap-trigger`}>
                <span>
                  <Token kind="bullet">→</Token> <span className={styles.url}>visit {project.url.replace(/^https?:\/\//, '')}</span>
                </span>
                <span className={styles.icon}>
                  <IconSwap idle={<span className={styles.dot} />} active={<Icon name="arrow-up-right" />} />
                </span>
              </CodeLine>
            </>
          ) : (
            <CodeBlock
              start={last + 1}
              lines={[
                null,
                <>
                  <Token kind="keyword">&gt;</Token> <Token kind="comment">not public yet</Token>
                </>,
              ]}
            />
          )}
          <div className={styles.noLigatures}>
            <CodeBlock start={end + 1} lines={[backlinks]} />
          </div>
        </div>
        {project.shots?.length ? (
          <div className={styles.media}>
            <Shots shots={project.shots} />
          </div>
        ) : null}
      </div>
    </EditorPane>
  )
}
