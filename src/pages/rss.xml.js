import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	// RSS is published even if the blog is empty. Include papers as feed items.
	const papers = await getCollection('papers');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: papers
			.filter((p) => p.data.status === 'published')
			.map((p) => ({
				title: p.data.title,
				description: p.data.description ?? '',
				pubDate: p.data.date ?? new Date(),
				link: `${new URL(`papers/${p.id}/`, context.site).toString()}`, 
			})),
	});
}
