# adamboas.info

Static exhibition site for Adam Boas.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Configuration (12-factor)

Configuration is environment-driven. Copy and edit:

```bash
cp .env.example .env
```

Key app vars:

- `PUBLIC_SITE_URL` canonical site origin
- `PUBLIC_CONTACT_EMAIL` contact mailto target
- `PUBLIC_CONTACT_PHONE_E164` contact tel target
- `PUBLIC_MEDIA_BASE_URL` optional external media/CDN base URL

Analytics data scripts use:

- `PLAUSIBLE_API_KEY`
- `PLAUSIBLE_SITE_ID`
- `PLAUSIBLE_DATE_RANGE`
- `PLAUSIBLE_SITEMAP_INDEX_URL`

## Offline viewing

If you open `dist/index.html` directly via `file://`, your browser may block module scripts/assets.
Use a local server instead:

```bash
npm run build
cd dist
python3 -m http.server 4173
# open http://127.0.0.1:4173/
```

## GitHub Actions artifacts

Every push/PR runs the `build-site` workflow and uploads a `site-dist` artifact.
Download it, then serve it locally as above.

## Dev hosting (GitHub Pages)

A `deploy-dev-pages` workflow publishes the latest `main` build to GitHub Pages.
