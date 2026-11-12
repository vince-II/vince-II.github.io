import type { Role } from '@/content/profile'
import { CodeBlock, EditorPane, Token, type Line } from '@/ui'

type ExperienceFileProps = { roles: Role[] }

const field = (key: string, value: string) => (
  <>
    {'  '}<Token kind="property">{key}</Token>: <Token kind="string">{value}</Token>
  </>
)

const roleLines = (role: Role): Line[] => [
  <>
    - <Token kind="property">role</Token>: {role.title}
  </>,
  ...(role.at ? [field('at', role.at)] : []),
  ...(role.when ? [field('when', role.when)] : []),
  field('work', role.work),
]

export const ExperienceFile = ({ roles }: ExperienceFileProps) => {
  const lines = roles.flatMap((role, index) => (index === 0 ? roleLines(role) : [null, ...roleLines(role)]))
  return (
    <EditorPane id="experience" label="Experience" language="YAML" tabs={[{ label: 'experience.yml', kind: 'yml', isActive: true }]}>
      <CodeBlock lines={lines} />
    </EditorPane>
  )
}
