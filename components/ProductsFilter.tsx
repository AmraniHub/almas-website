'use client'
import { useState } from 'react'
import { WA } from '@/lib/config'

const categories = ['All', 'Whole Spices', 'Ground Spices', 'Blends', 'Herbs', 'Seeds']

export const products = [
  { name: 'Ras El Hanout',  nameAr: 'رأس الحانوت', category: 'Blends',       emoji: '🌿', desc: 'The king of Moroccan spice blends — over 20 spices in perfect harmony.', popular: true  },
  { name: 'Pure Saffron',   nameAr: 'زعفران',       category: 'Whole Spices', emoji: '🌸', desc: 'Moroccan saffron threads, rich color and intense aroma.',               popular: true  },
  { name: 'Ground Cumin',   nameAr: 'كمون مطحون',   category: 'Ground Spices',emoji: '🫙', desc: 'Earthy, warm and essential. Stone-ground for maximum flavor.',           popular: false },
  { name: 'Paprika',        nameAr: 'فلفل أحمر',    category: 'Ground Spices',emoji: '🌶️', desc: 'Vibrant sweet paprika with a beautiful deep red color.',                popular: false },
  { name: 'Cinnamon Sticks',nameAr: 'قرفة',          category: 'Whole Spices', emoji: '🪵', desc: 'Ceylon cinnamon — delicate, sweet, and aromatic.',                      popular: false },
  { name: 'Dried Mint',     nameAr: 'نعناع',         category: 'Herbs',        emoji: '🍃', desc: 'Sun-dried Moroccan mint, perfect for tea and cooking.',                 popular: true  },
  { name: 'Black Pepper',   nameAr: 'فلفل أسود',    category: 'Whole Spices', emoji: '⚫', desc: 'Tellicherry black pepper — bold, pungent, and fresh.',                  popular: false },
  { name: 'Turmeric',       nameAr: 'كركم',          category: 'Ground Spices',emoji: '💛', desc: 'Bright golden turmeric with high curcumin content.',                   popular: false },
  { name: 'Coriander Seeds',nameAr: 'كزبرة',         category: 'Seeds',        emoji: '🟤', desc: 'Whole coriander seeds — citrusy, floral, and versatile.',              popular: false },
  { name: 'Harissa Blend',  nameAr: 'حريصة',         category: 'Blends',       emoji: '🔥', desc: 'Our signature Moroccan harissa spice blend. Fiery and aromatic.',      popular: true  },
  { name: 'Dried Thyme',    nameAr: 'زعتر',          category: 'Herbs',        emoji: '🌱', desc: 'Mediterranean thyme, fragrant and perfect for grilling.',              popular: false },
  { name: 'Fennel Seeds',   nameAr: 'شمر',           category: 'Seeds',        emoji: '🫘', desc: 'Sweet anise-flavored fennel seeds for bread and meat dishes.',         popular: false },
]

export default function ProductsFilter() {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = products.filter(p =>
    (active === 'All' || p.category === active) &&
    (search === '' || p.name.toLowerCase().includes(search.toLowerCase()) || p.nameAr.includes(search))
  )

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <input type="text" placeholder="Search spices..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-[#1A1A2E]/15 rounded-full px-5 py-2.5 text-sm outline-none focus:border-[#C9A84C] bg-white w-full sm:w-64" />
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === c ? 'bg-[#C9A84C] text-white' : 'bg-white border border-[#1A1A2E]/15 text-[#1A1A2E]/70 hover:border-[#C9A84C] hover:text-[#C9A84C]'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map(p => (
          <div key={p.name} className="bg-white rounded-2xl overflow-hidden border border-[#1A1A2E]/8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] h-36 flex items-center justify-center relative">
              <span className="text-6xl">{p.emoji}</span>
              {p.popular && <span className="absolute top-3 left-3 bg-[#C9A84C] text-white text-xs px-2 py-0.5 rounded-full font-semibold">Popular</span>}
              <span className="absolute top-3 right-3 bg-white/10 text-white/70 text-xs px-2 py-0.5 rounded-full">{p.category}</span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1.5">
                <h3 className="font-semibold text-[#1A1A2E] text-sm">{p.name}</h3>
                <span className="text-[#1A1A2E]/30 text-xs" dir="rtl">{p.nameAr}</span>
              </div>
              <p className="text-[#1A1A2E]/50 text-xs leading-relaxed mb-4">{p.desc}</p>
              <a href={WA(`Hello, I'd like to order ${p.name}`)} target="_blank"
                className="w-full flex items-center justify-center gap-1.5 bg-[#1A1A2E] text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-[#2a2a4a] transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.14 1.54 5.87L0 24l6.302-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.932-1.329l-.354-.21-3.741.902.938-3.653-.23-.374A9.818 9.818 0 1112 21.818z"/></svg>
                Order via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#1A1A2E]/40">
          <div className="text-5xl mb-4">🔍</div>
          <p>No products found for &ldquo;{search}&rdquo;</p>
        </div>
      )}
    </>
  )
}
