import { profile } from '@/content/profile'
import { AboutFile, ContactTerminal, ExperienceFile, WorkFile } from '@/features/portfolio'
import { CursorProvider, EditorWindow, Explorer, StatusBar, TitleBar, type ExplorerFile } from '@/ui'

const FILES: ExplorerFile[] = [
  { name: 'about.ts', kind: 'ts', href: '#about' },
  { name: 'experience.yml', kind: 'yml', href: '#experience' },
  { name: 'work.md', kind: 'md', href: '#work' },
  { name: 'contact', kind: 'sh', href: '#contact' },
]

export default function Page() {
  return (
    <CursorProvider initial={{ line: 1, language: 'TypeScript' }}>
      <EditorWindow
        titleBar={<TitleBar path="~/vince-nery-ii · portfolio" />}
        explorer={<Explorer root="vince-nery-ii" files={FILES} />}
        primary={<AboutFile profile={profile} avatarSrc="/avatar.png" />}
        secondary={
          <>
            <ExperienceFile roles={profile.experience} />
            <WorkFile projects={profile.projects} />
          </>
        }
        panel={<ContactTerminal contact={profile.contact} />}
        statusBar={<StatusBar branch="main" status={profile.openToWork ? 'open to work' : 'heads down'} />}
      />
    </CursorProvider>
  )
}
