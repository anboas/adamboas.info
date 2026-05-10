import type { APIRoute } from 'astro';
import { absoluteUrl } from '../config/site';
import discoveryEvents from '../data/discovery-events.json';

export const prerender = true;

type ChangeEvent = {
	id: string;
	ts: string;
	type: 'release' | 'seo' | 'agentic' | 'ci';
	release: string;
	summary: string;
	links?: string[];
};

function toAbsolute(link: string) {
	if (link.startsWith('http://') || link.startsWith('https://')) return link;
	return absoluteUrl(link);
}

function toJsonl(events: ChangeEvent[]) {
	return `${events
		.map((event) =>
			JSON.stringify({
				...event,
				links: event.links?.map(toAbsolute),
			})
		)
		.join('\n')}\n`;
}

export const GET: APIRoute = () => {
	const events = discoveryEvents as ChangeEvent[];

	return new Response(toJsonl(events), {
		headers: {
			'Content-Type': 'application/x-ndjson; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
};
