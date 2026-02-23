import fs from 'node:fs/promises';
import path from 'node:path';

export type PdfMeta = {
	size: string | null;
	pages: number | null;
};

function formatBytes(n: number) {
	if (!Number.isFinite(n) || n <= 0) return null;
	const kb = n / 1024;
	if (kb < 1024) return `${Math.round(kb)} KB`;
	const mb = kb / 1024;
	return `${mb.toFixed(1)} MB`;
}

export async function getPdfMeta(pdfPath: string): Promise<PdfMeta> {
	try {
		const abs = path.join(process.cwd(), 'public', pdfPath.replace(/^\//, ''));
		const st = await fs.stat(abs);
		const buf = await fs.readFile(abs);
		const text = buf.toString('latin1');
		const pages = (text.match(/\/Type\s*\/Page\b/g) || []).length || null;
		return { size: formatBytes(st.size), pages };
	} catch {
		return { size: null, pages: null };
	}
}
