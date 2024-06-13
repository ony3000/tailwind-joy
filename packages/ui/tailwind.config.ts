import type { Config } from 'tailwindcss';
import { tailwindExtendableColors } from './src/colors';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: tailwindExtendableColors,
    },
  },
  plugins: [],
} satisfies Config;
