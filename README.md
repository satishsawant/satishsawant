# Satish Sawant — Portfolio

A professional, responsive portfolio site built with React, TypeScript and Vite, deployable for free on GitHub Pages.

All content is sourced from `src/data/profile.ts` — edit that one file to update copy anywhere on the site.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Before you deploy

1. **Set the base path** in `vite.config.ts`:
   - Repo named `<your-username>.github.io` → `base: '/'`
   - Any other repo name, e.g. `portfolio` → `base: '/portfolio/'` (must match the repo name exactly)
2. **Add your links** in `src/data/profile.ts` under `profile.links` (GitHub, LinkedIn, website). Empty strings are hidden automatically.
3. **Replace the resume** at `public/resume.pdf` any time you update your CV — the filename stays the same so the download link keeps working.

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended, auto-deploys on every push)

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds and publishes automatically.
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

### Option B — `gh-pages` package (manual deploys)

```bash
npm run build
npm run deploy
```

This pushes the built `dist/` folder to a `gh-pages` branch. Then in **Settings → Pages**, set **Source** to the `gh-pages` branch.

## Tech stack

- React 18 + TypeScript
- Vite
- Plain CSS (custom design system, no framework) — dark/light mode via CSS variables and `localStorage`
- No backend, database, or external runtime dependencies — fully static
