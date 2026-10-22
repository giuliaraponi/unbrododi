import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const poesie = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/poesie' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      intro: z.string().min(1),
      tags: z.array(z.string().min(1)).min(1),
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string().min(1),
            caption: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

const pagine = defineCollection({
  loader: glob({ pattern: ['about.md', 'privacy.md'], base: './content' }),
  schema: z.object({
    title: z.string().min(1),
    placeholder: z.boolean().optional(),
  }),
});

export const collections = { poesie, pagine };
