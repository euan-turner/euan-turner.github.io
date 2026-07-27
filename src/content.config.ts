import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    period: z.string(),
    start: z.string(),        // ISO date, used for sorting (most recent first)
    url: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.string(),
    date: z.string(),         // ISO date, used for sorting
    link: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    period: z.string(),
    start: z.string(),        // ISO date, used for sorting (most recent first)
    url: z.string().optional(),
    dissertation: z.object({
      title: z.string(),
      url: z.string().optional(),
    }).optional(),
    modules: z.array(z.string()).default([]),
    awards: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    date: z.string(),
    url: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    org: z.string().optional(),
    period: z.string().optional(),
    url: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { experience, education, research, projects, activities, writeups };
