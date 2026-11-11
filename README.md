# Helmology

Static hub site for the Helm series — maritime-first tools by Alfred Panakkal Jose. UI cloned from Helm.Ports (moss palette, header, theme system, cards).

## Pages

- `/` — hero + app grid (Helm.Warning featured, Helm.Ports)
- `/apps` — per-app sections: problem, features, stack, live link
- `/about` — developer bio, portfolio + LinkedIn
- `/disclaimer` — maritime safety disclaimer (noindex; linked from footer)

## Stack

React 19 + Vite 8 + Tailwind CSS v4 (moss palette from Helm.Ports, `src/index.css`). Multi-page build: four HTML entries (`index.html`, `apps.html`, `about.html`, `disclaimer.html`), no client-side router, so every URL is a real file and no SPA fallback is needed.

- `src/App.tsx` — shell: header (nav + info + theme toggle), footer, page switch
- `src/pages/` — Home, Apps, About, Disclaimer
- `src/components/theme-provider.tsx` — light/dark/system, storage key `helmology-theme`
- `src/components/InfoSheet.tsx` — about/theme slide-over (same pattern as Helm.Ports)
- `src/components/ui/` — button + sheet (copied from Helm.Ports)
- SEO pack: `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `favicon.svg`, canonical + OG tags per page

## Development

```sh
npm install
npm run dev     # vite dev server
npm run lint    # tsc --noEmit
npm run build   # vite build -> dist/
```

## Deploy (Cloudflare)

Build command: `npm run build`. Output directory: `dist`. Custom domain `helmology.com` (DNS already on Cloudflare). No placeholder GSC token — add the real one via Search Console later.

## Conventions

Same as the rest of the Helm repos: branch, PR, maintainer merges. One H1 per page; moss palette only (mint accent #2F6B4F); touch targets 44px minimum.
