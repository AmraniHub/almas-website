export default function ContactPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="font-playfair text-5xl text-white font-bold mb-5">Contact Us</h1>
          <p className="text-white/50 max-w-xl mx-auto">We respond within minutes on WhatsApp. For wholesale inquiries, orders, or any questions.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14">

          {/* Contact Info */}
          <div>
            <h2 className="font-playfair text-3xl text-[#1A1A2E] font-bold mb-8">Reach Us Directly</h2>
            <div className="space-y-5">
              {[
                { icon: '💬', label: 'WhatsApp (Fastest)', value: '+212 6 00 00 00 00', href: 'https://wa.me/212600000000', cta: 'Message Now' },
                { icon: '📞', label: 'Phone', value: '+212 6 00 00 00 00', href: 'tel:+212600000000', cta: 'Call Now' },
                { icon: '✉️', label: 'Email', value: 'contact@almas.ma', href: 'mailto:contact@almas.ma', cta: 'Send Email' },
                { icon: '📍', label: 'Address', value: 'Casablanca, Morocco', href: '#', cta: '' },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4 p-5 bg-[#F5EDD8] rounded-2xl border border-[#C9A84C]/10">
                  <div className="text-2xl">{c.icon}</div>
                  <div className="flex-1">
                    <div className="text-xs text-[#1A1A2E]/40 font-medium uppercase tracking-wide mb-0.5">{c.label}</div>
                    <div className="font-semibold text-[#1A1A2E]">{c.value}</div>
                  </div>
                  {c.cta && (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                      className="text-xs bg-[#C9A84C] text-white px-3 py-1.5 rounded-full font-semibold hover:bg-[#b8962e] transition-colors whitespace-nowrap">
                      {c.cta}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-[#1A1A2E] rounded-2xl">
              <h3 className="text-white font-semibold mb-2">Business Hours</h3>
              <div className="space-y-1.5 text-sm">
                {[['Monday – Friday', '8:00 AM – 6:00 PM'], ['Saturday', '8:00 AM – 4:00 PM'], ['Sunday', 'Closed']].map(([d, t]) => (
                  <div key={d} className="flex justify-between">
                    <span className="text-white/50">{d}</span>
                    <span className="text-white/80">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#C9A84C] text-xs mt-3">WhatsApp available 7 days for urgent orders</p>
            </div>
          </div>

          {/* Order Form */}
          <div>
            <h2 className="font-playfair text-3xl text-[#1A1A2E] font-bold mb-8">Send an Order Inquiry</h2>
            <div className="bg-white rounded-3xl p-8 border border-[#1A1A2E]/8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A2E]/50 uppercase tracking-wide mb-2">Your Name *</label>
                  <input type="text" className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C]" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A2E]/50 uppercase tracking-wide mb-2">Phone / WhatsApp *</label>
                  <input type="tel" className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C]" placeholder="+212 6XX XXX XXX" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-[#1A1A2E]/50 uppercase tracking-wide mb-2">I am a...</label>
                <select className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C] bg-white">
                  <option>Restaurant / Café</option>
                  <option>Hotel</option>
                  <option>Catering Business</option>
                  <option>Individual / Home</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-[#1A1A2E]/50 uppercase tracking-wide mb-2">Products Needed</label>
                <textarea rows={3} className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C] resize-none" placeholder="List the spices/herbs you need and approximate quantities..." />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#1A1A2E]/50 uppercase tracking-wide mb-2">Message (optional)</label>
                <textarea rows={2} className="w-full border border-[#1A1A2E]/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C] resize-none" placeholder="Any special requirements..." />
              </div>
              <a href="https://wa.me/212600000000?text=Hello Almas, I'd like to place an order."
                target="_blank"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3.5 rounded-full hover:bg-[#1ebe57] transition-colors mb-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.14 1.54 5.87L0 24l6.302-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.932-1.329l-.354-.21-3.741.902.938-3.653-.23-.374A9.818 9.818 0 1112 21.818z"/></svg>
                Send via WhatsApp
              </a>
              <p className="text-center text-[#1A1A2E]/30 text-xs">We typically respond within 15 minutes</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
