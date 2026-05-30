import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { SITE } from '@/lib/config'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'Almas — Premium Spices & Herbs | Morocco', template: '%s | Almas' },
  description: 'Premium quality spices and herbs for restaurants, hotels, and homes. Wholesale B2B and retail B2C from Morocco.',
  keywords: 'spices, herbs, Morocco, wholesale, restaurants, hotels, épices, توابل, Casablanca',
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: SITE.url,
    siteName: SITE.nameEn,
    title: 'Almas — Premium Spices & Herbs | Morocco',
    description: 'Premium quality spices and herbs for restaurants, hotels, and homes.',
  },
  metadataBase: new URL(SITE.url),
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.nameEn,
  description: 'Premium Moroccan spices and herbs wholesale and retail',
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Casablanca', addressCountry: 'MA' },
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-16:00'],
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F9F5EC] text-[#1A1A2E] antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
