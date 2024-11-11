import type { Config } from 'tailwindcss';
import { tjTheme, tjPlugin } from './src/tw-extension';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: tjTheme.colors,
      keyframes: tjTheme.keyframes,
      animation: tjTheme.animation,
    },
  },
  plugins: [tjPlugin],
} satisfies Config;
