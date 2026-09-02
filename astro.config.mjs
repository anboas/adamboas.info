// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

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

	integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/full/') && !page.includes('/research/') })],

	vite: {
		plugins: [tailwindcss()],
	},
});
