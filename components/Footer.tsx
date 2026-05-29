import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1A] border-t border-[#C9A84C]/20 text-white/60 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">✨</span>
            <span className="text-[#C9A84C] font-bold text-lg tracking-widest">ALMAS</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Premium spices and herbs sourced from Morocco and beyond. Serving restaurants,
            hotels, and homes with the finest quality since day one.
          </p>
          <a href="https://wa.me/212600000000" target="_blank"
            className="inline-flex items-center gap-2 mt-5 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#1ebe57] transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.14 1.54 5.87L0 24l6.302-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.932-1.329l-.354-.21-3.741.902.938-3.653-.23-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide">Quick Links</h4>
          <ul className="space-y-2">
            {[['/', 'Home'], ['/products', 'Products'], ['/wholesale', 'Wholesale'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href} className="hover:text-[#C9A84C] transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide">Contact</h4>
          <ul className="space-y-2">
            <li>📍 Casablanca, Morocco</li>
            <li>📞 +212 6 00 00 00 00</li>
            <li>✉️ contact@almas.ma</li>
            <li className="pt-2">
              <span className="text-white/40 text-xs">Open: Mon – Sat, 8am – 6pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>© 2024 Almas Spices & Herbs. All rights reserved.</span>
        <span className="text-[#C9A84C]/60">Made in Morocco 🇲🇦</span>
      </div>
    </footer>
  )
}
