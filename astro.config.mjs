// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://housing.profit24.eu',
  output: 'static',
  i18n: {
    defaultLocale: 'et',
    locales: ['et', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});