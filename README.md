# Helmology

Static hub site for the Helm series — maritime-first tools by Alfred Panakkal Jose.

## Pages

- `/` — hero + live app grid (Helm.Warning featured, Helm.Ports)
- `/apps` — per-app sections: problem, features, stack, live link
- `/about` — developer bio, portfolio + LinkedIn
- `/disclaimer` — maritime safety disclaimer (noindex; linked from footer)

## Structure

Pure static HTML/CSS/JS. No build step, no framework, no server.

- `assets/css/tokens.css` — Helm design tokens (light / dark / night watch themes), copied from Helm.Warning
- `assets/css/site.css` — page styles, built only on tokens
- `assets/js/theme.js` — 3-theme picker, localStorage, system-preference default
- SEO pack: `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `favicon.svg`, canonical + OG tags per page

## Deploy (Cloudflare Pages)

1. Create a Pages project connected to this repo, production branch `main`.
2. Build command: none (leave empty). Output directory: `/` (repo root).
3. Add custom domain `helmology.com` — DNS is already on Cloudflare, so the records are created automatically.
4. Verify: HTTPS active, single H1 per page, Lighthouse, mobile check, then submit to Google Search Console.

## Conventions

Same as the rest of the Helm repos: branch, PR, maintainer merges. One H1 per page; weights max 500; accent `#2b6e8c` only; touch targets 44px minimum.
