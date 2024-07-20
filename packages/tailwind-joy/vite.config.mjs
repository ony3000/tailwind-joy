import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { safelistGenerator } from './src/plugins/safelist-generator';

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
      afterBuild(emittedFiles) {
        for (const [path, code] of emittedFiles) {
          const extensionReplacedPath = path.replace(/\.d\.ts$/, '.d.cts');
          const extensionAddedCode = code.replace(
            /(from '\.?\.(?:\/[^/;]+)*\/[^/;.]+)(';)/g,
            '$1.cjs$2',
          );

          writeFileSync(extensionReplacedPath, extensionAddedCode);
        }
      },
    }),
    react(),
    safelistGenerator(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
