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
    'joy-linear-circulate': {
      '0%': {
        left: 'var(--_LinearProgress-progressInset)',
        width: 'var(--LinearProgress-progressMinWidth)',
      },
      '25%': {
        width: 'var(--LinearProgress-progressMaxWidth)',
      },
      '50%': {
        left: 'var(--_LinearProgress-progressLeft)',
        width: 'var(--LinearProgress-progressMinWidth)',
      },
      '75%': {
        width: 'var(--LinearProgress-progressMaxWidth)',
      },
      '100%': {
        left: 'var(--_LinearProgress-progressInset)',
        width: 'var(--LinearProgress-progressMinWidth)',
      },
    },
  },
  animation: {
    'joy-circulate':
      'joy-circulate 0.8s linear 0s infinite normal none running',
    'joy-linear-circulate':
      'joy-linear-circulate var(--LinearProgress-circulation, 2.5s ease-in-out 0s infinite normal none running)',
  },
};

// ----------------------------------------------------------------

type ColorDict = Record<string, string>;

function convertColorsToEntries(
  dict: Record<string, string | ColorDict>,
  prefix: string,
): Array<[string, string]> {
  const refinedPrefix = prefix ? `${prefix}-` : '';

  return Object.entries(dict).flatMap(([key, value]) => {
    if (typeof value === 'object') {
      return convertColorsToEntries(value ?? {}, `${refinedPrefix}${key}`);
    }

    return [[`${refinedPrefix}${key}`, value]];
  });
}

export const tjPlugin = plugin(
  ({ addBase, addUtilities, matchUtilities, addVariant, matchVariant }) => {
    addBase({
      ':root': {
        '--pi': '3.1415926535',
        ...Object.fromEntries(convertColorsToEntries(joyColors, '--joy')),
      },
    });

    addVariant('non-touchscreen', '@media (hover: hover) and (pointer: fine)');
  },
);

// ----------------------------------------------------------------
