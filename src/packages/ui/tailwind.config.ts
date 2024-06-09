import type { Config } from 'tailwindcss';
import { tailwindExtendableColors } from './colors';

export default {
  content: ['./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: tailwindExtendableColors,
    },
  },
  plugins: [],
} satisfies Config;
