import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tommo1818.github.io',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
