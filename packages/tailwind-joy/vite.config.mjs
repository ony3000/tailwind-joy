import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/components.ts'),
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/tw-extension.ts'),
      ],
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'tailwindcss'],
    },
  },
  plugins: [
    dts({
      entryRoot: 'src',
      include: ['src/**'],
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
