import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteNav } from '@/components/site-nav'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Integrated Quality Solutions — Consultancy, Auditing & Training in Ethiopia',
    template: '%s | Integrated Quality Solutions',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'business consultancy Ethiopia',
    'management system auditing',
    'ISO 14001 Ethiopia',
    'training services Addis Ababa',
    'quality management consulting',
    'environmental management system',
    'Qualitiy solutions in Ethiopia',
    'Integrated Qualitiy solutions',
    'Consultancy in Ethiopia',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Integrated Quality Solutions — Consultancy, Auditing & Training',
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/hero/tadele.jpg',
        width: 1113,
        height: 1280,
        alt: 'Integrated Quality Solutions founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrated Quality Solutions — Consultancy, Auditing & Training',
    description: SITE_DESCRIPTION,
    images: ['/hero/tadele.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteNav />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
