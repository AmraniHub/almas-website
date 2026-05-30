import type { Metadata } from 'next'
import ProductsFilter from '@/components/ProductsFilter'
import { WA } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Products',
  description: '150+ premium Moroccan spices, herbs and blends. Wholesale and retail. Order via WhatsApp.',
  openGraph: { title: 'Products — Almas Spices & Herbs', description: '150+ premium Moroccan spices and herbs. Wholesale and retail.' },
}

export default function ProductsPage() {
  return (
    <>
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">Our Catalog</p>
          <h1 className="font-playfair text-5xl text-white font-bold mb-4">Products</h1>
          <p className="text-white/50 max-w-xl mx-auto">150+ premium spices, herbs, and blends. Available wholesale and retail.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <ProductsFilter />

        <div className="mt-16 bg-[#1A1A2E] rounded-3xl p-10 text-center">
          <h3 className="font-playfair text-3xl text-white font-bold mb-3">Don&apos;t see what you need?</h3>
          <p className="text-white/50 mb-6">We carry 150+ products. Contact us for custom orders, bulk pricing, or special blends.</p>
          <a href={WA("Hello, I'm looking for a product not listed on the website")} target="_blank"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#b8962e] transition-colors">
            Chat with Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
