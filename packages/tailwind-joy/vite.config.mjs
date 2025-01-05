import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { safelistGenerator } from './src/plugins/safelist-generator';

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/components.ts'),
        resolve(__dirname, 'src/tw-extension.ts'),
        resolve(__dirname, 'src/utils.ts'),
      ],
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'tailwindcss'],
    },
  },
  plugins: [react(), safelistGenerator()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
