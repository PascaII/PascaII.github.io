# pascaii.github.io

Personal site. Static, built with [Astro](https://astro.build), deployed to GitHub Pages.

```bash
npm install
npm run dev                                   # http://localhost:4321
GITHUB_TOKEN=$(gh auth token) npm run build   # token is only needed for the contribution graph
```

- **Content**: everything is in `src/data.ts`.
- **Portrait**: `public/portrait.png` is a tiny greyscale cutout (one pixel per dot, alpha = dot scale). `src/portrait.ts` draws it as a halftone. Replace the PNG to change the picture.
- **Contribution graph**: fetched at build time in `src/github.ts`; a daily scheduled workflow run keeps it fresh. GitHub pauses scheduled workflows after 60 days without repository activity.
- **Custom domain**: add `public/CNAME` and change `site` in `astro.config.mjs`.
