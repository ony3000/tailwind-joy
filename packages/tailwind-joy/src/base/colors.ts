export const joyColors = {
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

export const colorTokens = {
  primary: {
    plainColor: 'text-joy-primary-500 dark:text-joy-primary-300',
    plainHoverBg:
      'non-touchscreen:hover:bg-joy-primary-100 dark:non-touchscreen:hover:bg-joy-primary-800',
    plainActiveBg:
      '[&]:active:bg-joy-primary-200 dark:[&]:active:bg-joy-primary-700',
    plainDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedColor: 'text-joy-primary-500 dark:text-joy-primary-200',
    outlinedBorder: 'border-joy-primary-300 dark:border-joy-primary-700',
    outlinedHoverBg:
      'non-touchscreen:hover:bg-joy-primary-100 dark:non-touchscreen:hover:bg-joy-primary-800',
    outlinedActiveBg:
      '[&]:active:bg-joy-primary-200 dark:[&]:active:bg-joy-primary-700',
    outlinedDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedDisabledBorder:
      'disabled:border-joy-neutral-200 dark:disabled:border-joy-neutral-800',
    softColor: 'text-joy-primary-700 dark:text-joy-primary-200',
    softBg: 'bg-joy-primary-100 dark:bg-joy-primary-800',
    softHoverBg:
      'non-touchscreen:hover:bg-joy-primary-200 dark:non-touchscreen:hover:bg-joy-primary-700',
    softActiveColor:
      '[&]:active:text-joy-primary-800 dark:[&]:active:text-joy-primary-100',
    softActiveBg:
      '[&]:active:bg-joy-primary-300 dark:[&]:active:bg-joy-primary-600',
    softDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    softDisabledBg:
      'disabled:bg-joy-neutral-50 dark:disabled:bg-joy-neutral-800',
    solidColor: 'text-joy-common-white',
    solidBg: 'bg-joy-primary-500',
    solidHoverBg: 'non-touchscreen:hover:bg-joy-primary-600',
    solidActiveBg: '[&]:active:bg-joy-primary-700',
    solidDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    solidDisabledBg:
      'disabled:bg-joy-neutral-100 dark:disabled:bg-joy-neutral-800',
  },
  neutral: {
    plainColor: 'text-joy-neutral-700 dark:text-joy-neutral-300',
    plainHoverBg:
      'non-touchscreen:hover:bg-joy-neutral-100 dark:non-touchscreen:hover:bg-joy-neutral-800',
    plainActiveBg:
      '[&]:active:bg-joy-neutral-200 dark:[&]:active:bg-joy-neutral-700',
    plainDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedColor: 'text-joy-neutral-700 dark:text-joy-neutral-200',
    outlinedBorder: 'border-joy-neutral-300 dark:border-joy-neutral-700',
    outlinedHoverBg:
      'non-touchscreen:hover:bg-joy-neutral-100 dark:non-touchscreen:hover:bg-joy-neutral-800',
    outlinedActiveBg:
      '[&]:active:bg-joy-neutral-200 dark:[&]:active:bg-joy-neutral-700',
    outlinedDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedDisabledBorder:
      'disabled:border-joy-neutral-200 dark:disabled:border-joy-neutral-800',
    softColor: 'text-joy-neutral-700 dark:text-joy-neutral-200',
    softBg: 'bg-joy-neutral-100 dark:bg-joy-neutral-800',
    softHoverBg:
      'non-touchscreen:hover:bg-joy-neutral-200 dark:non-touchscreen:hover:bg-joy-neutral-700',
    softActiveColor:
      '[&]:active:text-joy-neutral-800 dark:[&]:active:text-joy-neutral-100',
    softActiveBg:
      '[&]:active:bg-joy-neutral-300 dark:[&]:active:bg-joy-neutral-600',
    softDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    softDisabledBg:
      'disabled:bg-joy-neutral-50 dark:disabled:bg-joy-neutral-800',
    solidColor: 'text-joy-common-white',
    solidBg: 'bg-joy-neutral-500',
    solidHoverBg: 'non-touchscreen:hover:bg-joy-neutral-600',
    solidActiveBg: '[&]:active:bg-joy-neutral-700',
    solidDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    solidDisabledBg:
      'disabled:bg-joy-neutral-100 dark:disabled:bg-joy-neutral-800',
    plainHoverColor:
      'non-touchscreen:hover:text-joy-neutral-900 dark:non-touchscreen:hover:text-joy-neutral-300',
  },
  danger: {
    plainColor: 'text-joy-danger-500 dark:text-joy-danger-300',
    plainHoverBg:
      'non-touchscreen:hover:bg-joy-danger-100 dark:non-touchscreen:hover:bg-joy-danger-800',
    plainActiveBg:
      '[&]:active:bg-joy-danger-200 dark:[&]:active:bg-joy-danger-700',
    plainDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedColor: 'text-joy-danger-500 dark:text-joy-danger-200',
    outlinedBorder: 'border-joy-danger-300 dark:border-joy-danger-700',
    outlinedHoverBg:
      'non-touchscreen:hover:bg-joy-danger-100 dark:non-touchscreen:hover:bg-joy-danger-800',
    outlinedActiveBg:
      '[&]:active:bg-joy-danger-200 dark:[&]:active:bg-joy-danger-700',
    outlinedDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedDisabledBorder:
      'disabled:border-joy-neutral-200 dark:disabled:border-joy-neutral-800',
    softColor: 'text-joy-danger-700 dark:text-joy-danger-200',
    softBg: 'bg-joy-danger-100 dark:bg-joy-danger-800',
    softHoverBg:
      'non-touchscreen:hover:bg-joy-danger-200 dark:non-touchscreen:hover:bg-joy-danger-700',
    softActiveColor:
      '[&]:active:text-joy-danger-800 dark:[&]:active:text-joy-danger-100',
    softActiveBg:
      '[&]:active:bg-joy-danger-300 dark:[&]:active:bg-joy-danger-600',
    softDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    softDisabledBg:
      'disabled:bg-joy-neutral-50 dark:disabled:bg-joy-neutral-800',
    solidColor: 'text-joy-common-white',
    solidBg: 'bg-joy-danger-500',
    solidHoverBg: 'non-touchscreen:hover:bg-joy-danger-600',
    solidActiveBg: '[&]:active:bg-joy-danger-700',
    solidDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    solidDisabledBg:
      'disabled:bg-joy-neutral-100 dark:disabled:bg-joy-neutral-800',
  },
  success: {
    plainColor: 'text-joy-success-500 dark:text-joy-success-300',
    plainHoverBg:
      'non-touchscreen:hover:bg-joy-success-100 dark:non-touchscreen:hover:bg-joy-success-800',
    plainActiveBg:
      '[&]:active:bg-joy-success-200 dark:[&]:active:bg-joy-success-700',
    plainDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedColor: 'text-joy-success-500 dark:text-joy-success-200',
    outlinedBorder: 'border-joy-success-300 dark:border-joy-success-700',
    outlinedHoverBg:
      'non-touchscreen:hover:bg-joy-success-100 dark:non-touchscreen:hover:bg-joy-success-800',
    outlinedActiveBg:
      '[&]:active:bg-joy-success-200 dark:[&]:active:bg-joy-success-700',
    outlinedDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedDisabledBorder:
      'disabled:border-joy-neutral-200 dark:disabled:border-joy-neutral-800',
    softColor: 'text-joy-success-700 dark:text-joy-success-200',
    softBg: 'bg-joy-success-100 dark:bg-joy-success-800',
    softHoverBg:
      'non-touchscreen:hover:bg-joy-success-200 dark:non-touchscreen:hover:bg-joy-success-700',
    softActiveColor:
      '[&]:active:text-joy-success-800 dark:[&]:active:text-joy-success-100',
    softActiveBg:
      '[&]:active:bg-joy-success-300 dark:[&]:active:bg-joy-success-600',
    softDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    softDisabledBg:
      'disabled:bg-joy-neutral-50 dark:disabled:bg-joy-neutral-800',
    solidColor: 'text-joy-common-white',
    solidBg: 'bg-joy-success-500',
    solidHoverBg: 'non-touchscreen:hover:bg-joy-success-600',
    solidActiveBg: '[&]:active:bg-joy-success-700',
    solidDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    solidDisabledBg:
      'disabled:bg-joy-neutral-100 dark:disabled:bg-joy-neutral-800',
  },
  warning: {
    plainColor: 'text-joy-warning-500 dark:text-joy-warning-300',
    plainHoverBg:
      'non-touchscreen:hover:bg-joy-warning-100 dark:non-touchscreen:hover:bg-joy-warning-800',
    plainActiveBg:
      '[&]:active:bg-joy-warning-200 dark:[&]:active:bg-joy-warning-700',
    plainDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedColor: 'text-joy-warning-500 dark:text-joy-warning-200',
    outlinedBorder: 'border-joy-warning-300 dark:border-joy-warning-700',
    outlinedHoverBg:
      'non-touchscreen:hover:bg-joy-warning-100 dark:non-touchscreen:hover:bg-joy-warning-800',
    outlinedActiveBg:
      '[&]:active:bg-joy-warning-200 dark:[&]:active:bg-joy-warning-700',
    outlinedDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    outlinedDisabledBorder:
      'disabled:border-joy-neutral-200 dark:disabled:border-joy-neutral-800',
    softColor: 'text-joy-warning-700 dark:text-joy-warning-200',
    softBg: 'bg-joy-warning-100 dark:bg-joy-warning-800',
    softHoverBg:
      'non-touchscreen:hover:bg-joy-warning-200 dark:non-touchscreen:hover:bg-joy-warning-700',
    softActiveColor:
      '[&]:active:text-joy-warning-800 dark:[&]:active:text-joy-warning-100',
    softActiveBg:
      '[&]:active:bg-joy-warning-300 dark:[&]:active:bg-joy-warning-600',
    softDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    softDisabledBg:
      'disabled:bg-joy-neutral-50 dark:disabled:bg-joy-neutral-800',
    solidColor: 'text-joy-common-white',
    solidBg: 'bg-joy-warning-500',
    solidHoverBg: 'non-touchscreen:hover:bg-joy-warning-600',
    solidActiveBg: '[&]:active:bg-joy-warning-700',
    solidDisabledColor:
      'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
    solidDisabledBg:
      'disabled:bg-joy-neutral-100 dark:disabled:bg-joy-neutral-800',
  },
  focusVisible: 'focus-visible:outline-joy-primary-500',
} as const;
