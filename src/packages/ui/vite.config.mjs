import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'DemoLib',
      fileName: 'demo-lib',
    },
  },
  plugins: [
    dts({
      include: ['./**'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
});
