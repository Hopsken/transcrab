import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://transcrab.hopsken.com',
  output: 'static',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
