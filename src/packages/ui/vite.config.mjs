import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, './index.ts'),
        resolve(__dirname, './colors.ts'),
        resolve(__dirname, './components.ts'),
        resolve(__dirname, './icons.ts'),
      ],
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
  plugins: [
    dts({
      include: ['./**'],
    }),
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
});
