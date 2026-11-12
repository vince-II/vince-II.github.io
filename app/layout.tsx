import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vince Nery II',
  description: 'Vince Nery II is a full-stack software engineer who builds web apps, APIs and AI features. Freelance for AI startups.',
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
