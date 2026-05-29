import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-playfair text-5xl md:text-6xl text-white font-bold mb-5">About Almas</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Born from a passion for authentic Moroccan flavors and a commitment to quality that never compromises.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</p>
            <h2 className="font-playfair text-4xl text-[#1A1A2E] font-bold mb-6 leading-tight">
              Bringing the Richness of Moroccan Spices to Every Kitchen
            </h2>
            <div className="space-y-4 text-[#1A1A2E]/60 leading-relaxed">
              <p>
                Almas was founded with a single mission: to bring the authentic flavors of Morocco to restaurants,
                hotels, and homes across the country and beyond. Our name — meaning <em>"diamonds"</em> in Arabic —
                reflects our commitment to delivering only the finest quality.
              </p>
              <p>
                We work directly with farmers and traditional spice markets across Morocco, cutting out middlemen
                and ensuring the freshest, most authentic products reach your kitchen.
              </p>
              <p>
                From the saffron fields of Taliouine to the cumin markets of Marrakech — every product we carry
                has been carefully selected, tested, and verified for quality before it ever reaches you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['🌍', 'Direct Sourcing', 'We source directly from Moroccan farmers and traditional markets.'],
              ['✅', 'Quality Verified', 'Every batch is tested for purity, freshness, and authenticity.'],
              ['📦', 'Proper Storage', 'Temperature-controlled storage preserves maximum flavor and shelf life.'],
              ['🤝', 'Fair Trade', 'We pay fair prices to farmers, supporting local communities.']
            ].map(([e, t, d]) => (
              <div key={t} className="bg-[#F5EDD8] rounded-2xl p-5 border border-[#C9A84C]/10">
                <div className="text-3xl mb-3">{e}</div>
                <h4 className="font-semibold text-[#1A1A2E] mb-1 text-sm">{t}</h4>
                <p className="text-[#1A1A2E]/50 text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-4xl text-white font-bold">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💎', title: 'Quality Above All', desc: 'We never compromise on quality. Every product that leaves our warehouse meets the highest standards.' },
              { icon: '🤝', title: 'Honest Relationships', desc: 'With our farmers, our clients, and our community. Transparency and trust are the foundation of everything we do.' },
              { icon: '🌱', title: 'Sustainable Sourcing', desc: 'We support traditional farming methods and sustainable agriculture that preserves Morocco\'s natural heritage.' },
            ].map(v => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-playfair text-xl text-white font-bold mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-[#F5EDD8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['150+', 'Products'], ['200+', 'Restaurant Clients'], ['50+', 'Hotel Partners'], ['10+', 'Years Experience']].map(([v, l]) => (
              <div key={l}>
                <div className="font-playfair text-4xl font-bold text-[#C9A84C] mb-1">{v}</div>
                <div className="text-[#1A1A2E]/50 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-playfair text-4xl text-[#1A1A2E] font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-[#1A1A2E]/50 mb-8 max-w-md mx-auto">Whether you're a restaurant, hotel, or home cook — we'd love to be your spice supplier.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/wholesale" className="bg-[#C9A84C] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8962e] transition-colors">
            Wholesale Inquiry
          </Link>
          <Link href="/contact" className="border-2 border-[#1A1A2E] text-[#1A1A2E] font-semibold px-8 py-3.5 rounded-full hover:bg-[#1A1A2E] hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
