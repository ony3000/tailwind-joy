import type { Config } from 'tailwindcss';
import { joyTheme, joyPlugin } from './src/tw-extension';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: joyTheme.colors,
      keyframes: joyTheme.keyframes,
      animation: joyTheme.animation,
    },
  },
  plugins: [joyPlugin],
} satisfies Config;
