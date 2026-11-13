import type { Metadata } from 'next'
import { profile } from '@/content/profile'
import { ContactBar, filesFor, WorkIndex } from '@/features/portfolio'
import { CursorProvider, EditorPage, Explorer, StatusBar, TitleBar } from '@/ui'

export const metadata: Metadata = {
  title: 'Work · Vince Nery II',
  description: 'Kaslu Work, RollNight and Popback: products Vince Nery II is building at his studio, Kaslu.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <CursorProvider initial={{ line: 1, language: 'Markdown' }}>
      <EditorPage
        titleBar={<TitleBar path="~/vince-nery-ii/work · portfolio" actions={<ContactBar contact={profile.contact} />} />}
        explorer={<Explorer root="vince-nery-ii" files={filesFor('/work')} />}
        statusBar={<StatusBar branch="main" status={profile.openToWork ? 'open to work' : 'heads down'} />}
      >
        <WorkIndex projects={profile.projects} />
      </EditorPage>
    </CursorProvider>
  )
}
