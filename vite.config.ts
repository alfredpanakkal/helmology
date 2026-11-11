import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import {defineConfig} from 'vite';

// fileURLToPath(new URL(...)) works on every Node version;
// import.meta.dirname would require Node 20.11+.
const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': r('./src'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: r('index.html'),
          apps: r('apps.html'),
          about: r('about.html'),
          disclaimer: r('disclaimer.html'),
        },
      },
    },
  };
});
