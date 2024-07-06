import type { Config } from 'tailwindcss';
import { joyTheme, joyPlugin } from 'tailwind-joy/tw-extension';

export default {
  corePlugins: {
    preflight: false,
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './docs/**/*.{js,ts,md,jsx,tsx,mdx}',
    './blog/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-joy/**',
  ],
  theme: {
    screens: {
      // Left empty to avoid conflict with the `container` class.
    },
    extend: {
      colors: joyTheme.colors,
      keyframes: joyTheme.keyframes,
      animation: joyTheme.animation,
    },
  },
  plugins: [joyPlugin],
} satisfies Config;
