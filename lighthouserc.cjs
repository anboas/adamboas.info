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
        onlyCategories: ['performance', 'accessibility', 'seo', 'best-practices'],
        // Avoid occasional hangs in CI.
        maxWaitForFcp: 45_000,
        maxWaitForLoad: 45_000,
      },
    },
    assert: {
      assertions: {
        // Start with reasonable budgets; tighten over time.
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:seo': ['warn', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.95 }],

        // Guardrail: no huge pages.
        // Note: LHCI v0.15 doesn't support resource-summary assertions reliably.
        // We'll enforce size budgets via separate build-time checks if needed.
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
