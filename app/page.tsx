import type { Metadata } from 'next'
import Link from 'next/link'
import { WA } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Almas — Premium Spices & Herbs | Morocco',
  description: 'Premium Moroccan spices and herbs for restaurants, hotels, and homes. B2B wholesale and B2C retail.',
}

const featuredProducts = [
  { name: 'Ras El Hanout', nameAr: 'رأس الحانوت', category: 'Blend', desc: 'The king of Moroccan spice blends. Rich, complex, unforgettable.', emoji: '🌿', color: 'from-amber-900 to-amber-700' },
  { name: 'Saffron', nameAr: 'زعفران', category: 'Whole', desc: 'Pure Moroccan saffron. The most precious spice in the world.', emoji: '🌸', color: 'from-orange-900 to-red-700' },
  { name: 'Cumin', nameAr: 'كمون', category: 'Ground', desc: 'Earthy and warm. Essential in every Moroccan kitchen.', emoji: '🫙', color: 'from-yellow-900 to-yellow-700' },
  { name: 'Dried Mint', nameAr: 'نعناع مجفف', category: 'Herb', desc: 'Fragrant and fresh. Perfect for teas and tagines.', emoji: '🍃', color: 'from-green-900 to-green-700' },
  { name: 'Paprika', nameAr: 'فلفل أحمر', category: 'Ground', desc: 'Vibrant red color, sweet and smoky flavor.', emoji: '🌶️', color: 'from-red-900 to-red-700' },
  { name: 'Cinnamon', nameAr: 'قرفة', category: 'Whole', desc: 'Ceylon cinnamon sticks with a delicate, sweet warmth.', emoji: '🪵', color: 'from-amber-800 to-amber-600' },
]

const stats = [
  { value: '150+', label: 'Products' },
  { value: '200+', label: 'Restaurant Clients' },
  { value: '50+', label: 'Hotel Partners' },
  { value: '10+', label: 'Years of Excellence' },
]

