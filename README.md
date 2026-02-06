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
