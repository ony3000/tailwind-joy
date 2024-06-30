import plugin from 'tailwindcss/plugin';

const joyColors = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    '50': '#edf5fd',
    '100': '#e3effb',
    '200': '#c7dff7',
    '300': '#97c3f0',
    '400': '#4393e4',
    '500': '#0b6bcb',
    '600': '#185ea5',
    '700': '#12467b',
    '800': '#0a2744',
    '900': '#051423',
  },
  neutral: {
    '50': '#fbfcfe',
    '100': '#f0f4f8',
    '200': '#dde7ee',
    '300': '#cdd7e1',
    '400': '#9fa6ad',
    '500': '#636b74',
    '600': '#555e68',
    '700': '#32383e',
    '800': '#171a1c',
    '900': '#0b0d0e',
  },
  danger: {
    '50': '#fef6f6',
    '100': '#fce4e4',
    '200': '#f7c5c5',
    '300': '#f09898',
    '400': '#e47474',
    '500': '#c41c1c',
    '600': '#a51818',
    '700': '#7d1212',
    '800': '#430a0a',
    '900': '#240505',
  },
  success: {
    '50': '#f6fef6',
    '100': '#e3fbe3',
    '200': '#c7f7c7',
    '300': '#a1e8a1',
    '400': '#51bc51',
    '500': '#1f7a1f',
    '600': '#136c13',
    '700': '#0a470a',
    '800': '#042f04',
    '900': '#021d02',
  },
  warning: {
    '50': '#fefaf6',
    '100': '#fdf0e1',
    '200': '#fce1c2',
    '300': '#f3c896',
    '400': '#ea9a3e',
    '500': '#9a5b13',
    '600': '#72430d',
    '700': '#492b08',
    '800': '#2e1b05',
    '900': '#1d1002',
  },
};

function reduceColors(
  obj: Record<string, any>,
  prefix: string,
): Record<string, any> {
  const refinedPrefix = prefix ? `${prefix}-` : '';

  return Object.entries(obj).reduce((prevResult, [key, value]) => {
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

export const joyPreset = {
  theme: {
    extend: {
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
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': {
          '--pi': '3.1415926535',
          ...reduceColors(joyColors, '--joy'),
        },
      });
    }),
  ],
};
