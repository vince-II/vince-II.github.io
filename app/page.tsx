import { profile } from '@/content/profile'
import { AboutFile, ContactTerminal, ExperienceFile, HOME_FILES, ReadingFile, WorkFile } from '@/features/portfolio'
import { CursorProvider, EditorWindow, Explorer, StatusBar, TitleBar } from '@/ui'


export default function Page() {
  return (
    <CursorProvider initial={{ line: 1, language: 'TypeScript' }}>
      <EditorWindow
        titleBar={<TitleBar path="~/vince-nery-ii · portfolio" />}
        explorer={<Explorer root="vince-nery-ii" files={HOME_FILES} />}
        primary={<AboutFile profile={profile} avatarSrc="/avatar.png" />}
        secondary={
          <>
            <ExperienceFile roles={profile.experience} />
            <WorkFile projects={profile.projects} />
            <ReadingFile books={profile.books} />
          </>
        }
        panel={<ContactTerminal contact={profile.contact} />}
        statusBar={<StatusBar branch="main" status={profile.openToWork ? 'open to work' : 'heads down'} />}
      />
    </CursorProvider>
  )
}
