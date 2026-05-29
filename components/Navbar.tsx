'use client'
import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A2E]/95 backdrop-blur-md border-b border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">✨</span>
          <span className="text-[#C9A84C] font-bold text-xl tracking-widest">ALMAS</span>
          <span className="hidden sm:block text-white/40 text-xs tracking-widest mt-0.5">SPICES & HERBS</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-white/70 hover:text-[#C9A84C] text-sm tracking-wide transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/contact"
            className="bg-[#C9A84C] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#b8962e] transition-colors">
            Order Now
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1A1A2E] border-t border-[#C9A84C]/20 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/70 hover:text-[#C9A84C] text-sm">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="bg-[#C9A84C] text-white text-sm font-semibold px-5 py-2 rounded-full text-center">
            Order Now
          </Link>
        </div>
      )}
    </nav>
  )
}
