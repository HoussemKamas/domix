// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://houssemkamas.github.io', // عنوان GitHub Pages الأساسي لحسابك
  base: '/domix',                          // اسم الريبو مع سلاش في البداية
  output: 'static',
});
