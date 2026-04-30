const FALLBACK_SITE_URL = 'https://www.adamboas.com';
const FALLBACK_CONTACT_EMAIL = 'anboas@gmail.com';
const FALLBACK_CONTACT_PHONE_E164 = '+13019042011';

function normalizeBaseUrl(value: string | undefined) {
	const raw = String(value || '').trim();
	if (!raw) return FALLBACK_SITE_URL;
	try {
		const parsed = new URL(raw);
		return parsed.origin;
	} catch {
		return FALLBACK_SITE_URL;
	}
}

function normalizeEmail(value: string | undefined) {
	const raw = String(value || '').trim();
	return raw || FALLBACK_CONTACT_EMAIL;
}

function normalizePhone(value: string | undefined) {
	const raw = String(value || '').trim();
	return raw || FALLBACK_CONTACT_PHONE_E164;
}

export const SITE_BASE_URL = normalizeBaseUrl(import.meta.env.PUBLIC_SITE_URL);
export const CONTACT_EMAIL = normalizeEmail(import.meta.env.PUBLIC_CONTACT_EMAIL);
export const CONTACT_PHONE_E164 = normalizePhone(import.meta.env.PUBLIC_CONTACT_PHONE_E164);

export function absoluteUrl(pathname: string) {
	return new URL(pathname, SITE_BASE_URL).toString();
}

export function contactMailto(subject?: string) {
	if (!subject) return `mailto:${CONTACT_EMAIL}`;
	return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
