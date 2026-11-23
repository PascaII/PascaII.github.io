# pascaii.github.io

My personal site, live at [pascaii.github.io](https://pascaii.github.io). Built with
[Astro](https://astro.build) and deployed to GitHub Pages on every push to `main`.

```bash
npm ci
npm run dev                                   # http://localhost:4321
GITHUB_TOKEN=$(gh auth token) npm run build   # the token is only for the contribution graph
```

Content lives in `src/data.ts`.
