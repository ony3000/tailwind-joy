import type { Config } from 'tailwindcss';
import { tjClassNames, tjTheme, tjPlugin } from 'tailwind-joy/tw-extension';

export default {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './tests/**/*.{js,ts,jsx,tsx}',
    { raw: tjClassNames },
  ],
  theme: {
    extend: {
      colors: tjTheme.colors,
      keyframes: tjTheme.keyframes,
      animation: tjTheme.animation,
    },
  },
  plugins: [tjPlugin],
} satisfies Config;
