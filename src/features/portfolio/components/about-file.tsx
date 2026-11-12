import type { Profile } from '@/content/profile'
import { Avatar, CodeBlock, EditorPane, Token, type Line } from '@/ui'
import styles from './about-file.module.css'

type AboutFileProps = { profile: Profile; avatarSrc: string }

const stringList = (items: string[]) =>
  items.map((item, index) => (
    <span key={item}>
      {index > 0 && ', '}
      <Token kind="string">&quot;{item}&quot;</Token>
    </span>
  ))

export const AboutFile = ({ profile, avatarSrc }: AboutFileProps) => {
  const lines: Line[] = [
    <>
      <Avatar src={avatarSrc} alt={`Illustrated portrait of ${profile.name}`} />
      <Token kind="comment">/**</Token>
    </>,
    {
      size: 'display',
      content: (
        <>
          <Token kind="comment"> * </Token>
          <h1 className={styles.name}>{profile.name}</h1>
        </>
      ),
    },
    <Token kind="comment"> * {profile.tagline}</Token>,
    <Token kind="comment"> */</Token>,
    null,
    <>
      <Token kind="keyword">export const</Token> vince <Token kind="keyword">=</Token> {'{'}
    </>,
    <>
      {'  '}<Token kind="property">roles</Token>: [{stringList(profile.roles)}],
    </>,
    <>
      {'  '}<Token kind="property">focus</Token>: [{stringList(profile.focus)}],
    </>,
    <>
      {'  '}<Token kind="property">stack</Token>: {'{'}
    </>,
    ...profile.stack.map(({ key, items }) => (
      <>
        {'    '}<Token kind="property">{key}</Token>: [{stringList(items)}],
      </>
    )),
    '  },',
    <>
      {'  '}<Token kind="property">interests</Token>: [{stringList(profile.interests)}],
    </>,
    <>
      {'  '}<Token kind="property">openToWork</Token>: <Token kind="constant">{String(profile.openToWork)}</Token>,
    </>,
    '};',
    null,
    <Token kind="comment">// {profile.closingNote[0]}</Token>,
    <Token kind="comment">// {profile.closingNote[1]}</Token>,
  ]

  return (
    <EditorPane
      id="about"
      label="About"
      language="TypeScript"
      tabs={[{ label: 'about.ts', kind: 'ts', isActive: true }, { label: 'README.md', kind: 'md', href: profile.contact.github.url }]}
    >
      <CodeBlock lines={lines} staggered />
    </EditorPane>
  )
}
