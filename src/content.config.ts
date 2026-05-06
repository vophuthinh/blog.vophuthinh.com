import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            lang: z.enum(['vi', 'en']),
            translationKey: z.string().optional(),
            category: z.string(),
            tags: z.array(z.string()),
            series: z.string().optional(),
            cover: image().optional(),
            draft: z.boolean(),
            featured: z.boolean().optional(),
        }),
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            lang: z.enum(['vi', 'en']),
            translationKey: z.string().optional(),
            techStack: z.array(z.string()),
            cover: image().optional(),
            demoUrl: z.string().url().optional(),
            githubUrl: z.string().url().optional(),
            featured: z.boolean().optional(),
        }),
});

export const collections = {
    blog,
    projects,
};
