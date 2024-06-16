import type { Config } from 'tailwindcss';
import { joyPreset } from './src/theme';

export default {
  presets: [joyPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
