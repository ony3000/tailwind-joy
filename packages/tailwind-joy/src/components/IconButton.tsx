import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { CircularProgress } from './CircularProgress';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { colorTokens } from '../base/colors';

const { primary, neutral, danger, success, warning } = colorTokens;

/**
 * It has the same config as `buttonLoadingIndicatorCenterVariants` except for the `defaultVariants` property.
 */
const iconButtonLoadingIndicatorVariants = cva(
  'absolute left-1/2 -translate-x-1/2 [display:inherit]',
  {
    variants: {
      color: {
        primary: '',
        neutral: '',
        danger: '',
        success: '',
        warning: '',
      },
      variant: {
        solid: '',
        soft: '',
        outlined: '',
        plain: '',
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'solid',
        className: primary.solidDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'primary',
        variant: 'soft',
        className: primary.softDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: primary.outlinedDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'primary',
        variant: 'plain',
        className: primary.plainDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: neutral.solidDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: neutral.softDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: neutral.outlinedDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: neutral.plainDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'danger',
        variant: 'solid',
        className: danger.solidDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'danger',
        variant: 'soft',
        className: danger.softDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: danger.outlinedDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'danger',
        variant: 'plain',
        className: danger.plainDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'success',
        variant: 'solid',
        className: success.solidDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'success',
        variant: 'soft',
        className: success.softDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'success',
        variant: 'outlined',
        className: success.outlinedDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'success',
        variant: 'plain',
        className: success.plainDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'warning',
        variant: 'solid',
        className: warning.solidDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'warning',
        variant: 'soft',
        className: warning.softDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: warning.outlinedDisabledColor.replace(/disabled:/g, ''),
      },
      {
        color: 'warning',
        variant: 'plain',
        className: warning.plainDisabledColor.replace(/disabled:/g, ''),
      },
    ],
    defaultVariants: {
      color: 'neutral',
      variant: 'plain',
    },
  },
);

