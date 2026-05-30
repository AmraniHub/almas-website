// ─────────────────────────────────────────────
//  ALMAS SITE CONFIG — update your real info here
//  This file is imported by every component
// ─────────────────────────────────────────────

export const SITE = {
  name:      'الماس — توابل وأعشاب',
  nameEn:    'Almas Spices & Herbs',
  phone:     '+212600000000',          // ← UPDATE with your real number
  whatsapp:  '212600000000',           // ← same number, no + or spaces
  email:     'contact@almas.ma',
  address:   'الدار البيضاء، المغرب',
  addressEn: 'Casablanca, Morocco',
  url:       'https://almas-website-eta.vercel.app',
}

export const WA = (msg = '') =>
  `https://wa.me/${SITE.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`
