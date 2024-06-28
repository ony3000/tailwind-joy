import type { Config } from 'tailwindcss';
import { joyPreset } from 'tailwind-joy/theme';

export default {
  presets: [joyPreset],
  darkMode: 'selector',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './tests/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-joy/**',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
