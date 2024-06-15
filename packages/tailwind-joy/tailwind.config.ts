import type { Config } from 'tailwindcss';
import { joyColors } from './src/theme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: joyColors,
    },
  },
  plugins: [],
} satisfies Config;
