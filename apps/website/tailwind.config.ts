import type { Config } from 'tailwindcss';
import { joyPreset } from 'tailwind-joy/theme';

export default {
  corePlugins: {
    preflight: false,
  },
  presets: [joyPreset],
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
    extend: {},
  },
  plugins: [],
} satisfies Config;
