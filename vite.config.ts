import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(import.meta.dirname, 'index.html'),
          apps: path.resolve(import.meta.dirname, 'apps.html'),
          about: path.resolve(import.meta.dirname, 'about.html'),
          disclaimer: path.resolve(import.meta.dirname, 'disclaimer.html'),
        },
      },
    },
  };
});
