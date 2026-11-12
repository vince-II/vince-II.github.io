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
  phone: { label: string; tel: string }
  linkedin: { label: string; url: string }
  github: { label: string; url: string }
}

export type Book = {
  slug: string
  title: string
  author: string
  /** Path under public/. */
  cover: string
}

export type Profile = {
  name: string
  tagline: string
  roles: string[]
  focus: string[]
  interests: string[]
  /** Tools grouped by layer; each group is one line in about.ts. */
  stack: { key: string; items: string[] }[]
  openToWork: boolean
  closingNote: [string, string]
  experience: Role[]
  projects: Project[]
  books: Book[]
  contact: Contact
}

export const profile = {
  name: 'Vince Nery II',
  tagline: 'Software engineer with a backend focus. Full stack when the product needs it.',
  roles: ['Software Engineer', 'Backend', 'Full Stack'],
  focus: ['APIs', 'messaging', 'AI features'],
  interests: ['mechanical keyboards', 'gaming', 'software', 'AI', 'AI news'],
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
    { title: 'Founder, Software Engineer', at: 'Kaslu (kaslu.com.au)', work: 'my own studio: Kaslu Work, Popback, RollNight' },
    { title: 'Software Engineer, Freelance', at: 'AI startups', work: 'full-stack builds, LLM features' },
    { title: 'Software Engineer, Full Stack', work: 'web apps from database to UI' },
  ],
  projects: [
    // Fill in summary, role and stack per project; empty fields are left off the case study.
    {
      slug: 'rollnight',
      name: 'rollnight.app',
      url: 'https://rollnight.app',
      status: 'building',
      kind: 'product',
      role: 'iOS app and backend',
      stack: ['SwiftUI', 'TypeScript', 'Cloudflare Workers', 'Hono', 'D1', 'R2'],
      summary: [
        'A Kaslu product. An event camera: the host shows a QR code, guests scan it with the iOS app and get 27 shots in the host\'s theme.',
        'Photos upload as they are taken, stay hidden until the reveal time, then everyone sees them at once. They are deleted 30 days later.',
      ],
    },
    {
      slug: 'popback',
      name: 'popback',
      status: 'building',
      kind: 'product',
      role: 'Product and full-stack build',
      stack: ['Next.js', 'Supabase Postgres', 'Cloudflare Workers', 'Stripe', 'Apple & Google Wallet'],
      summary: [
        'A Kaslu product. Loyalty cards and marketing for independent venues. A QR at the counter puts a card in the customer\'s wallet and records every visit.',
        'Welcome, birthday and win-back messages go out on the venue\'s behalf, and the venue owns its customer list.',
      ],
    },
    {
      slug: 'kasluwork',
      name: 'kasluwork.com.au',
      url: 'https://kasluwork.com.au',
      status: 'building',
      kind: 'product',
      role: 'Mobile app, admin and backend',
      stack: ['Expo', 'React Native', 'Next.js', 'Supabase', 'Postgres', 'PostGIS'],
      summary: [
        'A Kaslu product. Rostering and geofenced clock-in for Australian hospitality venues. Managers build rosters in a Next.js admin, and staff clock in from an Expo app, only from inside the venue.',
        'Supabase underneath: Postgres with PostGIS for the geofence, 150+ migrations tested with pgTAP, and edge functions for email and push.',
        'The public site is WordPress rendered in CI and served as static files from Cloudflare Pages.',
      ],
    },
    {
      slug: 'gabbstudio',
      name: 'gabbstudio.com.au',
      url: 'https://gabbstudio.com.au',
      status: 'live',
      kind: 'client website',
      role: 'Design and build',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Sanity', 'Resend', 'Cloudflare'],
      summary: ['Built on the same stack as grimereapers.com.au: Next.js with content from Sanity, email through Resend, served from Cloudflare.'],
    },
    {
      slug: 'grimereapers',
      name: 'grimereapers.com.au',
      url: 'https://grimereapers.com.au',
      status: 'live',
      kind: 'client website',
      role: 'Design and build',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Sanity', 'Resend', 'Cloudflare'],
      summary: [
        'Marketing site for a cleaning company covering Canberra, Sydney, Newcastle and Port Stephens.',
        'Content comes from Sanity, enquiries are emailed through Resend, and it runs on Cloudflare through OpenNext.',
      ],
    },
  ],
  books: [
    { slug: 'atomic-habits', title: 'Atomic Habits', author: 'James Clear', cover: '/books/atomic-habits.jpg' },
    { slug: 'deep-work', title: 'Deep Work', author: 'Cal Newport', cover: '/books/deep-work.jpg' },
    { slug: 'polymath', title: 'Polymath', author: 'Peter Hollins', cover: '/books/polymath.jpg' },
    { slug: 'metamorphosis', title: 'The Metamorphosis', author: 'Franz Kafka', cover: '/books/metamorphosis.jpg' },
  ],
  contact: {
    email: 'vincentneryii@gmail.com',
    phone: { label: '0412 021 899', tel: '+61412021899' },
    linkedin: { label: 'linkedin.com/in/vincenery-ii', url: 'https://www.linkedin.com/in/vincenery-ii/' },
    github: { label: 'github.com/vince-II', url: 'https://github.com/vince-II' },
  },
} satisfies Profile
