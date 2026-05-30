import type { Metadata } from 'next'
import Link from 'next/link'
import { WA } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Wholesale',
  description: 'Wholesale spices and herbs for restaurants and hotels in Morocco. Competitive B2B pricing with fast delivery.',
  openGraph: { title: 'Wholesale — Almas Spices & Herbs', description: 'B2B wholesale spices for restaurants and hotels in Morocco.' },
}

const tiers = [
  { name: 'Starter', icon: '🏪', who: 'Small restaurants & cafés', moq: '10 kg', discount: '10%', features: ['10+ product catalog access', 'Standard delivery', 'Email support', 'Monthly invoicing'] },
  { name: 'Professional', icon: '🍽️', who: 'Mid-size restaurants & catering', moq: '25 kg', discount: '20%', features: ['Full catalog access', 'Priority delivery', 'WhatsApp dedicated support', 'Weekly delivery option', 'Custom labeling available'], highlight: true },
  { name: 'Enterprise', icon: '🏨', who: 'Hotels, chains & large operations', moq: '50 kg', discount: '30%', features: ['Exclusive pricing', 'Same-day delivery', 'Dedicated account manager', 'Custom blends created', 'Net 30 payment terms', 'Monthly business review'] },
]

const clients = [
  { type: '🍽️', label: 'Restaurants' },
  { type: '🏨', label: 'Hotels' },
  { type: '🍕', label: 'Pizzerias & Fast Food' },
  { type: '🎪', label: 'Catering Companies' },
  { type: '🏥', label: 'Hospital Kitchens' },
  { type: '🎓', label: 'School Canteens' },
]

export default function WholesalePage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">B2B Wholesale</p>
            <h1 className="font-playfair text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
              Partner with<br /><span className="gold-text">Almas</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Join 200+ restaurants and 50+ hotels that trust Almas for their daily spice supply.
              Competitive wholesale pricing, consistent quality, and reliable delivery across Morocco.
            </p>
            <a href="#contact-form"
              className="inline-block bg-[#C9A84C] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8962e] transition-colors">
              Request Wholesale Pricing
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['200+', 'Restaurant Partners'], ['50+', 'Hotel Partners'], ['150+', 'Products Available'], ['24h', 'Delivery Morocco-wide']].map(([v, l]) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="font-playfair text-3xl text-[#C9A84C] font-bold mb-1">{v}</div>
                <div className="text-white/50 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 bg-[#F5EDD8]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-[#1A1A2E] font-bold text-center mb-10">Who We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map(c => (
              <div key={c.label} className="bg-white rounded-2xl p-5 text-center hover:shadow-md transition-shadow border border-[#C9A84C]/10">
                <div className="text-4xl mb-2">{c.type}</div>
                <div className="text-sm font-medium text-[#1A1A2E]/70">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">Wholesale Plans</p>
          <h2 className="font-playfair text-4xl text-[#1A1A2E] font-bold">Simple, Transparent Pricing</h2>
          <p className="text-[#1A1A2E]/50 mt-3">The more you order, the more you save. Contact us for a custom quote.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className={`rounded-3xl p-8 border-2 ${t.highlight ? 'border-[#C9A84C] bg-[#1A1A2E] text-white' : 'border-[#1A1A2E]/10 bg-white'}`}>
              <div className="text-4xl mb-4">{t.icon}</div>
              <h3 className={`font-playfair text-2xl font-bold mb-1 ${t.highlight ? 'text-white' : 'text-[#1A1A2E]'}`}>{t.name}</h3>
              <p className={`text-sm mb-5 ${t.highlight ? 'text-white/50' : 'text-[#1A1A2E]/50'}`}>{t.who}</p>
              <div className={`text-4xl font-bold mb-1 ${t.highlight ? 'text-[#C9A84C]' : 'text-[#1A1A2E]'}`}>{t.discount}</div>
              <div className={`text-xs mb-1 ${t.highlight ? 'text-white/40' : 'text-[#1A1A2E]/40'}`}>discount off retail</div>
              <div className={`text-sm font-medium mb-6 ${t.highlight ? 'text-white/60' : 'text-[#1A1A2E]/60'}`}>Min. order: {t.moq}</div>
              <ul className="space-y-2 mb-8">
                {t.features.map(f => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${t.highlight ? 'text-white/70' : 'text-[#1A1A2E]/60'}`}>
                    <span className="text-[#C9A84C]">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#contact-form"
                className={`w-full block text-center py-3 rounded-full font-semibold text-sm transition-colors ${t.highlight ? 'bg-[#C9A84C] text-white hover:bg-[#b8962e]' : 'border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="bg-[#F5EDD8] py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl text-[#1A1A2E] font-bold mb-3">Request Wholesale Pricing</h2>
            <p className="text-[#1A1A2E]/50">Fill in the form below and we'll contact you within 24 hours with a custom quote.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#C9A84C]/10">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E]/70 mb-1.5">Business Name *</label>
                <input type="text" className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C]" placeholder="Restaurant / Hotel name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E]/70 mb-1.5">Contact Name *</label>
                <input type="text" className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C]" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E]/70 mb-1.5">Phone / WhatsApp *</label>
                <input type="tel" className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C]" placeholder="+212 6XX XXX XXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E]/70 mb-1.5">Business Type</label>
                <select className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C] bg-white">
                  <option>Restaurant</option>
                  <option>Hotel</option>
                  <option>Catering</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#1A1A2E]/70 mb-1.5">Monthly Volume Estimate</label>
              <select className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C] bg-white">
                <option>10 – 25 kg / month</option>
                <option>25 – 50 kg / month</option>
                <option>50 – 100 kg / month</option>
                <option>100+ kg / month</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1A1A2E]/70 mb-1.5">Products You Need</label>
              <textarea rows={3} className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C] resize-none" placeholder="e.g. Ras El Hanout, Cumin, Saffron, Custom blends..." />
            </div>
            <a href="{WA('Hello, I\'m interested in wholesale pricing for my business.')}?text=Hello, I'm interested in wholesale pricing for my business."
              target="_blank"
              className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] text-white font-semibold py-3.5 rounded-full hover:bg-[#b8962e] transition-colors">
              Send via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
