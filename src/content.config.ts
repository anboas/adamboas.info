import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog (legacy/reserved)
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

// Notes + memos (synced from Whitepaper repo)
const writing = defineCollection({
	loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
	schema: () =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			summary: z.string().optional(),
			status: z.enum(['draft', 'published']).default('published'),
			type: z.enum(['note', 'memo']),
			tags: z.array(z.string()).default([]),
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

export const collections = { blog, writing, papers };