const iconButtonRootVariants = cva(
  [
    '[--Icon-margin:initial]',
    'relative m-[var(--IconButton-margin)] box-border inline-flex cursor-pointer items-center justify-center rounded-[var(--IconButton-radius,6px)] border-none bg-transparent py-0 font-medium [-webkit-tap-highlight-color:transparent]',
    [
      colorTokens.focusVisible,
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[--Icon-color:currentColor]',
    ],
    'disabled:pointer-events-none',
  ],
  {
    variants: {
      color: {
        primary: '',
        neutral: '',
        danger: '',
        success: '',
        warning: '',
      },
      size: {
        sm: [
          [
            '[--Icon-fontSize:calc(var(--IconButton-size,2rem)/1.6)]',
            '[--CircularProgress-size:20px]',
            '[--CircularProgress-thickness:2px]',
          ],
          'min-h-[var(--IconButton-size,2rem)] min-w-[var(--IconButton-size,2rem)] px-[2px] text-[0.875rem]',
        ],
        md: [
          [
            '[--Icon-fontSize:calc(var(--IconButton-size,2.25rem)/1.5)]',
            '[--CircularProgress-size:20px]',
            '[--CircularProgress-thickness:2px]',
          ],
          'min-h-[var(--IconButton-size,2.25rem)] min-w-[var(--IconButton-size,2.25rem)] px-1 text-[1rem]',
        ],
        lg: [
          [
            '[--Icon-fontSize:calc(var(--IconButton-size,2.75rem)/1.571)]',
            '[--CircularProgress-size:28px]',
            '[--CircularProgress-thickness:4px]',
          ],
          'min-h-[var(--IconButton-size,2.75rem)] min-w-[var(--IconButton-size,2.75rem)] px-1.5 text-[1.125rem]',
        ],
      },
      /**
       * The explicit `size` provided to the component.
       */
      instanceSize: {
        sm: '[--IconButton-size:2rem]',
        md: '[--IconButton-size:2.25rem]',
        lg: '[--IconButton-size:2.75rem]',
      },
      variant: {
        solid: '',
        soft: '',
        outlined: [
          '[--variant-borderWidth:1px]',
          'border-solid [border-width:var(--variant-borderWidth)]',
        ],
        plain: '',
      },
    },
    compoundVariants: [
      {
        color: ['primary', 'danger', 'success', 'warning'],
        className: '[--Icon-color:currentColor]',
      },
      {
        variant: ['solid', 'soft', 'plain'],
        className: '[--variant-borderWidth:0px]',
      },
      {
        color: 'primary',
        variant: 'solid',
        className: [
          primary.solidColor,
          primary.solidBg,
          primary.solidHoverBg,
          primary.solidActiveBg,
          primary.solidDisabledColor,
          primary.solidDisabledBg,
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: [
          primary.softColor,
          primary.softBg,
          primary.softHoverBg,
          primary.softActiveColor,
          primary.softActiveBg,
          primary.softDisabledColor,
          primary.softDisabledBg,
        ],
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: [
          primary.outlinedColor,
          primary.outlinedBorder,
          primary.outlinedHoverBg,
          primary.outlinedActiveBg,
          primary.outlinedDisabledColor,
          primary.outlinedDisabledBorder,
        ],
      },
      {
        color: 'primary',
        variant: 'plain',
        className: [
          primary.plainColor,
          primary.plainHoverBg,
          primary.plainActiveBg,
          primary.plainDisabledColor,
        ],
      },
      {
        color: 'neutral',
        variant: ['soft', 'outlined', 'plain'],
        className: [
          '[--Icon-color:var(--joy-neutral-500)] dark:[--Icon-color:var(--joy-neutral-400)]',
          'hover:[--Icon-color:currentColor]',
          'active:[--Icon-color:currentColor]',
          'disabled:[--Icon-color:currentColor]',
        ],
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          '[--Icon-color:currentColor]',
          neutral.solidColor,
          neutral.solidBg,
          neutral.solidHoverBg,
          neutral.solidActiveBg,
          neutral.solidDisabledColor,
          neutral.solidDisabledBg,
        ],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: [
          neutral.softColor,
          neutral.softBg,
          neutral.softHoverBg,
          neutral.softActiveColor,
          neutral.softActiveBg,
          neutral.softDisabledColor,
          neutral.softDisabledBg,
        ],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: [
          neutral.outlinedColor,
          neutral.outlinedBorder,
          neutral.outlinedHoverBg,
          neutral.outlinedActiveBg,
          neutral.outlinedDisabledColor,
          neutral.outlinedDisabledBorder,
        ],
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: [
          neutral.plainColor,
          neutral.plainHoverColor,
          neutral.plainHoverBg,
          neutral.plainActiveBg,
          neutral.plainDisabledColor,
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          danger.solidColor,
          danger.solidBg,
          danger.solidHoverBg,
          danger.solidActiveBg,
          danger.solidDisabledColor,
          danger.solidDisabledBg,
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: [
          danger.softColor,
          danger.softBg,
          danger.softHoverBg,
          danger.softActiveColor,
          danger.softActiveBg,
          danger.softDisabledColor,
          danger.softDisabledBg,
        ],
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: [
          danger.outlinedColor,
          danger.outlinedBorder,
          danger.outlinedHoverBg,
          danger.outlinedActiveBg,
          danger.outlinedDisabledColor,
          danger.outlinedDisabledBorder,
        ],
      },
      {
        color: 'danger',
        variant: 'plain',
        className: [
          danger.plainColor,
          danger.plainHoverBg,
          danger.plainActiveBg,
          danger.plainDisabledColor,
        ],
      },
      {
        color: 'success',
        variant: 'solid',
        className: [
          success.solidColor,
          success.solidBg,
          success.solidHoverBg,
          success.solidActiveBg,
          success.solidDisabledColor,
          success.solidDisabledBg,
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        className: [
          success.softColor,
          success.softBg,
          success.softHoverBg,
          success.softActiveColor,
          success.softActiveBg,
          success.softDisabledColor,
          success.softDisabledBg,
        ],
      },
      {
        color: 'success',
        variant: 'outlined',
        className: [
          success.outlinedColor,
          success.outlinedBorder,
          success.outlinedHoverBg,
          success.outlinedActiveBg,
          success.outlinedDisabledColor,
          success.outlinedDisabledBorder,
        ],
      },
      {
        color: 'success',
        variant: 'plain',
        className: [
          success.plainColor,
          success.plainHoverBg,
          success.plainActiveBg,
          success.plainDisabledColor,
        ],
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [
          warning.solidColor,
          warning.solidBg,
          warning.solidHoverBg,
          warning.solidActiveBg,
          warning.solidDisabledColor,
          warning.solidDisabledBg,
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: [
          warning.softColor,
          warning.softBg,
          warning.softHoverBg,
          warning.softActiveColor,
          warning.softActiveBg,
          warning.softDisabledColor,
          warning.softDisabledBg,
        ],
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: [
          warning.outlinedColor,
          warning.outlinedBorder,
          warning.outlinedHoverBg,
          warning.outlinedActiveBg,
          warning.outlinedDisabledColor,
          warning.outlinedDisabledBorder,
        ],
      },
      {
        color: 'warning',
        variant: 'plain',
        className: [
          warning.plainColor,
          warning.plainHoverBg,
          warning.plainActiveBg,
          warning.plainDisabledColor,
        ],
      },
    ],
    defaultVariants: {
      color: 'neutral',
      size: 'md',
      variant: 'plain',
    },
  },
);

interface IconButtonRootVariants extends BaseVariants {
  loading?: boolean;
  loadingIndicator?: ReactNode;
}

type IconButtonRootProps = Omit<
  ComponentProps<'button'>,
  keyof IconButtonRootVariants
> &
  IconButtonRootVariants;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonRootProps>(
  function IconButtonRoot(
    {
      children,
      className,
      disabled,
      color = 'neutral',
      size,
      variant = 'plain',
      loading,
      loadingIndicator,
      ...otherProps
    },
    ref,
  ) {
    const thickness = { sm: 2, md: 3, lg: 4 }[size ?? 'md'];

    return (
      <button
        ref={ref}
        type="button"
        className={twMerge(
          iconButtonRootVariants({
            color,
            size: size ?? 'md',
            instanceSize: size,
            variant,
          }),
          className,
        )}
        disabled={disabled || loading}
        {...otherProps}
      >
        {loading ? (
          <span
            className={iconButtonLoadingIndicatorVariants({
              color,
              variant,
            })}
          >
            {loadingIndicator ?? (
              <CircularProgress color={color} thickness={thickness} />
            )}
          </span>
        ) : (
          children
        )}
      </button>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: iconButtonLoadingIndicatorVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
    },
  },
  {
    generatorFn: iconButtonRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      instanceSize: [undefined, 'sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
    },
  },
];
