import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /** Short one-liner shown on the card. */
    summary: z.string(),
    /** Category label, e.g. "Data & NLP". */
    kicker: z.string(),
    year: z.string(),
    /** Drives card order on the homepage. */
    order: z.number(),
    stack: z.array(z.string()).default([]),
    live: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(true),
  }),
});

export const collections = { work };
