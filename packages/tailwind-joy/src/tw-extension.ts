import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { joyColors } from './base/colors';

// ----------------------------------------------------------------

export const tjClassNames: string = '__REPLACE_ME__';

// ----------------------------------------------------------------

type ExtendableTheme = NonNullable<NonNullable<Config['theme']>['extend']>;

export const tjTheme: Pick<
  Required<ExtendableTheme>,
  'colors' | 'keyframes' | 'animation'
> = {
  colors: {
    joy: joyColors,
  },
  keyframes: {
    'joy-circulate': {
      '0%': {
        transform: 'rotate(-90deg)',
      },
      '100%': {
        transform: 'rotate(270deg)',
      },
    },
  },
  animation: {
    'joy-circulate':
      'joy-circulate 0.8s linear 0s infinite normal none running',
  },
};

// ----------------------------------------------------------------

type ColorDict = Record<string, string>;

function reduceColors(
  dict: Record<string, string | ColorDict>,
  prefix: string,
): ColorDict {
  const refinedPrefix = prefix ? `${prefix}-` : '';

  return Object.entries(dict).reduce<ColorDict>((prevResult, [key, value]) => {
    if (typeof value === 'object') {
      return {
        ...prevResult,
        ...reduceColors(value ?? {}, `${refinedPrefix}${key}`),
      };
    }

    return {
      ...prevResult,
      [`${refinedPrefix}${key}`]: value,
    };
  }, {});
}

export const tjPlugin = plugin(
  ({ addBase, addUtilities, matchUtilities, addVariant, matchVariant }) => {
    addBase({
      ':root': {
        '--pi': '3.1415926535',
        ...reduceColors(joyColors, '--joy'),
      },
    });

    addVariant('non-touchscreen', '@media (hover: hover) and (pointer: fine)');
  },
);

// ----------------------------------------------------------------
