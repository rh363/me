import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rh363.github.io',
  base: '/me',
  output: 'static',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
