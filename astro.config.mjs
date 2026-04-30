// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://housing.profit24.eu',
  output: 'static',
  outDir: './docs',
  build: {
    inlineStylesheets: 'always'
  },
  i18n: {
    defaultLocale: 'et',
    locales: ['et', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});