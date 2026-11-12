import type { ExplorerFile } from '@/ui'
import { profile } from '@/content/profile'

export const HOME_FILES: ExplorerFile[] = [
  { name: 'index.tsx', kind: 'tsx', href: '/', isPage: true },
  { name: 'about.ts', kind: 'ts', href: '#about' },
  { name: 'experience.yml', kind: 'yml', href: '#experience' },
  { name: 'work.md', kind: 'md', href: '#work' },
  { name: 'reading.md', kind: 'md', href: '#reading' },
  { name: 'contact', kind: 'sh', href: '#contact' },
  { name: 'work/', kind: 'md', href: '/work' },
]

export const WORK_FILES: ExplorerFile[] = [
  { name: 'index.tsx', kind: 'tsx', href: '/' },
  { name: 'about.ts', kind: 'ts', href: '/#about' },
  { name: 'experience.yml', kind: 'yml', href: '/#experience' },
  { name: 'contact', kind: 'sh', href: '/#contact' },
  { name: 'work/', kind: 'md', href: '#readme', isPage: true },
  ...profile.projects.map((project) => ({
    name: `${project.slug}.md`,
    kind: 'md' as const,
    href: `#${project.slug}`,
    depth: 1,
  })),
]
