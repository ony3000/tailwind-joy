import {
  hover,
  focus,
  active,
  disabled,
  toColorClass,
  backgroundColor,
  borderColor,
  textColor,
} from './modifier';

export const baseTokens = {
  primary: {
    plainColor: 'joy-primary-500 dark:joy-primary-300',
    plainBg: '',
    plainBorder: '',
    plainHoverColor: '',
    plainHoverBg: 'joy-primary-100 dark:joy-primary-800',
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: 'joy-primary-200 dark:joy-primary-700',
    plainActiveBorder: '',
    plainDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: 'joy-primary-500 dark:joy-primary-200',
    outlinedBg: '',
    outlinedBorder: 'joy-primary-300 dark:joy-primary-700',
    outlinedHoverColor: '',
    outlinedHoverBg: 'joy-primary-100 dark:joy-primary-800',
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: 'joy-primary-200 dark:joy-primary-700',
    outlinedActiveBorder: '',
    outlinedDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    outlinedDisabledBg: '',
    outlinedDisabledBorder: 'joy-neutral-200 dark:joy-neutral-800',
    softColor: 'joy-primary-700 dark:joy-primary-200',
    softBg: 'joy-primary-100 dark:joy-primary-800',
    softBorder: '',
    softHoverColor: '',
    softHoverBg: 'joy-primary-200 dark:joy-primary-700',
    softHoverBorder: '',
    softActiveColor: 'joy-primary-800 dark:joy-primary-100',
    softActiveBg: 'joy-primary-300 dark:joy-primary-600',
    softActiveBorder: '',
    softDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    softDisabledBg: 'joy-neutral-50 dark:joy-neutral-800',
    softDisabledBorder: '',
    solidColor: 'joy-common-white dark:joy-common-white',
    solidBg: 'joy-primary-500 dark:joy-primary-500',
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: 'joy-primary-600 dark:joy-primary-600',
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: 'joy-primary-700 dark:joy-primary-700',
    solidActiveBorder: '',
    solidDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    solidDisabledBg: 'joy-neutral-100 dark:joy-neutral-800',
    solidDisabledBorder: '',
    mainChannel: 'joy-primary-500 dark:joy-primary-400',
  },
  neutral: {
    plainColor: 'joy-neutral-700 dark:joy-neutral-300',
    plainBg: '',
    plainBorder: '',
    plainHoverColor: 'joy-neutral-900 dark:joy-neutral-300',
    plainHoverBg: 'joy-neutral-100 dark:joy-neutral-800',
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: 'joy-neutral-200 dark:joy-neutral-700',
    plainActiveBorder: '',
    plainDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: 'joy-neutral-700 dark:joy-neutral-200',
    outlinedBg: '',
    outlinedBorder: 'joy-neutral-300 dark:joy-neutral-700',
    outlinedHoverColor: '',
    outlinedHoverBg: 'joy-neutral-100 dark:joy-neutral-800',
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: 'joy-neutral-200 dark:joy-neutral-700',
    outlinedActiveBorder: '',
    outlinedDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    outlinedDisabledBg: '',
    outlinedDisabledBorder: 'joy-neutral-200 dark:joy-neutral-800',
    softColor: 'joy-neutral-700 dark:joy-neutral-200',
    softBg: 'joy-neutral-100 dark:joy-neutral-800',
    softBorder: '',
    softHoverColor: '',
    softHoverBg: 'joy-neutral-200 dark:joy-neutral-700',
    softHoverBorder: '',
    softActiveColor: 'joy-neutral-800 dark:joy-neutral-100',
    softActiveBg: 'joy-neutral-300 dark:joy-neutral-600',
    softActiveBorder: '',
    softDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    softDisabledBg: 'joy-neutral-50 dark:joy-neutral-800',
    softDisabledBorder: '',
    solidColor: 'joy-common-white dark:joy-common-white',
    solidBg: 'joy-neutral-500 dark:joy-neutral-500',
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: 'joy-neutral-600 dark:joy-neutral-600',
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: 'joy-neutral-700 dark:joy-neutral-700',
    solidActiveBorder: '',
    solidDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    solidDisabledBg: 'joy-neutral-100 dark:joy-neutral-800',
    solidDisabledBorder: '',
    mainChannel: 'joy-neutral-500 dark:joy-neutral-400',
  },
  danger: {
    plainColor: 'joy-danger-500 dark:joy-danger-300',
    plainBg: '',
    plainBorder: '',
    plainHoverColor: '',
    plainHoverBg: 'joy-danger-100 dark:joy-danger-800',
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: 'joy-danger-200 dark:joy-danger-700',
    plainActiveBorder: '',
    plainDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: 'joy-danger-500 dark:joy-danger-200',
    outlinedBg: '',
    outlinedBorder: 'joy-danger-300 dark:joy-danger-700',
    outlinedHoverColor: '',
    outlinedHoverBg: 'joy-danger-100 dark:joy-danger-800',
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: 'joy-danger-200 dark:joy-danger-700',
    outlinedActiveBorder: '',
    outlinedDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    outlinedDisabledBg: '',
    outlinedDisabledBorder: 'joy-neutral-200 dark:joy-neutral-800',
    softColor: 'joy-danger-700 dark:joy-danger-200',
    softBg: 'joy-danger-100 dark:joy-danger-800',
    softBorder: '',
    softHoverColor: '',
    softHoverBg: 'joy-danger-200 dark:joy-danger-700',
    softHoverBorder: '',
    softActiveColor: 'joy-danger-800 dark:joy-danger-100',
    softActiveBg: 'joy-danger-300 dark:joy-danger-600',
    softActiveBorder: '',
    softDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    softDisabledBg: 'joy-neutral-50 dark:joy-neutral-800',
    softDisabledBorder: '',
    solidColor: 'joy-common-white dark:joy-common-white',
    solidBg: 'joy-danger-500 dark:joy-danger-500',
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: 'joy-danger-600 dark:joy-danger-600',
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: 'joy-danger-700 dark:joy-danger-700',
    solidActiveBorder: '',
    solidDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    solidDisabledBg: 'joy-neutral-100 dark:joy-neutral-800',
    solidDisabledBorder: '',
    mainChannel: 'joy-danger-500 dark:joy-danger-400',
  },
  success: {
    plainColor: 'joy-success-500 dark:joy-success-300',
    plainBg: '',
    plainBorder: '',
    plainHoverColor: '',
    plainHoverBg: 'joy-success-100 dark:joy-success-800',
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: 'joy-success-200 dark:joy-success-700',
    plainActiveBorder: '',
    plainDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: 'joy-success-500 dark:joy-success-200',
    outlinedBg: '',
    outlinedBorder: 'joy-success-300 dark:joy-success-700',
    outlinedHoverColor: '',
    outlinedHoverBg: 'joy-success-100 dark:joy-success-800',
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: 'joy-success-200 dark:joy-success-700',
    outlinedActiveBorder: '',
    outlinedDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    outlinedDisabledBg: '',
    outlinedDisabledBorder: 'joy-neutral-200 dark:joy-neutral-800',
    softColor: 'joy-success-700 dark:joy-success-200',
    softBg: 'joy-success-100 dark:joy-success-800',
    softBorder: '',
    softHoverColor: '',
    softHoverBg: 'joy-success-200 dark:joy-success-700',
    softHoverBorder: '',
    softActiveColor: 'joy-success-800 dark:joy-success-100',
    softActiveBg: 'joy-success-300 dark:joy-success-600',
    softActiveBorder: '',
    softDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    softDisabledBg: 'joy-neutral-50 dark:joy-neutral-800',
    softDisabledBorder: '',
    solidColor: 'joy-common-white dark:joy-common-white',
    solidBg: 'joy-success-500 dark:joy-success-500',
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: 'joy-success-600 dark:joy-success-600',
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: 'joy-success-700 dark:joy-success-700',
    solidActiveBorder: '',
    solidDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    solidDisabledBg: 'joy-neutral-100 dark:joy-neutral-800',
    solidDisabledBorder: '',
    mainChannel: 'joy-success-500 dark:joy-success-400',
  },
  warning: {
    plainColor: 'joy-warning-500 dark:joy-warning-300',
    plainBg: '',
    plainBorder: '',
    plainHoverColor: '',
    plainHoverBg: 'joy-warning-100 dark:joy-warning-800',
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: 'joy-warning-200 dark:joy-warning-700',
    plainActiveBorder: '',
    plainDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: 'joy-warning-500 dark:joy-warning-200',
    outlinedBg: '',
    outlinedBorder: 'joy-warning-300 dark:joy-warning-700',
    outlinedHoverColor: '',
    outlinedHoverBg: 'joy-warning-100 dark:joy-warning-800',
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: 'joy-warning-200 dark:joy-warning-700',
    outlinedActiveBorder: '',
    outlinedDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    outlinedDisabledBg: '',
    outlinedDisabledBorder: 'joy-neutral-200 dark:joy-neutral-800',
    softColor: 'joy-warning-700 dark:joy-warning-200',
    softBg: 'joy-warning-100 dark:joy-warning-800',
    softBorder: '',
    softHoverColor: '',
    softHoverBg: 'joy-warning-200 dark:joy-warning-700',
    softHoverBorder: '',
    softActiveColor: 'joy-warning-800 dark:joy-warning-100',
    softActiveBg: 'joy-warning-300 dark:joy-warning-600',
    softActiveBorder: '',
    softDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    softDisabledBg: 'joy-neutral-50 dark:joy-neutral-800',
    softDisabledBorder: '',
    solidColor: 'joy-common-white dark:joy-common-white',
    solidBg: 'joy-warning-500 dark:joy-warning-500',
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: 'joy-warning-600 dark:joy-warning-600',
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: 'joy-warning-700 dark:joy-warning-700',
    solidActiveBorder: '',
    solidDisabledColor: 'joy-neutral-400 dark:joy-neutral-500',
    solidDisabledBg: 'joy-neutral-100 dark:joy-neutral-800',
    solidDisabledBorder: '',
    mainChannel: 'joy-warning-500 dark:joy-warning-400',
  },
  text: {
    primary: 'joy-neutral-800 dark:joy-neutral-100',
    secondary: 'joy-neutral-700 dark:joy-neutral-300',
    tertiary: 'joy-neutral-600 dark:joy-neutral-400',
    icon: 'joy-neutral-500 dark:joy-neutral-400',
  },
  background: {
    body: 'joy-common-white dark:joy-common-black',
    surface: 'joy-neutral-50 dark:joy-neutral-900',
    popup: 'joy-common-white dark:joy-common-black',
    level1: 'joy-neutral-100 dark:joy-neutral-800',
    level2: 'joy-neutral-200 dark:joy-neutral-700',
    level3: 'joy-neutral-300 dark:joy-neutral-600',
    tooltip: 'joy-neutral-500 dark:joy-neutral-600',
    backdrop: 'joy-neutral-900/25 dark:joy-neutral-50/25',
  },
  focusVisible: 'joy-primary-500 dark:joy-primary-500',
} as const;

