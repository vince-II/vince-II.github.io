export type ProjectStatus = 'live' | 'building'

export type Project = {
  name: string
  url: string
  status: ProjectStatus
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
  role: string
  focus: string[]
  background: string[]
  stack: string[]
  openToWork: boolean
  closingNote: [string, string]
  experience: Role[]
  projects: Project[]
  contact: Contact
}

export const profile = {
  name: 'Vince Nery II',
  tagline: 'AI engineer. I write the code around the model.',
  role: 'AI Engineer',
  focus: ['harness engineering', 'agent loops', 'evals'],
  background: ['software engineer', 'freelance, AI startups'],
  stack: ['TypeScript', 'Python', 'Next.js', 'LLM APIs'],
  openToWork: true,
  closingNote: [
    'Most LLM demos fall over once real users touch them.',
    "The harness around the model is usually why. That's the part I build.",
  ],
  // Add company names and dates here, e.g. { title, at: 'Acme AI', when: '2024 - now', work }
  experience: [
    { title: 'Freelance Engineer', at: 'AI startups', work: 'agent harnesses, evals, LLM features' },
    { title: 'Software Engineer', work: 'full stack web apps' },
  ],
  projects: [
    { name: 'rollnight.app', url: 'https://rollnight.app', status: 'building' },
    { name: 'kasluwork.com.au', url: 'https://kasluwork.com.au', status: 'building' },
    { name: 'gabbstudio.com.au', url: 'https://gabbstudio.com.au', status: 'live' },
    { name: 'grimereapers.com.au', url: 'https://grimereapers.com.au', status: 'live' },
  ],
  contact: {
    email: 'vincentneryii@gmail.com',
    linkedin: { label: 'linkedin.com/in/vincenery-ii', url: 'https://www.linkedin.com/in/vincenery-ii/' },
    github: { label: 'github.com/vince-II', url: 'https://github.com/vince-II' },
  },
} satisfies Profile
