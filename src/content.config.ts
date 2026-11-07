import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    category: z.string(),
    problem: z.string(),
    solution: z.string(),
    myRole: z.string(),
    technologies: z.array(z.string()),
    technicalChallenges: z.array(z.string()),
    results: z.array(z.string()),
    status: z.string(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    isConfidential: z.boolean().default(false),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
};
