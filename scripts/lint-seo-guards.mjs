#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const repoRoot = process.cwd();
const errors = [];

function read(file) {
	return fs.readFileSync(path.join(repoRoot, file), 'utf-8');
}

function exists(file) {
	return fs.existsSync(path.join(repoRoot, file));
}

function listMarkdownFiles(dir) {
	const abs = path.join(repoRoot, dir);
	if (!fs.existsSync(abs)) return [];
	return fs
		.readdirSync(abs)
		.filter((name) => name.endsWith('.md'))
		.map((name) => path.join(dir, name));
}

function assert(condition, message) {
	if (!condition) errors.push(message);
}

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const writingFiles = listMarkdownFiles('src/content/writing/notes').concat(
	listMarkdownFiles('src/content/writing/memos'),
);
for (const rel of writingFiles) {
	const raw = read(rel);
	const parsed = matter(raw);
	const data = parsed.data || {};
	if ((data.status ?? 'published') !== 'published') continue;
	const slug = path.basename(rel, '.md');
	assert(slugPattern.test(slug), `Invalid writing slug: ${slug}`);
	const summary = String(data.summary ?? '').trim();
	assert(
		summary.length >= 90 && summary.length <= 280,
		`Summary length out of range (90-280) for ${slug}: ${summary.length}`,
	);
	assert(exists(`public/og/writing/${slug}.png`), `Missing OG image for writing slug: ${slug}`);
}

const paperFiles = listMarkdownFiles('src/content/papers');
for (const rel of paperFiles) {
	const raw = read(rel);
	const parsed = matter(raw);
	const data = parsed.data || {};
	if ((data.status ?? 'published') !== 'published') continue;
	const slug = path.basename(rel, '.md');
	assert(slugPattern.test(slug), `Invalid paper slug: ${slug}`);
	const description = String(data.description ?? '').trim();
	assert(
		description.length >= 80 && description.length <= 280,
		`Description length out of range (80-280) for paper ${slug}: ${description.length}`,
	);
	assert(exists(`public/og/writing/${slug}.png`), `Missing OG image for paper slug: ${slug}`);
}

const writingDetailPage = read('src/pages/writing/[...slug].astro');
assert(
	/'@type':\s*currentSchemaType/.test(writingDetailPage) || /'@type':\s*'Article'/.test(writingDetailPage),
	'Writing detail JSON-LD must include Article schema mapping.',
);
assert(/BreadcrumbList/.test(writingDetailPage), 'Writing detail page must include BreadcrumbList schema.');

const mustNoindex = [
	'src/pages/events/index.astro',
	'src/pages/events/sources.astro',
	'src/pages/opportunities/index.astro',
	'src/pages/status.astro',
	'src/pages/status/site-analytics.astro',
	'src/pages/changes.astro',
	'src/pages/sitemap.astro',
	'src/pages/blog/index.astro',
	'src/pages/credentials.astro',
	'src/pages/content-license.astro',
	'src/pages/experience/index.astro',
	'src/pages/experience/[slug].astro',
	'src/pages/education/index.astro',
	'src/pages/education/[slug].astro',
];

for (const file of mustNoindex) {
	const src = read(file);
	assert(/noindex=\{true\}/.test(src), `Missing noindex={true} on ${file}`);
}

const coreIndexable = [
	'src/pages/index.astro',
	'src/pages/profile/index.astro',
	'src/pages/writing/index.astro',
	'src/pages/capabilities/index.astro',
	'src/pages/capabilities/[slug].astro',
];
for (const file of coreIndexable) {
	const src = read(file);
	assert(!/noindex=\{true\}/.test(src), `Core page should remain indexable (remove noindex): ${file}`);
}

if (errors.length) {
	console.error('seo guard lint failed:\n');
	for (const err of errors) console.error(`- ${err}`);
	process.exit(1);
}

console.log('seo guard lint passed');
