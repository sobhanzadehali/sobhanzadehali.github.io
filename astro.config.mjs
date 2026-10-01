import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sobhanzadehali.github.io',
  integrations: [tailwind()],
});