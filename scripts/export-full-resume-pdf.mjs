import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';

const port = process.env.FULL_RESUME_PDF_PORT ?? '4327';
const baseUrl = `http://127.0.0.1:${port}`;
const outputPath = 'public/files/adam-boas-full-resume.pdf';
const astroCli = 'node_modules/astro/astro.js';

function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, timeoutMs = 90000) {
	const started = Date.now();
	let lastError;

	while (Date.now() - started < timeoutMs) {
		try {
			const response = await fetch(url);
			if (response.ok) return;
			lastError = new Error(`HTTP ${response.status}`);
		} catch (error) {
			lastError = error;
		}

		await wait(750);
	}

	throw new Error(`Timed out waiting for ${url}: ${lastError?.message ?? 'no response'}`);
}

async function stopServer(server) {
	if (server.exitCode !== null || server.signalCode !== null) return;

	server.kill('SIGTERM');
	await Promise.race([
		new Promise((resolve) => server.once('exit', resolve)),
		wait(5000).then(() => {
			if (server.exitCode === null && server.signalCode === null) server.kill('SIGKILL');
		}),
	]);
}

const server = spawn(process.execPath, [astroCli, 'dev', '--host', '127.0.0.1', '--port', port], {
	stdio: ['ignore', 'pipe', 'pipe'],
});

let serverLog = '';
for (const stream of [server.stdout, server.stderr]) {
	stream.on('data', (chunk) => {
		serverLog += chunk.toString();
		if (serverLog.length > 20000) serverLog = serverLog.slice(-20000);
	});
}

try {
	await waitForServer(`${baseUrl}/full/?print=1`);

	const browser = await chromium.launch({ headless: true });
	const page = await browser.newPage({ viewport: { width: 816, height: 1056 } });
	await page.goto(`${baseUrl}/full/?print=1`, { waitUntil: 'domcontentloaded', timeout: 45000 });
	await page.emulateMedia({ media: 'print' });
	await page.pdf({
		path: outputPath,
		width: '8.5in',
		height: '11in',
		margin: { top: '0', right: '0', bottom: '0', left: '0' },
		printBackground: true,
		preferCSSPageSize: true,
		omitBackground: false,
		tagged: true,
	});
	await browser.close();

	console.log(`Wrote ${outputPath}`);
} catch (error) {
	console.error(serverLog);
	throw error;
} finally {
	await stopServer(server);
}
