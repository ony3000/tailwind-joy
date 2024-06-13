import type { Config } from 'tailwindcss';
import { joyColors } from 'tailwind-joy';

export default {
  content: ['./index.html', './App.tsx', './node_modules/tailwind-joy/**'],
  theme: {
    extend: {
      colors: {
        ...joyColors,
      },
    },
  },
  plugins: [],
} satisfies Config;