// prettier-ignore
export const colorTokens = {
  primary: {
    plainColor: textColor(baseTokens.primary.plainColor),
    plainBg: '',
    plainBorder: '',
    plainHoverColor: '',
    plainHoverBg: hover(backgroundColor(baseTokens.primary.plainHoverBg)),
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: active(backgroundColor(baseTokens.primary.plainActiveBg)),
    plainActiveBorder: '',
    plainDisabledColor: disabled(textColor(baseTokens.primary.plainDisabledColor)),
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: textColor(baseTokens.primary.outlinedColor),
    outlinedBg: '',
    outlinedBorder: borderColor(baseTokens.primary.outlinedBorder),
    outlinedHoverColor: '',
    outlinedHoverBg: hover(backgroundColor(baseTokens.primary.outlinedHoverBg)),
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: active(backgroundColor(baseTokens.primary.outlinedActiveBg)),
    outlinedActiveBorder: '',
    outlinedDisabledColor: disabled(textColor(baseTokens.primary.outlinedDisabledColor)),
    outlinedDisabledBg: '',
    outlinedDisabledBorder: disabled(borderColor(baseTokens.primary.outlinedDisabledBorder)),
    softColor: textColor(baseTokens.primary.softColor),
    softBg: backgroundColor(baseTokens.primary.softBg),
    softBorder: '',
    softHoverColor: '',
    softHoverBg: hover(backgroundColor(baseTokens.primary.softHoverBg)),
    softHoverBorder: '',
    softActiveColor: active(textColor(baseTokens.primary.softActiveColor)),
    softActiveBg: active(backgroundColor(baseTokens.primary.softActiveBg)),
    softActiveBorder: '',
    softDisabledColor: disabled(textColor(baseTokens.primary.softDisabledColor)),
    softDisabledBg: disabled(backgroundColor(baseTokens.primary.softDisabledBg)),
    softDisabledBorder: '',
    solidColor: textColor(baseTokens.primary.solidColor),
    solidBg: backgroundColor(baseTokens.primary.solidBg),
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: hover(backgroundColor(baseTokens.primary.solidHoverBg)),
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: active(backgroundColor(baseTokens.primary.solidActiveBg)),
    solidActiveBorder: '',
    solidDisabledColor: disabled(textColor(baseTokens.primary.solidDisabledColor)),
    solidDisabledBg: disabled(backgroundColor(baseTokens.primary.solidDisabledBg)),
    solidDisabledBorder: '',
  },
  neutral: {
    plainColor: textColor(baseTokens.neutral.plainColor),
    plainBg: '',
    plainBorder: '',
    plainHoverColor: hover(textColor(baseTokens.neutral.plainHoverColor)),
    plainHoverBg: hover(backgroundColor(baseTokens.neutral.plainHoverBg)),
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: active(backgroundColor(baseTokens.neutral.plainActiveBg)),
    plainActiveBorder: '',
    plainDisabledColor: disabled(textColor(baseTokens.neutral.plainDisabledColor)),
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: textColor(baseTokens.neutral.outlinedColor),
    outlinedBg: '',
    outlinedBorder: borderColor(baseTokens.neutral.outlinedBorder),
    outlinedHoverColor: '',
    outlinedHoverBg: hover(backgroundColor(baseTokens.neutral.outlinedHoverBg)),
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: active(backgroundColor(baseTokens.neutral.outlinedActiveBg)),
    outlinedActiveBorder: '',
    outlinedDisabledColor: disabled(textColor(baseTokens.neutral.outlinedDisabledColor)),
    outlinedDisabledBg: '',
    outlinedDisabledBorder: disabled(borderColor(baseTokens.neutral.outlinedDisabledBorder)),
    softColor: textColor(baseTokens.neutral.softColor),
    softBg: backgroundColor(baseTokens.neutral.softBg),
    softBorder: '',
    softHoverColor: '',
    softHoverBg: hover(backgroundColor(baseTokens.neutral.softHoverBg)),
    softHoverBorder: '',
    softActiveColor: active(textColor(baseTokens.neutral.softActiveColor)),
    softActiveBg: active(backgroundColor(baseTokens.neutral.softActiveBg)),
    softActiveBorder: '',
    softDisabledColor: disabled(textColor(baseTokens.neutral.softDisabledColor)),
    softDisabledBg: disabled(backgroundColor(baseTokens.neutral.softDisabledBg)),
    softDisabledBorder: '',
    solidColor: textColor(baseTokens.neutral.solidColor),
    solidBg: backgroundColor(baseTokens.neutral.solidBg),
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: hover(backgroundColor(baseTokens.neutral.solidHoverBg)),
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: active(backgroundColor(baseTokens.neutral.solidActiveBg)),
    solidActiveBorder: '',
    solidDisabledColor: disabled(textColor(baseTokens.neutral.solidDisabledColor)),
    solidDisabledBg: disabled(backgroundColor(baseTokens.neutral.solidDisabledBg)),
    solidDisabledBorder: '',
  },
  danger: {
    plainColor: textColor(baseTokens.danger.plainColor),
    plainBg: '',
    plainBorder: '',
    plainHoverColor: '',
    plainHoverBg: hover(backgroundColor(baseTokens.danger.plainHoverBg)),
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: active(backgroundColor(baseTokens.danger.plainActiveBg)),
    plainActiveBorder: '',
    plainDisabledColor: disabled(textColor(baseTokens.danger.plainDisabledColor)),
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: textColor(baseTokens.danger.outlinedColor),
    outlinedBg: '',
    outlinedBorder: borderColor(baseTokens.danger.outlinedBorder),
    outlinedHoverColor: '',
    outlinedHoverBg: hover(backgroundColor(baseTokens.danger.outlinedHoverBg)),
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: active(backgroundColor(baseTokens.danger.outlinedActiveBg)),
    outlinedActiveBorder: '',
    outlinedDisabledColor: disabled(textColor(baseTokens.danger.outlinedDisabledColor)),
    outlinedDisabledBg: '',
    outlinedDisabledBorder: disabled(borderColor(baseTokens.danger.outlinedDisabledBorder)),
    softColor: textColor(baseTokens.danger.softColor),
    softBg: backgroundColor(baseTokens.danger.softBg),
    softBorder: '',
    softHoverColor: '',
    softHoverBg: hover(backgroundColor(baseTokens.danger.softHoverBg)),
    softHoverBorder: '',
    softActiveColor: active(textColor(baseTokens.danger.softActiveColor)),
    softActiveBg: active(backgroundColor(baseTokens.danger.softActiveBg)),
    softActiveBorder: '',
    softDisabledColor: disabled(textColor(baseTokens.danger.softDisabledColor)),
    softDisabledBg: disabled(backgroundColor(baseTokens.danger.softDisabledBg)),
    softDisabledBorder: '',
    solidColor: textColor(baseTokens.danger.solidColor),
    solidBg: backgroundColor(baseTokens.danger.solidBg),
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: hover(backgroundColor(baseTokens.danger.solidHoverBg)),
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: active(backgroundColor(baseTokens.danger.solidActiveBg)),
    solidActiveBorder: '',
    solidDisabledColor: disabled(textColor(baseTokens.danger.solidDisabledColor)),
    solidDisabledBg: disabled(backgroundColor(baseTokens.danger.solidDisabledBg)),
    solidDisabledBorder: '',
  },
  success: {
    plainColor: textColor(baseTokens.success.plainColor),
    plainBg: '',
    plainBorder: '',
    plainHoverColor: '',
    plainHoverBg: hover(backgroundColor(baseTokens.success.plainHoverBg)),
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: active(backgroundColor(baseTokens.success.plainActiveBg)),
    plainActiveBorder: '',
    plainDisabledColor: disabled(textColor(baseTokens.success.plainDisabledColor)),
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: textColor(baseTokens.success.outlinedColor),
    outlinedBg: '',
    outlinedBorder: borderColor(baseTokens.success.outlinedBorder),
    outlinedHoverColor: '',
    outlinedHoverBg: hover(backgroundColor(baseTokens.success.outlinedHoverBg)),
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: active(backgroundColor(baseTokens.success.outlinedActiveBg)),
    outlinedActiveBorder: '',
    outlinedDisabledColor: disabled(textColor(baseTokens.success.outlinedDisabledColor)),
    outlinedDisabledBg: '',
    outlinedDisabledBorder: disabled(borderColor(baseTokens.success.outlinedDisabledBorder)),
    softColor: textColor(baseTokens.success.softColor),
    softBg: backgroundColor(baseTokens.success.softBg),
    softBorder: '',
    softHoverColor: '',
    softHoverBg: hover(backgroundColor(baseTokens.success.softHoverBg)),
    softHoverBorder: '',
    softActiveColor: active(textColor(baseTokens.success.softActiveColor)),
    softActiveBg: active(backgroundColor(baseTokens.success.softActiveBg)),
    softActiveBorder: '',
    softDisabledColor: disabled(textColor(baseTokens.success.softDisabledColor)),
    softDisabledBg: disabled(backgroundColor(baseTokens.success.softDisabledBg)),
    softDisabledBorder: '',
    solidColor: textColor(baseTokens.success.solidColor),
    solidBg: backgroundColor(baseTokens.success.solidBg),
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: hover(backgroundColor(baseTokens.success.solidHoverBg)),
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: active(backgroundColor(baseTokens.success.solidActiveBg)),
    solidActiveBorder: '',
    solidDisabledColor: disabled(textColor(baseTokens.success.solidDisabledColor)),
    solidDisabledBg: disabled(backgroundColor(baseTokens.success.solidDisabledBg)),
    solidDisabledBorder: '',
  },
  warning: {
    plainColor: textColor(baseTokens.warning.plainColor),
    plainBg: '',
    plainBorder: '',
    plainHoverColor: '',
    plainHoverBg: hover(backgroundColor(baseTokens.warning.plainHoverBg)),
    plainHoverBorder: '',
    plainActiveColor: '',
    plainActiveBg: active(backgroundColor(baseTokens.warning.plainActiveBg)),
    plainActiveBorder: '',
    plainDisabledColor: disabled(textColor(baseTokens.warning.plainDisabledColor)),
    plainDisabledBg: '',
    plainDisabledBorder: '',
    outlinedColor: textColor(baseTokens.warning.outlinedColor),
    outlinedBg: '',
    outlinedBorder: borderColor(baseTokens.warning.outlinedBorder),
    outlinedHoverColor: '',
    outlinedHoverBg: hover(backgroundColor(baseTokens.warning.outlinedHoverBg)),
    outlinedHoverBorder: '',
    outlinedActiveColor: '',
    outlinedActiveBg: active(backgroundColor(baseTokens.warning.outlinedActiveBg)),
    outlinedActiveBorder: '',
    outlinedDisabledColor: disabled(textColor(baseTokens.warning.outlinedDisabledColor)),
    outlinedDisabledBg: '',
    outlinedDisabledBorder: disabled(borderColor(baseTokens.warning.outlinedDisabledBorder)),
    softColor: textColor(baseTokens.warning.softColor),
    softBg: backgroundColor(baseTokens.warning.softBg),
    softBorder: '',
    softHoverColor: '',
    softHoverBg: hover(backgroundColor(baseTokens.warning.softHoverBg)),
    softHoverBorder: '',
    softActiveColor: active(textColor(baseTokens.warning.softActiveColor)),
    softActiveBg: active(backgroundColor(baseTokens.warning.softActiveBg)),
    softActiveBorder: '',
    softDisabledColor: disabled(textColor(baseTokens.warning.softDisabledColor)),
    softDisabledBg: disabled(backgroundColor(baseTokens.warning.softDisabledBg)),
    softDisabledBorder: '',
    solidColor: textColor(baseTokens.warning.solidColor),
    solidBg: backgroundColor(baseTokens.warning.solidBg),
    solidBorder: '',
    solidHoverColor: '',
    solidHoverBg: hover(backgroundColor(baseTokens.warning.solidHoverBg)),
    solidHoverBorder: '',
    solidActiveColor: '',
    solidActiveBg: active(backgroundColor(baseTokens.warning.solidActiveBg)),
    solidActiveBorder: '',
    solidDisabledColor: disabled(textColor(baseTokens.warning.solidDisabledColor)),
    solidDisabledBg: disabled(backgroundColor(baseTokens.warning.solidDisabledBg)),
    solidDisabledBorder: '',
  },
  text: {
    primary: textColor(baseTokens.text.primary),
    secondary: textColor(baseTokens.text.secondary),
    tertiary: textColor(baseTokens.text.tertiary),
    icon: textColor(baseTokens.text.icon),
  },
  background: {
    body: backgroundColor(baseTokens.background.body),
    surface: backgroundColor(baseTokens.background.surface),
    popup: backgroundColor(baseTokens.background.popup),
    level1: backgroundColor(baseTokens.background.level1),
    level2: backgroundColor(baseTokens.background.level2),
    level3: backgroundColor(baseTokens.background.level3),
    tooltip: backgroundColor(baseTokens.background.tooltip),
    backdrop: backgroundColor(baseTokens.background.backdrop),
  },
  focusVisible: focus(toColorClass(baseTokens.focusVisible, 'outline-')),
};
