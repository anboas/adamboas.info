function normalizeTagText(tag: string): string {
	return tag
		.toLowerCase()
		.trim()
		.replace(/&/g, ' and ')
		.replace(/[_/]+/g, ' ')
		.replace(/[\u2013\u2014]/g, '-')
		.replace(/\s+/g, ' ');
}

export function slugifyTag(tag: string): string {
	return normalizeTagText(tag)
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/-{2,}/g, '-')
		.replace(/^-+|-+$/g, '');
}

function preferTagLabel(current: string, candidate: string): string {
	const currentHasSpace = /\s/.test(current);
	const candidateHasSpace = /\s/.test(candidate);
	if (candidateHasSpace && !currentHasSpace) return candidate;
	if (candidateHasSpace === currentHasSpace && candidate.length < current.length) return candidate;
	return current;
}

export type CanonicalTagGroup = {
	slug: string;
	label: string;
	aliases: string[];
};

export function buildCanonicalTagGroups(tags: Iterable<string>): CanonicalTagGroup[] {
	const unique = [...new Set(Array.from(tags).filter(Boolean))].sort((a, b) => a.localeCompare(b));
	const groups = new Map<string, CanonicalTagGroup>();

	for (const rawTag of unique) {
		const slug = slugifyTag(rawTag) || 'tag';
		const existing = groups.get(slug);
		if (!existing) {
			groups.set(slug, { slug, label: rawTag, aliases: [rawTag] });
			continue;
		}
		existing.label = preferTagLabel(existing.label, rawTag);
		existing.aliases.push(rawTag);
	}

	for (const group of groups.values()) {
		group.aliases = [...new Set(group.aliases)].sort((a, b) => a.localeCompare(b));
	}

	return [...groups.values()].sort((a, b) => a.label.localeCompare(b.label));
}

// Backward-compatible shape used in a few pages.
export function buildTagSlugEntries(tags: Iterable<string>): Array<{ tag: string; slug: string }> {
	const unique = [...new Set(Array.from(tags).filter(Boolean))].sort((a, b) => a.localeCompare(b));
	return unique.map((tag) => ({ tag, slug: slugifyTag(tag) || 'tag' }));
}
