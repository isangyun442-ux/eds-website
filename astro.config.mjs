// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.edamst.com',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
});
