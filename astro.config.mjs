import { defineConfig } from 'astro/config';

export default defineConfig({
  // إعدادات أساسية
  site: 'http://localhost:4321',
  base: '/',
  
  // تأكد من أن output هو 'static'
  output: 'static',
  
  // إعدادات الـ build
  build: {
    format: 'file'
  },
  
  // إعدادات الـ server
  server: {
    port: 4321,
    host: true
  }
});
