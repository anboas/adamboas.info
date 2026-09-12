import { execFileSync } from 'node:child_process';

function resolveCommitSha() {
	const environmentSha = process.env.GITHUB_SHA || process.env.CF_PAGES_COMMIT_SHA || process.env.COMMIT_REF;
	if (environmentSha?.trim()) return environmentSha.trim();

	try {
		return execFileSync('git', ['rev-parse', '--verify', 'HEAD'], {
			cwd: process.cwd(),
			encoding: 'utf8',
			stdio: ['ignore', 'pipe', 'ignore'],
		}).trim();
	} catch {
		return '';
	}
}

export const SITE_BUILD_SHA = resolveCommitSha();
export const SITE_BUILD_LABEL = SITE_BUILD_SHA ? SITE_BUILD_SHA.slice(0, 9) : 'local';
export const SITE_BUILD_TIME = process.env.SITE_BUILD_TIME?.trim() || new Date().toISOString();
