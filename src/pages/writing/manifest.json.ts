import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absoluteUrl } from '../../config/site';

export const prerender = true;

function isoDate(value: Date | undefined | null) {
	if (!value) return null;
	if (Number.isNaN(value.getTime())) return null;
	return value.toISOString();
}

export const GET: APIRoute = async () => {
	const writing = (await getCollection('writing'))
		.filter((w) => w.data.status === 'published')
		.map((w) => {
			const slug = w.id.split('/').pop() ?? w.id;
			return {
				id: slug,
				type: w.data.type,
				title: w.data.title,
				summary: w.data.summary,
				tags: w.data.tags ?? [],
				published_at: isoDate(w.data.date),
				url: absoluteUrl(`/writing/${slug}/`),
				og_image: absoluteUrl(`/og/writing/${slug}.png`),
				has_audio: Boolean(w.data.audioPath),
				audio_url: w.data.audioPath ? absoluteUrl(w.data.audioPath) : null,
				pdf_url: w.data.pdfPath ? absoluteUrl(w.data.pdfPath) : null,
			};
		});

	const papers = (await getCollection('papers'))
		.filter((p) => p.data.status === 'published')
		.map((p) => ({
			id: p.id,
			type: 'paper',
			title: p.data.title,
			summary: p.data.description,
			tags: p.data.tags ?? [],
			published_at: isoDate(p.data.date),
			url: absoluteUrl(`/writing/${p.id}/`),
			og_image: absoluteUrl(`/og/writing/${p.id}.png`),
			has_audio: Boolean(p.data.audioPath),
			audio_url: p.data.audioPath ? absoluteUrl(p.data.audioPath) : null,
			pdf_url: p.data.pdfPath ? absoluteUrl(p.data.pdfPath) : null,
		}));

	const entries = [...writing, ...papers].sort((a, b) => {
		const aa = a.published_at ? new Date(a.published_at).valueOf() : 0;
		const bb = b.published_at ? new Date(b.published_at).valueOf() : 0;
		return bb - aa;
	});

	const payload = {
		schema_version: '1.0',
		generated_at: new Date().toISOString(),
		count: entries.length,
		entries,
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
