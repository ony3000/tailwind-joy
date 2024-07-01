import type { Config } from 'tailwindcss';

export default {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './docs/**/*.{js,ts,jsx,tsx}',
    './blog/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      // Left empty to avoid conflict with the `container` class.
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
