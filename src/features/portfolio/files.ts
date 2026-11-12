import type { ExplorerFile } from '@/ui'

export const HOME_FILES: ExplorerFile[] = [
  { name: 'about.ts', kind: 'ts', href: '#about' },
  { name: 'experience.yml', kind: 'yml', href: '#experience' },
  { name: 'work.md', kind: 'md', href: '#work' },
  { name: 'reading.md', kind: 'md', href: '#reading' },
  { name: 'contact', kind: 'sh', href: '#contact' },
  { name: 'work/', kind: 'md', href: '/work' },
]

export const WORK_FILES: ExplorerFile[] = [
  { name: 'about.ts', kind: 'ts', href: '/#about' },
  { name: 'experience.yml', kind: 'yml', href: '/#experience' },
  { name: 'contact', kind: 'sh', href: '/#contact' },
  { name: 'work/', kind: 'md', href: '#readme' },
]
