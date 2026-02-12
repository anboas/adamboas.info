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
		z
			.object({
				title: z.string(),
				date: z.coerce.date(),
				summary: z.string().optional(),
				status: z.enum(['draft', 'published']).default('published'),
				type: z.enum(['note', 'memo']),
				pdfPath: z.string().optional(), // e.g. /memos/example.pdf
				tags: z.array(z.string()).default([]),
			})
			.superRefine((data, ctx) => {
				if (data.status === 'published') {
					if (!data.summary || !data.summary.trim()) ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'published writing must have summary' });
					if (!data.tags?.length) ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'published writing must have at least one tag' });
				}
			}),
});

// Papers are first-class pages (whole-page viewing)
const papers = defineCollection({
	loader: glob({ base: './src/content/papers', pattern: '**/*.md' }),
	schema: () =>
		z
			.object({
				title: z.string(),
				description: z.string().optional(),
				date: z.coerce.date().optional(),
				status: z.enum(['draft', 'published']).default('published'),
				pdfPath: z.string().optional(), // e.g. /papers/agentic-force-creation.pdf
				tags: z.array(z.string()).default([]),
			})
			.superRefine((data, ctx) => {
				if (data.status === 'published') {
					if (!data.description || !data.description.trim()) ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'published papers must have description' });
					if (!data.date) ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'published papers must have date' });
					if (!data.pdfPath || !data.pdfPath.trim()) ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'published papers must have pdfPath' });
					if (!data.tags?.length) ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'published papers must have at least one tag' });
				}
			}),
});

export const collections = { blog, writing, papers };
