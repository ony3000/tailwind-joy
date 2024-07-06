import type { Config } from 'tailwindcss';
import { joyTheme, joyPlugin } from 'tailwind-joy/tw-extension';

export default {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './tests/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-joy/**',
  ],
  theme: {
    extend: {
      colors: joyTheme.colors,
      keyframes: joyTheme.keyframes,
      animation: joyTheme.animation,
    },
  },
  plugins: [joyPlugin],
} satisfies Config;
