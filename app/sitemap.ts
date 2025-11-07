import { MetadataRoute } from 'next';
import { countries, getAllCountrySlugs } from '@/lib/data/countries';
import { universities, getAllUniversitySlugs } from '@/lib/data/universities';
import { blogPosts, getAllBlogSlugs } from '@/lib/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aimbritz.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/countries',
    '/universities',
    '/services',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Country pages
  const countryPages = getAllCountrySlugs().map((slug) => ({
    url: `${baseUrl}/countries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // University pages
  const universityPages = getAllUniversitySlugs().map((slug) => ({
    url: `${baseUrl}/universities/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...countryPages, ...universityPages, ...blogPages];
}
