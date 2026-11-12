export type ProjectStatus = 'live' | 'building'

export type ProjectKind = 'product' | 'client website'

export type Project = {
  slug: string
  name: string
  /** Public URL. Leave out while there is nothing to visit yet. */
  url?: string
  status: ProjectStatus
  kind: ProjectKind
  /** One or two sentences for the case study. */
  summary?: string[]
  /** What you did on it. */
  role?: string
  stack?: string[]
}

export type Role = {
  title: string
  at?: string
  when?: string
  work: string
}

export type Contact = {
  email: string
  linkedin: { label: string; url: string }
  github: { label: string; url: string }
}

export type Profile = {
  name: string
  tagline: string
  roles: string[]
  focus: string[]
  /** Tools grouped by layer; each group is one line in about.ts. */
  stack: { key: string; items: string[] }[]
  openToWork: boolean
  closingNote: [string, string]
  experience: Role[]
  projects: Project[]
  contact: Contact
}

export const profile = {
  name: 'Vince Nery II',
  tagline: 'Software engineer with a backend focus. Full stack when the product needs it.',
  roles: ['Software Engineer', 'Backend', 'Full Stack'],
  focus: ['APIs', 'messaging', 'AI features'],
  stack: [
    { key: 'backend', items: ['Go', 'Node.js', 'TypeScript', 'Python'] },
    { key: 'data', items: ['Postgres', 'SQL'] },
    { key: 'aws', items: ['SNS', 'SQS', 'Aurora RDS'] },
    { key: 'patterns', items: ['DDD'] },
    { key: 'frontend', items: ['React', 'Next.js'] },
  ],
  openToWork: true,
  closingNote: [
    'Mostly backend: APIs, queues and data models.',
    'Full stack when the product needs it, AI features included.',
  ],
  // Add company names and dates here, e.g. { title, at: 'Acme AI', when: '2024 - now', work }
  experience: [
    { title: 'Software Engineer, Freelance', at: 'AI startups', work: 'full-stack builds, LLM features' },
    { title: 'Software Engineer, Full Stack', work: 'web apps from database to UI' },
  ],
  projects: [
    // Fill in summary, role and stack per project; empty fields are left off the case study.
    { slug: 'rollnight', name: 'rollnight.app', url: 'https://rollnight.app', status: 'building', kind: 'product' },
    { slug: 'popback', name: 'popback', status: 'building', kind: 'product' },
    { slug: 'kasluwork', name: 'kasluwork.com.au', url: 'https://kasluwork.com.au', status: 'building', kind: 'client website' },
    { slug: 'gabbstudio', name: 'gabbstudio.com.au', url: 'https://gabbstudio.com.au', status: 'live', kind: 'client website' },
    { slug: 'grimereapers', name: 'grimereapers.com.au', url: 'https://grimereapers.com.au', status: 'live', kind: 'client website' },
  ],
  contact: {
    email: 'vincentneryii@gmail.com',
    linkedin: { label: 'linkedin.com/in/vincenery-ii', url: 'https://www.linkedin.com/in/vincenery-ii/' },
    github: { label: 'github.com/vince-II', url: 'https://github.com/vince-II' },
  },
} satisfies Profile
