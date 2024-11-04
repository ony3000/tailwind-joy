import { disabled } from './modifier';
import { baseTokens, colorTokens } from './tokens';

export const theme = {
  variants: {
    plain: {
      primary: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.primary.plainColor,
          colorTokens.primary.plainBg,
          colorTokens.primary.plainBorder,
        ],
        tokens: {
          color: baseTokens.primary.plainColor,
          backgroundColor: baseTokens.primary.plainBg,
          borderColor: baseTokens.primary.plainBorder,
        },
      },
      neutral: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.neutral.plainColor,
          colorTokens.neutral.plainBg,
          colorTokens.neutral.plainBorder,
        ],
        tokens: {
          color: baseTokens.neutral.plainColor,
          backgroundColor: baseTokens.neutral.plainBg,
          borderColor: baseTokens.neutral.plainBorder,
        },
      },
      danger: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.danger.plainColor,
          colorTokens.danger.plainBg,
          colorTokens.danger.plainBorder,
        ],
        tokens: {
          color: baseTokens.danger.plainColor,
          backgroundColor: baseTokens.danger.plainBg,
          borderColor: baseTokens.danger.plainBorder,
        },
      },
      success: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.success.plainColor,
          colorTokens.success.plainBg,
          colorTokens.success.plainBorder,
        ],
        tokens: {
          color: baseTokens.success.plainColor,
          backgroundColor: baseTokens.success.plainBg,
          borderColor: baseTokens.success.plainBorder,
        },
      },
      warning: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.warning.plainColor,
          colorTokens.warning.plainBg,
          colorTokens.warning.plainBorder,
        ],
        tokens: {
          color: baseTokens.warning.plainColor,
          backgroundColor: baseTokens.warning.plainBg,
          borderColor: baseTokens.warning.plainBorder,
        },
      },
    },
    plainHover: {
      primary: {
        className: [
          colorTokens.primary.plainHoverColor,
          colorTokens.primary.plainHoverBg,
          colorTokens.primary.plainHoverBorder,
        ],
        tokens: {
          color: baseTokens.primary.plainHoverColor,
          backgroundColor: baseTokens.primary.plainHoverBg,
          borderColor: baseTokens.primary.plainHoverBorder,
        },
      },
      neutral: {
        className: [
          colorTokens.neutral.plainHoverColor,
          colorTokens.neutral.plainHoverBg,
          colorTokens.neutral.plainHoverBorder,
        ],
        tokens: {
          color: baseTokens.neutral.plainHoverColor,
          backgroundColor: baseTokens.neutral.plainHoverBg,
          borderColor: baseTokens.neutral.plainHoverBorder,
        },
      },
      danger: {
        className: [
          colorTokens.danger.plainHoverColor,
          colorTokens.danger.plainHoverBg,
          colorTokens.danger.plainHoverBorder,
        ],
        tokens: {
          color: baseTokens.danger.plainHoverColor,
          backgroundColor: baseTokens.danger.plainHoverBg,
          borderColor: baseTokens.danger.plainHoverBorder,
        },
      },
      success: {
        className: [
          colorTokens.success.plainHoverColor,
          colorTokens.success.plainHoverBg,
          colorTokens.success.plainHoverBorder,
        ],
        tokens: {
          color: baseTokens.success.plainHoverColor,
          backgroundColor: baseTokens.success.plainHoverBg,
          borderColor: baseTokens.success.plainHoverBorder,
        },
      },
      warning: {
        className: [
          colorTokens.warning.plainHoverColor,
          colorTokens.warning.plainHoverBg,
          colorTokens.warning.plainHoverBorder,
        ],
        tokens: {
          color: baseTokens.warning.plainHoverColor,
          backgroundColor: baseTokens.warning.plainHoverBg,
          borderColor: baseTokens.warning.plainHoverBorder,
        },
      },
    },
    plainActive: {
      primary: {
        className: [
          colorTokens.primary.plainActiveColor,
          colorTokens.primary.plainActiveBg,
          colorTokens.primary.plainActiveBorder,
        ],
        tokens: {
          color: baseTokens.primary.plainActiveColor,
          backgroundColor: baseTokens.primary.plainActiveBg,
          borderColor: baseTokens.primary.plainActiveBorder,
        },
      },
      neutral: {
        className: [
          colorTokens.neutral.plainActiveColor,
          colorTokens.neutral.plainActiveBg,
          colorTokens.neutral.plainActiveBorder,
        ],
        tokens: {
          color: baseTokens.neutral.plainActiveColor,
          backgroundColor: baseTokens.neutral.plainActiveBg,
          borderColor: baseTokens.neutral.plainActiveBorder,
        },
      },
      danger: {
        className: [
          colorTokens.danger.plainActiveColor,
          colorTokens.danger.plainActiveBg,
          colorTokens.danger.plainActiveBorder,
        ],
        tokens: {
          color: baseTokens.danger.plainActiveColor,
          backgroundColor: baseTokens.danger.plainActiveBg,
          borderColor: baseTokens.danger.plainActiveBorder,
        },
      },
      success: {
        className: [
          colorTokens.success.plainActiveColor,
          colorTokens.success.plainActiveBg,
          colorTokens.success.plainActiveBorder,
        ],
        tokens: {
          color: baseTokens.success.plainActiveColor,
          backgroundColor: baseTokens.success.plainActiveBg,
          borderColor: baseTokens.success.plainActiveBorder,
        },
      },
      warning: {
        className: [
          colorTokens.warning.plainActiveColor,
          colorTokens.warning.plainActiveBg,
          colorTokens.warning.plainActiveBorder,
        ],
        tokens: {
          color: baseTokens.warning.plainActiveColor,
          backgroundColor: baseTokens.warning.plainActiveBg,
          borderColor: baseTokens.warning.plainActiveBorder,
        },
      },
    },
    plainDisabled: {
      primary: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.primary.plainDisabledColor,
          colorTokens.primary.plainDisabledBg,
          colorTokens.primary.plainDisabledBorder,
        ],
        tokens: {
          color: baseTokens.primary.plainDisabledColor,
          backgroundColor: baseTokens.primary.plainDisabledBg,
          borderColor: baseTokens.primary.plainDisabledBorder,
        },
      },
      neutral: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.neutral.plainDisabledColor,
          colorTokens.neutral.plainDisabledBg,
          colorTokens.neutral.plainDisabledBorder,
        ],
        tokens: {
          color: baseTokens.neutral.plainDisabledColor,
          backgroundColor: baseTokens.neutral.plainDisabledBg,
          borderColor: baseTokens.neutral.plainDisabledBorder,
        },
      },
      danger: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.danger.plainDisabledColor,
          colorTokens.danger.plainDisabledBg,
          colorTokens.danger.plainDisabledBorder,
        ],
        tokens: {
          color: baseTokens.danger.plainDisabledColor,
          backgroundColor: baseTokens.danger.plainDisabledBg,
          borderColor: baseTokens.danger.plainDisabledBorder,
        },
      },
      success: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.success.plainDisabledColor,
          colorTokens.success.plainDisabledBg,
          colorTokens.success.plainDisabledBorder,
        ],
        tokens: {
          color: baseTokens.success.plainDisabledColor,
          backgroundColor: baseTokens.success.plainDisabledBg,
          borderColor: baseTokens.success.plainDisabledBorder,
        },
      },
      warning: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.warning.plainDisabledColor,
          colorTokens.warning.plainDisabledBg,
          colorTokens.warning.plainDisabledBorder,
        ],
        tokens: {
          color: baseTokens.warning.plainDisabledColor,
          backgroundColor: baseTokens.warning.plainDisabledBg,
          borderColor: baseTokens.warning.plainDisabledBorder,
        },
      },
    },
    outlined: {
      primary: {
        className: [
          '[--variant-borderWidth:1px]',
          '[border-width:var(--variant-borderWidth)] border-solid',
          colorTokens.primary.outlinedColor,
          colorTokens.primary.outlinedBg,
          colorTokens.primary.outlinedBorder,
        ],
        tokens: {
          color: baseTokens.primary.outlinedColor,
          backgroundColor: baseTokens.primary.outlinedBg,
          borderColor: baseTokens.primary.outlinedBorder,
        },
      },
      neutral: {
        className: [
          '[--variant-borderWidth:1px]',
          '[border-width:var(--variant-borderWidth)] border-solid',
          colorTokens.neutral.outlinedColor,
          colorTokens.neutral.outlinedBg,
          colorTokens.neutral.outlinedBorder,
        ],
        tokens: {
          color: baseTokens.neutral.outlinedColor,
          backgroundColor: baseTokens.neutral.outlinedBg,
          borderColor: baseTokens.neutral.outlinedBorder,
        },
      },
      danger: {
        className: [
          '[--variant-borderWidth:1px]',
          '[border-width:var(--variant-borderWidth)] border-solid',
          colorTokens.danger.outlinedColor,
          colorTokens.danger.outlinedBg,
          colorTokens.danger.outlinedBorder,
        ],
        tokens: {
          color: baseTokens.danger.outlinedColor,
          backgroundColor: baseTokens.danger.outlinedBg,
          borderColor: baseTokens.danger.outlinedBorder,
        },
      },
      success: {
        className: [
          '[--variant-borderWidth:1px]',
          '[border-width:var(--variant-borderWidth)] border-solid',
          colorTokens.success.outlinedColor,
          colorTokens.success.outlinedBg,
          colorTokens.success.outlinedBorder,
        ],
        tokens: {
          color: baseTokens.success.outlinedColor,
          backgroundColor: baseTokens.success.outlinedBg,
          borderColor: baseTokens.success.outlinedBorder,
        },
      },
      warning: {
        className: [
          '[--variant-borderWidth:1px]',
          '[border-width:var(--variant-borderWidth)] border-solid',
          colorTokens.warning.outlinedColor,
          colorTokens.warning.outlinedBg,
          colorTokens.warning.outlinedBorder,
        ],
        tokens: {
          color: baseTokens.warning.outlinedColor,
          backgroundColor: baseTokens.warning.outlinedBg,
          borderColor: baseTokens.warning.outlinedBorder,
        },
      },
    },
    outlinedHover: {
      primary: {
        className: [
          colorTokens.primary.outlinedHoverColor,
          colorTokens.primary.outlinedHoverBg,
          colorTokens.primary.outlinedHoverBorder,
        ],
        tokens: {
          color: baseTokens.primary.outlinedHoverColor,
          backgroundColor: baseTokens.primary.outlinedHoverBg,
          borderColor: baseTokens.primary.outlinedHoverBorder,
        },
      },
      neutral: {
        className: [
          colorTokens.neutral.outlinedHoverColor,
          colorTokens.neutral.outlinedHoverBg,
          colorTokens.neutral.outlinedHoverBorder,
        ],
        tokens: {
          color: baseTokens.neutral.outlinedHoverColor,
          backgroundColor: baseTokens.neutral.outlinedHoverBg,
          borderColor: baseTokens.neutral.outlinedHoverBorder,
        },
      },
      danger: {
        className: [
          colorTokens.danger.outlinedHoverColor,
          colorTokens.danger.outlinedHoverBg,
          colorTokens.danger.outlinedHoverBorder,
        ],
        tokens: {
          color: baseTokens.danger.outlinedHoverColor,
          backgroundColor: baseTokens.danger.outlinedHoverBg,
          borderColor: baseTokens.danger.outlinedHoverBorder,
        },
      },
      success: {
        className: [
          colorTokens.success.outlinedHoverColor,
          colorTokens.success.outlinedHoverBg,
          colorTokens.success.outlinedHoverBorder,
        ],
        tokens: {
          color: baseTokens.success.outlinedHoverColor,
          backgroundColor: baseTokens.success.outlinedHoverBg,
          borderColor: baseTokens.success.outlinedHoverBorder,
        },
      },
      warning: {
        className: [
          colorTokens.warning.outlinedHoverColor,
          colorTokens.warning.outlinedHoverBg,
          colorTokens.warning.outlinedHoverBorder,
        ],
        tokens: {
          color: baseTokens.warning.outlinedHoverColor,
          backgroundColor: baseTokens.warning.outlinedHoverBg,
          borderColor: baseTokens.warning.outlinedHoverBorder,
        },
      },
    },
    outlinedActive: {
      primary: {
        className: [
          colorTokens.primary.outlinedActiveColor,
          colorTokens.primary.outlinedActiveBg,
          colorTokens.primary.outlinedActiveBorder,
        ],
        tokens: {
          color: baseTokens.primary.outlinedActiveColor,
          backgroundColor: baseTokens.primary.outlinedActiveBg,
          borderColor: baseTokens.primary.outlinedActiveBorder,
        },
      },
      neutral: {
        className: [
          colorTokens.neutral.outlinedActiveColor,
          colorTokens.neutral.outlinedActiveBg,
          colorTokens.neutral.outlinedActiveBorder,
        ],
        tokens: {
          color: baseTokens.neutral.outlinedActiveColor,
          backgroundColor: baseTokens.neutral.outlinedActiveBg,
          borderColor: baseTokens.neutral.outlinedActiveBorder,
        },
      },
      danger: {
        className: [
          colorTokens.danger.outlinedActiveColor,
          colorTokens.danger.outlinedActiveBg,
          colorTokens.danger.outlinedActiveBorder,
        ],
        tokens: {
          color: baseTokens.danger.outlinedActiveColor,
          backgroundColor: baseTokens.danger.outlinedActiveBg,
          borderColor: baseTokens.danger.outlinedActiveBorder,
        },
      },
      success: {
        className: [
          colorTokens.success.outlinedActiveColor,
          colorTokens.success.outlinedActiveBg,
          colorTokens.success.outlinedActiveBorder,
        ],
        tokens: {
          color: baseTokens.success.outlinedActiveColor,
          backgroundColor: baseTokens.success.outlinedActiveBg,
          borderColor: baseTokens.success.outlinedActiveBorder,
        },
      },
      warning: {
        className: [
          colorTokens.warning.outlinedActiveColor,
          colorTokens.warning.outlinedActiveBg,
          colorTokens.warning.outlinedActiveBorder,
        ],
        tokens: {
          color: baseTokens.warning.outlinedActiveColor,
          backgroundColor: baseTokens.warning.outlinedActiveBg,
          borderColor: baseTokens.warning.outlinedActiveBorder,
        },
      },
    },
    outlinedDisabled: {
      primary: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.primary.outlinedDisabledColor,
          colorTokens.primary.outlinedDisabledBg,
          colorTokens.primary.outlinedDisabledBorder,
        ],
        tokens: {
          color: baseTokens.primary.outlinedDisabledColor,
          backgroundColor: baseTokens.primary.outlinedDisabledBg,
          borderColor: baseTokens.primary.outlinedDisabledBorder,
        },
      },
      neutral: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.neutral.outlinedDisabledColor,
          colorTokens.neutral.outlinedDisabledBg,
          colorTokens.neutral.outlinedDisabledBorder,
        ],
        tokens: {
          color: baseTokens.neutral.outlinedDisabledColor,
          backgroundColor: baseTokens.neutral.outlinedDisabledBg,
          borderColor: baseTokens.neutral.outlinedDisabledBorder,
        },
      },
      danger: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.danger.outlinedDisabledColor,
          colorTokens.danger.outlinedDisabledBg,
          colorTokens.danger.outlinedDisabledBorder,
        ],
        tokens: {
          color: baseTokens.danger.outlinedDisabledColor,
          backgroundColor: baseTokens.danger.outlinedDisabledBg,
          borderColor: baseTokens.danger.outlinedDisabledBorder,
        },
      },
      success: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.success.outlinedDisabledColor,
          colorTokens.success.outlinedDisabledBg,
          colorTokens.success.outlinedDisabledBorder,
        ],
        tokens: {
          color: baseTokens.success.outlinedDisabledColor,
          backgroundColor: baseTokens.success.outlinedDisabledBg,
          borderColor: baseTokens.success.outlinedDisabledBorder,
        },
      },
      warning: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.warning.outlinedDisabledColor,
          colorTokens.warning.outlinedDisabledBg,
          colorTokens.warning.outlinedDisabledBorder,
        ],
        tokens: {
          color: baseTokens.warning.outlinedDisabledColor,
          backgroundColor: baseTokens.warning.outlinedDisabledBg,
          borderColor: baseTokens.warning.outlinedDisabledBorder,
        },
      },
    },
    soft: {
      primary: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.primary.softColor,
          colorTokens.primary.softBg,
          colorTokens.primary.softBorder,
        ],
        tokens: {
          color: baseTokens.primary.softColor,
          backgroundColor: baseTokens.primary.softBg,
          borderColor: baseTokens.primary.softBorder,
        },
      },
      neutral: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.neutral.softColor,
          colorTokens.neutral.softBg,
          colorTokens.neutral.softBorder,
        ],
        tokens: {
          color: baseTokens.neutral.softColor,
          backgroundColor: baseTokens.neutral.softBg,
          borderColor: baseTokens.neutral.softBorder,
        },
      },
      danger: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.danger.softColor,
          colorTokens.danger.softBg,
          colorTokens.danger.softBorder,
        ],
        tokens: {
          color: baseTokens.danger.softColor,
          backgroundColor: baseTokens.danger.softBg,
          borderColor: baseTokens.danger.softBorder,
        },
      },
      success: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.success.softColor,
          colorTokens.success.softBg,
          colorTokens.success.softBorder,
        ],
        tokens: {
          color: baseTokens.success.softColor,
          backgroundColor: baseTokens.success.softBg,
          borderColor: baseTokens.success.softBorder,
        },
      },
      warning: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.warning.softColor,
          colorTokens.warning.softBg,
          colorTokens.warning.softBorder,
        ],
        tokens: {
          color: baseTokens.warning.softColor,
          backgroundColor: baseTokens.warning.softBg,
          borderColor: baseTokens.warning.softBorder,
        },
      },
    },
    softHover: {
      primary: {
        className: [
          colorTokens.primary.softHoverColor,
          colorTokens.primary.softHoverBg,
          colorTokens.primary.softHoverBorder,
        ],
        tokens: {
          color: baseTokens.primary.softHoverColor,
          backgroundColor: baseTokens.primary.softHoverBg,
          borderColor: baseTokens.primary.softHoverBorder,
        },
      },
      neutral: {
        className: [
          colorTokens.neutral.softHoverColor,
          colorTokens.neutral.softHoverBg,
          colorTokens.neutral.softHoverBorder,
        ],
        tokens: {
          color: baseTokens.neutral.softHoverColor,
          backgroundColor: baseTokens.neutral.softHoverBg,
          borderColor: baseTokens.neutral.softHoverBorder,
        },
      },
      danger: {
        className: [
          colorTokens.danger.softHoverColor,
          colorTokens.danger.softHoverBg,
          colorTokens.danger.softHoverBorder,
        ],
        tokens: {
          color: baseTokens.danger.softHoverColor,
          backgroundColor: baseTokens.danger.softHoverBg,
          borderColor: baseTokens.danger.softHoverBorder,
        },
      },
      success: {
        className: [
          colorTokens.success.softHoverColor,
          colorTokens.success.softHoverBg,
          colorTokens.success.softHoverBorder,
        ],
        tokens: {
          color: baseTokens.success.softHoverColor,
          backgroundColor: baseTokens.success.softHoverBg,
          borderColor: baseTokens.success.softHoverBorder,
        },
      },
      warning: {
        className: [
          colorTokens.warning.softHoverColor,
          colorTokens.warning.softHoverBg,
          colorTokens.warning.softHoverBorder,
        ],
        tokens: {
          color: baseTokens.warning.softHoverColor,
          backgroundColor: baseTokens.warning.softHoverBg,
          borderColor: baseTokens.warning.softHoverBorder,
        },
      },
    },
    softActive: {
      primary: {
        className: [
          colorTokens.primary.softActiveColor,
          colorTokens.primary.softActiveBg,
          colorTokens.primary.softActiveBorder,
        ],
        tokens: {
          color: baseTokens.primary.softActiveColor,
          backgroundColor: baseTokens.primary.softActiveBg,
          borderColor: baseTokens.primary.softActiveBorder,
        },
      },
      neutral: {
        className: [
          colorTokens.neutral.softActiveColor,
          colorTokens.neutral.softActiveBg,
          colorTokens.neutral.softActiveBorder,
        ],
        tokens: {
          color: baseTokens.neutral.softActiveColor,
          backgroundColor: baseTokens.neutral.softActiveBg,
          borderColor: baseTokens.neutral.softActiveBorder,
        },
      },
      danger: {
        className: [
          colorTokens.danger.softActiveColor,
          colorTokens.danger.softActiveBg,
          colorTokens.danger.softActiveBorder,
        ],
        tokens: {
          color: baseTokens.danger.softActiveColor,
          backgroundColor: baseTokens.danger.softActiveBg,
          borderColor: baseTokens.danger.softActiveBorder,
        },
      },
      success: {
        className: [
          colorTokens.success.softActiveColor,
          colorTokens.success.softActiveBg,
          colorTokens.success.softActiveBorder,
        ],
        tokens: {
          color: baseTokens.success.softActiveColor,
          backgroundColor: baseTokens.success.softActiveBg,
          borderColor: baseTokens.success.softActiveBorder,
        },
      },
      warning: {
        className: [
          colorTokens.warning.softActiveColor,
          colorTokens.warning.softActiveBg,
          colorTokens.warning.softActiveBorder,
        ],
        tokens: {
          color: baseTokens.warning.softActiveColor,
          backgroundColor: baseTokens.warning.softActiveBg,
          borderColor: baseTokens.warning.softActiveBorder,
        },
      },
    },
    softDisabled: {
      primary: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.primary.softDisabledColor,
          colorTokens.primary.softDisabledBg,
          colorTokens.primary.softDisabledBorder,
        ],
        tokens: {
          color: baseTokens.primary.softDisabledColor,
          backgroundColor: baseTokens.primary.softDisabledBg,
          borderColor: baseTokens.primary.softDisabledBorder,
        },
      },
      neutral: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.neutral.softDisabledColor,
          colorTokens.neutral.softDisabledBg,
          colorTokens.neutral.softDisabledBorder,
        ],
        tokens: {
          color: baseTokens.neutral.softDisabledColor,
          backgroundColor: baseTokens.neutral.softDisabledBg,
          borderColor: baseTokens.neutral.softDisabledBorder,
        },
      },
      danger: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.danger.softDisabledColor,
          colorTokens.danger.softDisabledBg,
          colorTokens.danger.softDisabledBorder,
        ],
        tokens: {
          color: baseTokens.danger.softDisabledColor,
          backgroundColor: baseTokens.danger.softDisabledBg,
          borderColor: baseTokens.danger.softDisabledBorder,
        },
      },
      success: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.success.softDisabledColor,
          colorTokens.success.softDisabledBg,
          colorTokens.success.softDisabledBorder,
        ],
        tokens: {
          color: baseTokens.success.softDisabledColor,
          backgroundColor: baseTokens.success.softDisabledBg,
          borderColor: baseTokens.success.softDisabledBorder,
        },
      },
      warning: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.warning.softDisabledColor,
          colorTokens.warning.softDisabledBg,
          colorTokens.warning.softDisabledBorder,
        ],
        tokens: {
          color: baseTokens.warning.softDisabledColor,
          backgroundColor: baseTokens.warning.softDisabledBg,
          borderColor: baseTokens.warning.softDisabledBorder,
        },
      },
    },
    solid: {
      primary: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.primary.solidColor,
          colorTokens.primary.solidBg,
          colorTokens.primary.solidBorder,
        ],
        tokens: {
          color: baseTokens.primary.solidColor,
          backgroundColor: baseTokens.primary.solidBg,
          borderColor: baseTokens.primary.solidBorder,
        },
      },
      neutral: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.neutral.solidColor,
          colorTokens.neutral.solidBg,
          colorTokens.neutral.solidBorder,
        ],
        tokens: {
          color: baseTokens.neutral.solidColor,
          backgroundColor: baseTokens.neutral.solidBg,
          borderColor: baseTokens.neutral.solidBorder,
        },
      },
      danger: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.danger.solidColor,
          colorTokens.danger.solidBg,
          colorTokens.danger.solidBorder,
        ],
        tokens: {
          color: baseTokens.danger.solidColor,
          backgroundColor: baseTokens.danger.solidBg,
          borderColor: baseTokens.danger.solidBorder,
        },
      },
      success: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.success.solidColor,
          colorTokens.success.solidBg,
          colorTokens.success.solidBorder,
        ],
        tokens: {
          color: baseTokens.success.solidColor,
          backgroundColor: baseTokens.success.solidBg,
          borderColor: baseTokens.success.solidBorder,
        },
      },
      warning: {
        className: [
          '[--variant-borderWidth:0px]',
          colorTokens.warning.solidColor,
          colorTokens.warning.solidBg,
          colorTokens.warning.solidBorder,
        ],
        tokens: {
          color: baseTokens.warning.solidColor,
          backgroundColor: baseTokens.warning.solidBg,
          borderColor: baseTokens.warning.solidBorder,
        },
      },
    },
    solidHover: {
      primary: {
        className: [
          colorTokens.primary.solidHoverColor,
          colorTokens.primary.solidHoverBg,
          colorTokens.primary.solidHoverBorder,
        ],
        tokens: {
          color: baseTokens.primary.solidHoverColor,
          backgroundColor: baseTokens.primary.solidHoverBg,
          borderColor: baseTokens.primary.solidHoverBorder,
        },
      },
      neutral: {
        className: [
          colorTokens.neutral.solidHoverColor,
          colorTokens.neutral.solidHoverBg,
          colorTokens.neutral.solidHoverBorder,
        ],
        tokens: {
          color: baseTokens.neutral.solidHoverColor,
          backgroundColor: baseTokens.neutral.solidHoverBg,
          borderColor: baseTokens.neutral.solidHoverBorder,
        },
      },
      danger: {
        className: [
          colorTokens.danger.solidHoverColor,
          colorTokens.danger.solidHoverBg,
          colorTokens.danger.solidHoverBorder,
        ],
        tokens: {
          color: baseTokens.danger.solidHoverColor,
          backgroundColor: baseTokens.danger.solidHoverBg,
          borderColor: baseTokens.danger.solidHoverBorder,
        },
      },
      success: {
        className: [
          colorTokens.success.solidHoverColor,
          colorTokens.success.solidHoverBg,
          colorTokens.success.solidHoverBorder,
        ],
        tokens: {
          color: baseTokens.success.solidHoverColor,
          backgroundColor: baseTokens.success.solidHoverBg,
          borderColor: baseTokens.success.solidHoverBorder,
        },
      },
      warning: {
        className: [
          colorTokens.warning.solidHoverColor,
          colorTokens.warning.solidHoverBg,
          colorTokens.warning.solidHoverBorder,
        ],
        tokens: {
          color: baseTokens.warning.solidHoverColor,
          backgroundColor: baseTokens.warning.solidHoverBg,
          borderColor: baseTokens.warning.solidHoverBorder,
        },
      },
    },
    solidActive: {
      primary: {
        className: [
          colorTokens.primary.solidActiveColor,
          colorTokens.primary.solidActiveBg,
          colorTokens.primary.solidActiveBorder,
        ],
        tokens: {
          color: baseTokens.primary.solidActiveColor,
          backgroundColor: baseTokens.primary.solidActiveBg,
          borderColor: baseTokens.primary.solidActiveBorder,
        },
      },
      neutral: {
        className: [
          colorTokens.neutral.solidActiveColor,
          colorTokens.neutral.solidActiveBg,
          colorTokens.neutral.solidActiveBorder,
        ],
        tokens: {
          color: baseTokens.neutral.solidActiveColor,
          backgroundColor: baseTokens.neutral.solidActiveBg,
          borderColor: baseTokens.neutral.solidActiveBorder,
        },
      },
      danger: {
        className: [
          colorTokens.danger.solidActiveColor,
          colorTokens.danger.solidActiveBg,
          colorTokens.danger.solidActiveBorder,
        ],
        tokens: {
          color: baseTokens.danger.solidActiveColor,
          backgroundColor: baseTokens.danger.solidActiveBg,
          borderColor: baseTokens.danger.solidActiveBorder,
        },
      },
      success: {
        className: [
          colorTokens.success.solidActiveColor,
          colorTokens.success.solidActiveBg,
          colorTokens.success.solidActiveBorder,
        ],
        tokens: {
          color: baseTokens.success.solidActiveColor,
          backgroundColor: baseTokens.success.solidActiveBg,
          borderColor: baseTokens.success.solidActiveBorder,
        },
      },
      warning: {
        className: [
          colorTokens.warning.solidActiveColor,
          colorTokens.warning.solidActiveBg,
          colorTokens.warning.solidActiveBorder,
        ],
        tokens: {
          color: baseTokens.warning.solidActiveColor,
          backgroundColor: baseTokens.warning.solidActiveBg,
          borderColor: baseTokens.warning.solidActiveBorder,
        },
      },
    },
    solidDisabled: {
      primary: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.primary.solidDisabledColor,
          colorTokens.primary.solidDisabledBg,
          colorTokens.primary.solidDisabledBorder,
        ],
        tokens: {
          color: baseTokens.primary.solidDisabledColor,
          backgroundColor: baseTokens.primary.solidDisabledBg,
          borderColor: baseTokens.primary.solidDisabledBorder,
        },
      },
      neutral: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.neutral.solidDisabledColor,
          colorTokens.neutral.solidDisabledBg,
          colorTokens.neutral.solidDisabledBorder,
        ],
        tokens: {
          color: baseTokens.neutral.solidDisabledColor,
          backgroundColor: baseTokens.neutral.solidDisabledBg,
          borderColor: baseTokens.neutral.solidDisabledBorder,
        },
      },
      danger: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.danger.solidDisabledColor,
          colorTokens.danger.solidDisabledBg,
          colorTokens.danger.solidDisabledBorder,
        ],
        tokens: {
          color: baseTokens.danger.solidDisabledColor,
          backgroundColor: baseTokens.danger.solidDisabledBg,
          borderColor: baseTokens.danger.solidDisabledBorder,
        },
      },
      success: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.success.solidDisabledColor,
          colorTokens.success.solidDisabledBg,
          colorTokens.success.solidDisabledBorder,
        ],
        tokens: {
          color: baseTokens.success.solidDisabledColor,
          backgroundColor: baseTokens.success.solidDisabledBg,
          borderColor: baseTokens.success.solidDisabledBorder,
        },
      },
      warning: {
        className: [
          disabled(
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ),
          colorTokens.warning.solidDisabledColor,
          colorTokens.warning.solidDisabledBg,
          colorTokens.warning.solidDisabledBorder,
        ],
        tokens: {
          color: baseTokens.warning.solidDisabledColor,
          backgroundColor: baseTokens.warning.solidDisabledBg,
          borderColor: baseTokens.warning.solidDisabledBorder,
        },
      },
    },
  },
  typography: {
    h1: {
      className: [
        'font-[var(--joy-fontWeight-xl,700)]',
        'text-[length:var(--joy-fontSize-xl4,2.25rem)]',
        '[line-height:var(--joy-lineHeight-xs,1.33334)]',
        'tracking-[-0.025em]',
        colorTokens.text.primary,
      ],
      values: {
        fontWeight: 'var(--joy-fontWeight-xl,700)',
        fontSize: 'var(--joy-fontSize-xl4,2.25rem)',
        lineHeight: 'var(--joy-lineHeight-xs,1.33334)',
        letterSpacing: '-0.025em',
      },
      tokens: {
        color: baseTokens.text.primary,
      },
    },
    h2: {
      className: [
        'font-[var(--joy-fontWeight-xl,700)]',
        'text-[length:var(--joy-fontSize-xl3,1.875rem)]',
        '[line-height:var(--joy-lineHeight-xs,1.33334)]',
        'tracking-[-0.025em]',
        colorTokens.text.primary,
      ],
      values: {
        fontWeight: 'var(--joy-fontWeight-xl,700)',
        fontSize: 'var(--joy-fontSize-xl3,1.875rem)',
        lineHeight: 'var(--joy-lineHeight-xs,1.33334)',
        letterSpacing: '-0.025em',
      },
      tokens: {
        color: baseTokens.text.primary,
      },
    },
    h3: {
      className: [
        'font-[var(--joy-fontWeight-lg,600)]',
        'text-[length:var(--joy-fontSize-xl2,1.5rem)]',
        '[line-height:var(--joy-lineHeight-xs,1.33334)]',
        'tracking-[-0.025em]',
        colorTokens.text.primary,
      ],
      values: {
        fontWeight: 'var(--joy-fontWeight-lg,600)',
        fontSize: 'var(--joy-fontSize-xl2,1.5rem)',
        lineHeight: 'var(--joy-lineHeight-xs,1.33334)',
        letterSpacing: '-0.025em',
      },
      tokens: {
        color: baseTokens.text.primary,
      },
    },
    h4: {
      className: [
        'font-[var(--joy-fontWeight-lg,600)]',
        'text-[length:var(--joy-fontSize-xl,1.25rem)]',
        '[line-height:var(--joy-lineHeight-md,1.5)]',
        'tracking-[-0.025em]',
        colorTokens.text.primary,
      ],
      values: {
        fontWeight: 'var(--joy-fontWeight-lg,600)',
        fontSize: 'var(--joy-fontSize-xl,1.25rem)',
        lineHeight: 'var(--joy-lineHeight-md,1.5)',
        letterSpacing: '-0.025em',
      },
      tokens: {
        color: baseTokens.text.primary,
      },
    },
    'title-lg': {
      className: [
        'font-[var(--joy-fontWeight-lg,600)]',
        'text-[length:var(--joy-fontSize-lg,1.125rem)]',
        '[line-height:var(--joy-lineHeight-xs,1.33334)]',
        colorTokens.text.primary,
      ],
      values: {
        fontWeight: 'var(--joy-fontWeight-lg,600)',
        fontSize: 'var(--joy-fontSize-lg,1.125rem)',
        lineHeight: 'var(--joy-lineHeight-xs,1.33334)',
        letterSpacing: undefined,
      },
      tokens: {
        color: baseTokens.text.primary,
      },
    },
    'title-md': {
      className: [
        'font-[var(--joy-fontWeight-md,500)]',
        'text-[length:var(--joy-fontSize-md,1rem)]',
        '[line-height:var(--joy-lineHeight-md,1.5)]',
        colorTokens.text.primary,
      ],
      values: {
        fontWeight: 'var(--joy-fontWeight-md,500)',
        fontSize: 'var(--joy-fontSize-md,1rem)',
        lineHeight: 'var(--joy-lineHeight-md,1.5)',
        letterSpacing: undefined,
      },
      tokens: {
        color: baseTokens.text.primary,
      },
    },
    'title-sm': {
      className: [
        'font-[var(--joy-fontWeight-md,500)]',
        'text-[length:var(--joy-fontSize-sm,0.875rem)]',
        '[line-height:var(--joy-lineHeight-sm,1.42858)]',
        colorTokens.text.primary,
      ],
      values: {
        fontWeight: 'var(--joy-fontWeight-md,500)',
        fontSize: 'var(--joy-fontSize-sm,0.875rem)',
        lineHeight: 'var(--joy-lineHeight-sm,1.42858)',
        letterSpacing: undefined,
      },
      tokens: {
        color: baseTokens.text.primary,
      },
    },
    'body-lg': {
      className: [
        'text-[length:var(--joy-fontSize-lg,1.125rem)]',
        '[line-height:var(--joy-lineHeight-md,1.5)]',
        colorTokens.text.secondary,
      ],
      values: {
        fontWeight: undefined,
        fontSize: 'var(--joy-fontSize-lg,1.125rem)',
        lineHeight: 'var(--joy-lineHeight-md,1.5)',
        letterSpacing: undefined,
      },
      tokens: {
        color: baseTokens.text.secondary,
      },
    },
    'body-md': {
      className: [
        'text-[length:var(--joy-fontSize-md,1rem)]',
        '[line-height:var(--joy-lineHeight-md,1.5)]',
        colorTokens.text.secondary,
      ],
      values: {
        fontWeight: undefined,
        fontSize: 'var(--joy-fontSize-md,1rem)',
        lineHeight: 'var(--joy-lineHeight-md,1.5)',
        letterSpacing: undefined,
      },
      tokens: {
        color: baseTokens.text.secondary,
      },
    },
    'body-sm': {
      className: [
        'text-[length:var(--joy-fontSize-sm,0.875rem)]',
        '[line-height:var(--joy-lineHeight-md,1.5)]',
        colorTokens.text.tertiary,
      ],
      values: {
        fontWeight: undefined,
        fontSize: 'var(--joy-fontSize-sm,0.875rem)',
        lineHeight: 'var(--joy-lineHeight-md,1.5)',
        letterSpacing: undefined,
      },
      tokens: {
        color: baseTokens.text.tertiary,
      },
    },
    'body-xs': {
      className: [
        'font-[var(--joy-fontWeight-md,500)]',
        'text-[length:var(--joy-fontSize-xs,0.75rem)]',
        '[line-height:var(--joy-lineHeight-md,1.5)]',
        colorTokens.text.tertiary,
      ],
      values: {
        fontWeight: 'var(--joy-fontWeight-md,500)',
        fontSize: 'var(--joy-fontSize-xs,0.75rem)',
        lineHeight: 'var(--joy-lineHeight-md,1.5)',
        letterSpacing: undefined,
      },
      tokens: {
        color: baseTokens.text.tertiary,
      },
    },
  },
};
