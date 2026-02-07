// Lighthouse CI config
// Docs: https://github.com/GoogleChrome/lighthouse-ci

module.exports = {
  ci: {
    collect: {
      // Astro builds to a static `dist/`.
      staticDistDir: './dist',
      // A few representative pages (include the long-form writing page).
      // When using `staticDistDir`, use paths (LHCI will spin up an ephemeral local server).
      url: ['/', '/writing/', '/writing/agentic-force-creation/', '/experience/', '/education/'],
      numberOfRuns: 1,
      settings: {
        // Reduce noise; we mostly care about perf+a11y+seo+bp.
        chromeFlags: ['--no-sandbox'],
        // Avoid occasional hangs in CI.
        maxWaitForLoad: 45_000,
      },
    },
    assert: {
      assertions: {
        // Start with reasonable budgets; tighten over time.
        'categories:performance': ['warn', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],

        // Guardrail: no huge pages.
        'resource-summary:total-byte-weight': ['warn', { maxNumericValue: 600000 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
