export function slugifyTag(tag: string): string {
	return tag
		.toLowerCase()
		.trim()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/-{2,}/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function buildTagSlugEntries(tags: Iterable<string>): Array<{ tag: string; slug: string }> {
	const unique = [...new Set(Array.from(tags))].sort((a, b) => a.localeCompare(b));
	const used = new Set<string>();
	const out: Array<{ tag: string; slug: string }> = [];

	for (const tag of unique) {
		const base = slugifyTag(tag) || 'tag';
		let slug = base;
		let i = 2;
		while (used.has(slug)) slug = `${base}-${i++}`;
		used.add(slug);
		out.push({ tag, slug });
	}

	return out;
}
