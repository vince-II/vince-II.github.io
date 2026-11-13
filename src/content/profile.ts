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
  /** What it does, one line each. */
  highlights?: string[]
  /** Screenshots under public/. `phone` shots are bare screens and get a device frame. */
  shots?: { src: string; alt: string; kind: 'phone' | 'device' | 'desktop'; width: number; height: number }[]
  /** What you did on it. */
  role?: string
  stack?: string[]
}

export type Role = {
  title: string
  at?: string
  when?: string
  work?: string
  /** Slugs of case studies in `projects`, shown as links. */
  projects?: string[]
}

export type Contact = {
  email: string
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
  interests: ['mechanical keyboards', 'gaming', 'AI news'],
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
    { title: 'Founder, Software Engineer', at: 'Kaslu, my own studio', projects: ['kasluwork', 'rollnight', 'popback'] },
    { title: 'Software Engineer, Freelance', at: 'AI startups', work: 'full-stack builds, LLM features' },
    { title: 'Software Engineer, Full Stack', work: 'web apps from database to UI' },
  ],
  projects: [
    {
      slug: 'kasluwork',
      name: 'kasluwork.com.au',
      url: 'https://kasluwork.com.au',
      status: 'building',
      kind: 'product',
      role: 'Founder, one of two engineers',
      summary: [
        'Rostering and geofenced clock-in for Australian hospitality: cafés, restaurants and pubs.',
        'A Kaslu product, built by a team of four. I founded it and write the code with one other engineer.',
      ],
      highlights: [
        'Managers build the week on a people grid, with the wage cost of every shift under the venue\'s award.',
        'Auto-schedule (beta) drafts the roster, then publish checks catch problems before it goes out.',
        'Staff clock in from their phone or the venue tablet, and only from inside the venue.',
        'One dashboard across venues: who is on now, open shifts, and swaps and leave to approve.',
      ],
      shots: [
        { src: '/work/kasluwork/dashboard.webp', alt: 'Kaslu manager dashboard across four venues', kind: 'desktop', width: 1400, height: 1058 },
        { src: '/work/kasluwork/clock-in.webp', alt: 'Kaslu staff app clock-in screen, on site at Bar Rosa', kind: 'device', width: 480, height: 989 },
        { src: '/work/kasluwork/roster.webp', alt: 'Kaslu weekly roster for The Oxford Hotel with wage costs per person', kind: 'desktop', width: 1400, height: 656 },
      ],
    },
    {
      slug: 'rollnight',
      name: 'rollnight.app',
      url: 'https://rollnight.app',
      status: 'building',
      kind: 'product',
      role: 'Founder, iOS app and backend',
      summary: [
        'The event camera guests scan into. A disposable-camera night for birthdays, weddings and parties.',
        'A Kaslu product.',
      ],
      highlights: [
        'The host creates an event and sets the number of shots, the theme, the timestamp style and the vibe.',
        'Guests scan the host\'s QR code and shoot in that look from the iOS app.',
        'Photos upload as they are taken and survive a bad connection.',
        'Nobody sees them until the reveal time, then everyone does. The host picks favourites, and photos are deleted 30 days later.',
      ],
      shots: [
        { src: '/work/rollnight/event-card.webp', alt: 'RollNight event invite for Sam turns 30, with a Step inside button', kind: 'phone', width: 480, height: 1044 },
        { src: '/work/rollnight/camera.webp', alt: 'RollNight camera with 27 shots left', kind: 'phone', width: 480, height: 1044 },
        { src: '/work/rollnight/gallery.webp', alt: 'RollNight gallery after the reveal, with the most loved photos first', kind: 'phone', width: 480, height: 1044 },
      ],
    },
    {
      slug: 'popback',
      name: 'popback',
      status: 'building',
      kind: 'product',
      role: 'Founder, product and engineering',
      summary: [
        'Loyalty cards and marketing that bring customers back to independent venues.',
        'A Kaslu product, sister to Kaslu Work and sold to the same venues.',
      ],
      highlights: [
        'A QR code at the counter: customers join with a first name and an email or mobile, with real consent.',
        'Their card lands in Apple Wallet or Google Wallet. Nothing to install, no password.',
        'Staff scan the card from their phone\'s browser to add stamps or points.',
        'Welcome, birthday and win-back messages send themselves, and the venue owns its customer list.',
      ],
      shots: [
        { src: '/work/popback/join.webp', alt: 'Popback join page for Brew Lane Surry Hills', kind: 'phone', width: 480, height: 923 },
        { src: '/work/popback/card.webp', alt: 'Popback loyalty card with 2 of 10 stamps', kind: 'phone', width: 480, height: 892 },
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
    linkedin: { label: 'linkedin.com/in/vincenery-ii', url: 'https://www.linkedin.com/in/vincenery-ii/' },
    github: { label: 'github.com/vince-II', url: 'https://github.com/vince-II' },
  },
} satisfies Profile
