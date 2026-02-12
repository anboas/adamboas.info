import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	// RSS is published even if the blog is empty. Include writing + papers as feed items.
	const writing = await getCollection('writing');
	const papers = await getCollection('papers');

	const writingItems = writing
		.filter((w) => w.data.status === 'published')
		.map((w) => {
			const slug = w.id.split('/').pop();
			return {
				title: w.data.title,
				description: w.data.summary ?? '',
				pubDate: w.data.date,
				link: `${new URL(`writing/${slug}/`, context.site).toString()}`,
			};
		});

	const paperItems = papers
		.filter((p) => p.data.status === 'published')
		.map((p) => ({
			title: p.data.title,
			description: p.data.description ?? '',
			pubDate: p.data.date ?? new Date(),
			link: `${new URL(`writing/${p.id}/`, context.site).toString()}`,
		}));

	const items = [...writingItems, ...paperItems].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
