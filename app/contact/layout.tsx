import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Integrated Quality Solutions. Have a question about consultancy, auditing, or training? Our team in Addis Ababa responds within one business day.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Integrated Quality Solutions',
    description:
      'Have a question about consultancy, auditing, or training? Get in touch with our team in Addis Ababa.',
    url: '/contact',
  },
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
