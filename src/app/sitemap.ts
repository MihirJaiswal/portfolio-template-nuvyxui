// app/sitemap.ts
import { MetadataRoute } from 'next';

const sections = [
  '',
  '#about',
  '#projects',
  '#career',
  '#tech-stack',
  '#contact',
];

const getLastModifiedDate = (section: string): Date => {
  const dates: Record<string, Date> = {
    '': new Date('2025-05-15'),
    '#about': new Date('2025-05-10'),
    '#projects': new Date('2025-05-18'),
    '#skills': new Date('2025-05-12'),
    '#contact': new Date('2025-05-05'),
  };
  
  return dates[section] || new Date();
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mihirjaiswal.vercel.app';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ];
}