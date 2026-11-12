import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

const SITE_URL = 'https://vince-ii.github.io'
const SUMMARY = 'Software engineer with a backend focus: Go, Node.js, Postgres and AWS. Full stack when the product needs it.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Vince Nery II',
    title: 'Vince Nery II · Software Engineer',
    description: SUMMARY,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Vince Nery II, software engineer with a backend focus' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vince Nery II · Software Engineer', description: SUMMARY, images: ['/og.png'] },
  title: 'Vince Nery II',
  description: 'Vince Nery II is a backend-focused software engineer: Go, Node.js, Postgres and AWS (SNS, SQS, Aurora RDS), with DDD. Full stack with React and Next.js.',
  icons: { icon: '/avatar.png' },
}

export const viewport: Viewport = { themeColor: '#191a21', viewportFit: 'cover' }

// Next.js requires a default export for layouts and pages.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
