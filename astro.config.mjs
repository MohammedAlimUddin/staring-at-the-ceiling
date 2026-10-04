import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mohammedalimuddin.github.io',
  base: '/staring-at-the-ceiling',
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
