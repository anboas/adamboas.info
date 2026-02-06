import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog (reserved for future short-form writing)
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

// Papers are first-class pages (whole-page viewing)
const papers = defineCollection({
	loader: glob({ base: './src/content/papers', pattern: '**/*.md' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			date: z.coerce.date().optional(),
			status: z.enum(['draft', 'published']).default('published'),
			pdfPath: z.string().optional(), // e.g. /papers/agentic-force-creation.pdf
			tags: z.array(z.string()).default([]),
		}),
});

export const collections = { blog, papers };
