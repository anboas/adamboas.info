// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const excludedSitemapPaths = new Set([
	'/blog/',
	'/content-license/',
	'/credentials/',
	'/opportunities/sam/',
	'/opportunities/sbir/',
	'/opportunities/sbir-sttr/',
	'/papers/',
]);

function includeInSitemap(page) {
	const pathname = new URL(page).pathname;
	return (
		!pathname.includes('/full/') &&
		!pathname.includes('/research/') &&
		!pathname.startsWith('/papers/') &&
		!excludedSitemapPaths.has(pathname)
	);
}

// https://astro.build/config
export default defineConfig({
	// Used for sitemap + RSS canonical URLs
	site: 'https://www.adamboas.com',

	// For GitHub Pages project deployments (served from /<repo>/)
	// In workflows we set ASTRO_BASE to '/adamboas.info'
	base: (() => {
		const b = process.env.ASTRO_BASE || '/';
		return b.endsWith('/') ? b : `${b}/`;
	})(),

	integrations: [mdx(), sitemap({ filter: includeInSitemap })],

	vite: {
		plugins: [tailwindcss()],
	},
});
