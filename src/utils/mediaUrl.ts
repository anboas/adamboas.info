import { withBase } from './withBase';

function trimTrailingSlash(v: string) {
	return v.endsWith('/') ? v.slice(0, -1) : v;
}

export function resolveMediaUrl(path: string) {
	const mediaBase = (import.meta.env.PUBLIC_MEDIA_BASE_URL || '').trim();
	if (mediaBase && path.startsWith('/audio/')) {
		return `${trimTrailingSlash(mediaBase)}${path}`;
	}
	return withBase(path);
}
