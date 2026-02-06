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

## Offline viewing (GitHub Actions artifact)
Every push/PR runs the `build-site` workflow and uploads a `site-dist` artifact.
Download it and open `index.html` from the extracted folder.
