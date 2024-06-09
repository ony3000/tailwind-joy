import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './App.tsx',
    './node_modules/@ony3000/experimental-ui/**',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
