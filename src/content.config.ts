import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.strictObject({ ja: z.string(), en: z.string() });

// ニュースは 1件 = 1ファイル（src/content/news/YYYY-MM-DD-slug.md）
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    date: z.coerce.date(),
    title: localized,
    body: localized.optional(),
    link: z.url().optional(),
  }),
});

const skills = defineCollection({
  loader: file('src/data/skills.yaml'),
  schema: z.object({
    label: localized,
    category: z.enum(['ai', 'dev', 'cloud', 'data']),
  }),
});

const articles = defineCollection({
  loader: file('src/data/articles.yaml'),
  schema: z.object({
    platform: z.enum(['qiita', 'note']),
    url: z.url(),
    date: z.coerce.date(),
    title: localized,
    featured: z.boolean().default(false),
    skills: z.array(reference('skills')).default([]),
  }),
});

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    type: z.enum(['book', 'paper']),
    title: localized,
    series: localized.optional(),
    authors: localized,
    venue: localized,
    details: z.string().optional(),
    date: z.coerce.date(),
    language: z.enum(['ja', 'en']),
    url: z.url(),
    doi: z.string().optional(),
    isbn: z.string().optional(),
    coAuthored: z.boolean().default(false),
    skills: z.array(reference('skills')).default([]),
  }),
});

const career = defineCollection({
  loader: file('src/data/career.yaml'),
  schema: z.object({
    type: z.enum(['work', 'education']),
    start: z.number(),
    end: z.number().nullable(),
    org: localized,
    role: localized.optional(),
    summary: localized.optional(),
    items: z
      .array(
        z.object({
          title: localized,
          notes: z.array(localized).default([]),
          tech: z.array(z.string()).default([]),
          skills: z.array(reference('skills')).default([]),
        }),
      )
      .default([]),
  }),
});

export const collections = { news, skills, articles, publications, career };