const b2bFeatures = [
  { icon: '📦', title: 'Bulk Orders', desc: 'Competitive wholesale pricing for restaurants and hotels with flexible MOQ.' },
  { icon: '🚚', title: 'Fast Delivery', desc: 'Same-day delivery in Casablanca. Next-day across Morocco.' },
  { icon: '📋', title: 'Custom Blends', desc: 'We create exclusive spice blends tailored to your menu needs.' },
  { icon: '💬', title: 'Dedicated Support', desc: 'Personal account manager and WhatsApp ordering for your team.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section-dark min-h-[92vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #E8C070 0%, transparent 40%)' }} />
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 text-[#C9A84C] text-sm font-medium mb-6">
              ✨ Premium Quality Since Day One
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
              The Finest<br />
              <span className="gold-text">Spices & Herbs</span><br />
              from Morocco
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              Supplying restaurants, hotels, and homes with premium quality spices and herbs.
              Sourced with care, delivered with passion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products"
                className="bg-[#C9A84C] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8962e] transition-colors text-sm">
                Browse Products
              </Link>
              <Link href="/wholesale"
                className="border border-[#C9A84C]/50 text-[#C9A84C] font-semibold px-8 py-3.5 rounded-full hover:bg-[#C9A84C]/10 transition-colors text-sm">
                Wholesale Inquiry
              </Link>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="text-[#C9A84C] font-bold text-2xl font-playfair">{s.value}</div>
                  <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            {['🌿', '🌸', '🌶️', '🫙'].map((emoji, i) => (
              <div key={i} className={`rounded-2xl bg-gradient-to-br ${['from-amber-900/80 to-amber-700/80', 'from-orange-900/80 to-red-700/80', 'from-red-900/80 to-red-700/80', 'from-green-900/80 to-green-700/80'][i]} border border-white/10 p-8 flex items-center justify-center text-6xl ${i === 1 ? 'mt-8' : ''}`}>
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-[#C9A84C] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-2 text-[#1A1A2E] text-sm font-semibold">
          {['🌍 Sourced Directly from Origin', '✅ Quality Certified', '🚚 Fast Delivery Morocco-wide', '💼 B2B & B2C', '📞 WhatsApp Ordering'].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">Our Selection</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#1A1A2E] font-bold">Featured Products</h2>
          <p className="text-[#1A1A2E]/50 mt-4 max-w-xl mx-auto">From whole spices to artisan blends — discover what makes Almas the choice of Morocco's finest kitchens.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(p => (
            <Link href="/products" key={p.name}
              className="spice-card group bg-white rounded-2xl overflow-hidden border border-[#1A1A2E]/8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`bg-gradient-to-br ${p.color} h-44 flex items-center justify-center relative`}>
                <span className="text-7xl">{p.emoji}</span>
                <div className="spice-overlay absolute inset-0 bg-[#C9A84C]/20 opacity-0 transition-opacity" />
                <span className="absolute top-3 right-3 bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">{p.category}</span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-[#1A1A2E]">{p.name}</h3>
                  <span className="text-[#1A1A2E]/40 text-sm" dir="rtl">{p.nameAr}</span>
                </div>
                <p className="text-[#1A1A2E]/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/products" className="border-2 border-[#C9A84C] text-[#C9A84C] font-semibold px-8 py-3 rounded-full hover:bg-[#C9A84C] hover:text-white transition-colors">
            View All Products →
          </Link>
        </div>
      </section>

      {/* B2B SECTION */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">For Professionals</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
                Wholesale for<br />Restaurants & Hotels
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                We are the trusted spice partner for over 200 restaurants and 50 hotels across Morocco.
                Consistent quality, competitive prices, and reliable delivery — every time.
              </p>
              <Link href="/wholesale"
                className="inline-block bg-[#C9A84C] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8962e] transition-colors">
                Get Wholesale Pricing →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {b2bFeatures.map(f => (
                <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h4 className="text-white font-semibold mb-1 text-sm">{f.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2C SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-3 gap-3">
            {['🧂', '🌿', '🫚', '🌶️', '🍃', '✨'].map((e, i) => (
              <div key={i} className="bg-[#1A1A2E] rounded-2xl aspect-square flex items-center justify-center text-4xl hover:scale-105 transition-transform cursor-default">{e}</div>
            ))}
          </div>
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">For Your Home</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#1A1A2E] font-bold leading-tight mb-6">
              Bring Morocco<br />to Your Kitchen
            </h2>
            <p className="text-[#1A1A2E]/60 leading-relaxed mb-8">
              Whether you're cooking a family tagine or experimenting with new flavors —
              Almas brings the soul of Moroccan cooking to your home.
              Order online or via WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products"
                className="bg-[#1A1A2E] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#2a2a4a] transition-colors text-sm">
                Shop Now
              </Link>
              <a href="{WA('Bonjour Almas, je voudrais commander')}" target="_blank"
                className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#1ebe57] transition-colors text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.14 1.54 5.87L0 24l6.302-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.932-1.329l-.354-.21-3.741.902.938-3.653-.23-.374A9.818 9.818 0 1112 21.818z"/></svg>
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F5EDD8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">Trusted By</p>
            <h2 className="font-playfair text-4xl text-[#1A1A2E] font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Chef Hassan', role: 'Head Chef, Restaurant Le Riad', text: 'Almas delivers the most consistent quality I\'ve found in 15 years. Their Ras El Hanout is exceptional.' },
              { name: 'Fatima Z.', role: 'F&B Director, Hotel Atlas', text: 'Reliable, professional, and the quality is always perfect. We order weekly and they never disappoint.' },
              { name: 'Mohammed A.', role: 'Home Chef', text: 'I tried their saffron once and I\'ll never buy from anywhere else. Absolutely pure and fragrant.' },
            ].map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-[#C9A84C]/10">
                <div className="text-[#C9A84C] text-2xl mb-4">❝</div>
                <p className="text-[#1A1A2E]/70 text-sm leading-relaxed mb-5 italic">{t.text}</p>
                <div>
                  <div className="font-semibold text-[#1A1A2E] text-sm">{t.name}</div>
                  <div className="text-[#1A1A2E]/40 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-5">Ready to Order?</h2>
          <p className="text-white/50 mb-8">Contact us today for wholesale pricing or place a retail order via WhatsApp. We respond within minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#C9A84C] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8962e] transition-colors">
              Get in Touch
            </Link>
            <a href="{WA('Bonjour Almas, je voudrais commander')}" target="_blank"
              className="flex items-center gap-2 border border-[#25D366] text-[#25D366] font-semibold px-8 py-3.5 rounded-full hover:bg-[#25D366]/10 transition-colors">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
