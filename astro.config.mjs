import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://pascaii.github.io',
  integrations: [sitemap()],
  // Inline the small stylesheet so it doesn't block first paint (Lighthouse: render-blocking).
  build: { inlineStylesheets: 'always' },
})
