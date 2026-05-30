import { MetadataRoute } from 'next'
import { SITE } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  return [
    { url: base,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/wholesale`,lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
