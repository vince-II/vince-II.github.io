import type { ExplorerFile, FileKind } from '@/ui'
import { profile } from '@/content/profile'

export type PagePath = '/' | '/work'

type TreeEntry = {
  name: string
  kind: FileKind
  page: PagePath
  /** Pane id on that page; none means the page itself. */
  pane?: string
  depth?: number
}

/** The one file tree both pages show. */
const TREE: TreeEntry[] = [
  { name: 'index.tsx', kind: 'tsx', page: '/' },
  { name: 'about.ts', kind: 'ts', page: '/', pane: 'about' },
  { name: 'experience.yml', kind: 'yml', page: '/', pane: 'experience' },
  { name: 'work.md', kind: 'md', page: '/', pane: 'work' },
  { name: 'reading.md', kind: 'md', page: '/', pane: 'reading' },
  { name: 'work/', kind: 'dir', page: '/work' },
  ...profile.projects.map((project) => ({
    name: `${project.slug}.md`,
    kind: 'md' as const,
    page: '/work' as const,
    pane: project.slug,
    depth: 1,
  })),
]

/** A link to a pane: a bare hash on its own page, a full path from anywhere else. */
export const linkTo = (from: PagePath, page: PagePath, pane?: string) => {
  if (page === from) return pane ? `#${pane}` : page
  return pane ? `${page === '/' ? '/' : page}#${pane}` : page
}

export const filesFor = (from: PagePath): ExplorerFile[] =>
  TREE.map(({ name, kind, page, pane, depth }) => ({
    name,
    kind,
    depth,
    href: linkTo(from, page, pane),
    isPage: page === from && !pane,
  }))

/** Files on the home page that link to a case study, for its backlinks line. */
export const BACKLINKS: { name: string; href: string }[] = [
  { name: 'experience.yml', href: '/#experience' },
  { name: 'work.md', href: '/#work' },
]
