import type { Config } from 'tailwindcss';
import { tjClassNames, tjTheme, tjPlugin } from 'tailwind-joy/tw-extension';

export default {
  corePlugins: {
    preflight: false,
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './docs/**/*.{js,ts,md,jsx,tsx,mdx}',
    './blog/**/*.{js,ts,jsx,tsx}',
    { raw: tjClassNames },
  ],
  theme: {
    screens: {
      // Left empty to avoid conflict with the `container` class.
    },
    extend: {
      colors: tjTheme.colors,
      keyframes: tjTheme.keyframes,
      animation: tjTheme.animation,
    },
  },
  plugins: [tjPlugin],
} satisfies Config;
