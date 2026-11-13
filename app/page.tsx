import { profile } from '@/content/profile'
import { AboutFile, ContactBar, ExperienceFile, filesFor, ReadingFile, WorkFile } from '@/features/portfolio'
import { CursorProvider, EditorWindow, Explorer, StatusBar, TitleBar } from '@/ui'


export default function Page() {
  return (
    <CursorProvider initial={{ line: 1, language: 'TypeScript' }}>
      <EditorWindow
        titleBar={<TitleBar path="~/vince-nery-ii · portfolio" actions={<ContactBar contact={profile.contact} />} />}
        explorer={<Explorer root="vince-nery-ii" files={filesFor('/')} />}
        primary={<AboutFile profile={profile} avatarSrc="/avatar.png" />}
        secondary={
          <>
            <ExperienceFile roles={profile.experience} projects={profile.projects} />
            <WorkFile projects={profile.projects} />
            <ReadingFile books={profile.books} />
          </>
        }
        statusBar={<StatusBar branch="main" status={profile.openToWork ? 'open to work' : 'heads down'} />}
      />
    </CursorProvider>
  )
}
