import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
export default defineConfig({

  
   site: 'https://lexingtonthemes.com',
  integrations: [tailwind(),  sitemap(), react()],
  output: 'server',
  adapter: vercel(),
});