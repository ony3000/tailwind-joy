import type { Config } from 'tailwindcss';
import { joyColors } from '@ony3000/experimental-ui';

export default {
  content: [
    './index.html',
    './App.tsx',
    './node_modules/@ony3000/experimental-ui/**',
  ],
  theme: {
    extend: {
      colors: {
        ...joyColors,
      },
    },
  },
  plugins: [],
} satisfies Config;
