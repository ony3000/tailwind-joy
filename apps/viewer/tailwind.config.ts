import type { Config } from 'tailwindcss';
import { joyPreset } from 'tailwind-joy/theme';

export default {
  presets: [joyPreset],
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-joy/**',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
