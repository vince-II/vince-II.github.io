import type { Metadata } from 'next'
import { profile } from '@/content/profile'
import { WORK_FILES, WorkIndex } from '@/features/portfolio'
import { CursorProvider, EditorPage, Explorer, StatusBar, TitleBar } from '@/ui'

export const metadata: Metadata = {
  title: 'Work · Vince Nery II',
  description: 'Products Vince Nery II is building and websites he has shipped for clients.',
}

export default function WorkPage() {
  return (
    <CursorProvider initial={{ line: 1, language: 'Markdown' }}>
      <EditorPage
        titleBar={<TitleBar path="~/vince-nery-ii/work · portfolio" />}
        explorer={<Explorer root="vince-nery-ii" files={WORK_FILES} />}
        statusBar={<StatusBar branch="main" status={profile.openToWork ? 'open to work' : 'heads down'} />}
      >
        <WorkIndex projects={profile.projects} />
      </EditorPage>
    </CursorProvider>
  )
}
