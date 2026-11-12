import type { Project, Role } from '@/content/profile'
import { CodeBlock, EditorPane, Token, type Line } from '@/ui'
import styles from './experience-file.module.css'

type ExperienceFileProps = { roles: Role[]; projects: Project[] }

const field = (key: string, value: string) => (
  <>
    {'  '}<Token kind="property">{key}</Token>: <Token kind="string">{value}</Token>
  </>
)

const projectLinks = (slugs: string[], projects: Project[]) => (
  <>
    {'  '}<Token kind="property">projects</Token>: [
    {slugs.map((slug, index) => {
      const project = projects.find((candidate) => candidate.slug === slug)
      return (
        <span key={slug}>
          {index > 0 && ', '}
          <a className={styles.link} href={`/work#${slug}`}>
            {project?.name ?? slug}
          </a>
        </span>
      )
    })}
    ]
  </>
)

const roleLines = (role: Role, projects: Project[]): Line[] => [
  <>
    - <Token kind="property">role</Token>: {role.title}
  </>,
  ...(role.at ? [field('at', role.at)] : []),
  ...(role.when ? [field('when', role.when)] : []),
  ...(role.work ? [field('work', role.work)] : []),
  ...(role.projects?.length ? [projectLinks(role.projects, projects)] : []),
]

export const ExperienceFile = ({ roles, projects }: ExperienceFileProps) => {
  const lines = roles.flatMap((role) => roleLines(role, projects))
  return (
    <EditorPane id="experience" label="Experience" language="YAML" tabs={[{ label: 'experience.yml', kind: 'yml', isActive: true }]}>
      <CodeBlock lines={lines} />
    </EditorPane>
  )
}
