import type { MetadataRoute } from 'next';

const BASE_URL = 'https://yuzulabs.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en'];
  const pages = ['', '/legal', '/privacy', '/terms'];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.3,
        alternates: {
          languages: {
            fr: `${BASE_URL}/fr${page}`,
            en: `${BASE_URL}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}
