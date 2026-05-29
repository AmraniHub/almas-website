import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Almas — Premium Spices & Herbs | Morocco',
  description: 'Premium quality spices and herbs for restaurants, hotels, and homes. Wholesale B2B and retail B2C from Morocco.',
  keywords: 'spices, herbs, Morocco, wholesale, restaurants, hotels, épices, توابل, Casablanca',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#F9F5EC] text-[#1A1A2E] antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
