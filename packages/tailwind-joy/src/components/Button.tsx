import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { CircularProgress } from './CircularProgress';
import { twMerge } from 'tailwind-merge';
import { token } from '../color-tokens';

const { primary, neutral, danger, success, warning } = token;

const buttonStartDecoratorVariants = cva([
  '[--Icon-margin:0_0_0_calc(var(--Button-gap)/-2)]',
  '[--CircularProgress-margin:0_0_0_calc(var(--Button-gap)/-2)]',
  'mr-[var(--Button-gap)] [display:inherit]',
]);

const buttonEndDecoratorVariants = cva([
  '[--Icon-margin:0_calc(var(--Button-gap)/-2)_0_0]',
  '[--CircularProgress-margin:0_calc(var(--Button-gap)/-2)_0_0]',
  'ml-[var(--Button-gap)] [display:inherit]',
]);

const buttonLoadingIndicatorCenterVariants = cva(
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
        className: [
          // same as primary.solidDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: [
          // same as primary.softDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: [
          // same as primary.outlinedDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'primary',
        variant: 'plain',
        className: [
          // same as primary.plainDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          // same as neutral.solidDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: [
          // same as neutral.softDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: [
          // same as neutral.outlinedDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: [
          // same as neutral.plainDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          // same as danger.solidDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: [
          // same as danger.softDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: [
          // same as danger.outlinedDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'danger',
        variant: 'plain',
        className: [
          // same as danger.plainDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'success',
        variant: 'solid',
        className: [
          // same as success.solidDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        className: [
          // same as success.softDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'success',
        variant: 'outlined',
        className: [
          // same as success.outlinedDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'success',
        variant: 'plain',
        className: [
          // same as success.plainDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [
          // same as warning.solidDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: [
          // same as warning.softDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: [
          // same as warning.outlinedDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
      {
        color: 'warning',
        variant: 'plain',
        className: [
          // same as warning.plainDisabledColor.replace(/disabled:/g, '')
          'text-joy-neutral-400 dark:text-joy-neutral-500',
        ],
      },
    ],
    defaultVariants: {
      color: 'primary',
      variant: 'solid',
    },
  },
);

const buttonRootVariants = cva(
  [
    '[--Icon-margin:initial]',
    'relative m-[var(--Button-margin)] box-border inline-flex cursor-pointer select-none items-center justify-center rounded-[var(--Button-radius,6px)] border-none bg-transparent font-semibold leading-normal no-underline no-underline [-webkit-tap-highlight-color:transparent]',
    [
      token.focusVisible,
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
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
      fullWidth: {
        false: '',
        true: 'w-full',
      },
      size: {
        sm: [
          [
            '[--Icon-fontSize:1.125rem]',
            '[--CircularProgress-size:20px]',
            '[--CircularProgress-thickness:2px]',
            '[--Button-gap:0.375rem]',
          ],
          'min-h-[var(--Button-minHeight,2rem)] px-3 py-[var(--Button-paddingBlock,0.25rem)] text-[0.875rem]',
        ],
        md: [
          [
            '[--Icon-fontSize:1.25rem]',
            '[--CircularProgress-size:20px]',
            '[--CircularProgress-thickness:2px]',
            '[--Button-gap:0.5rem]',
          ],
          'min-h-[var(--Button-minHeight,2.25rem)] px-4 py-[var(--Button-paddingBlock,0.375rem)] text-[0.875rem]',
        ],
        lg: [
          [
            '[--Icon-fontSize:1.5rem]',
            '[--CircularProgress-size:28px]',
            '[--CircularProgress-thickness:4px]',
            '[--Button-gap:0.75rem]',
          ],
          'min-h-[var(--Button-minHeight,2.75rem)] px-6 py-[var(--Button-paddingBlock,0.5rem)] text-[1rem]',
        ],
      },
      variant: {
        solid: '',
        soft: '',
        outlined: 'border border-solid',
        plain: '',
      },
      invisibleChildren: {
        false: '',
        true: 'text-transparent',
      },
    },
    compoundVariants: [
      {
        color: ['primary', 'danger', 'success', 'warning'],
        className: '[--Icon-color:currentColor]',
      },
      {
        color: 'primary',
        variant: 'solid',
        className: [
          primary.solidBg,
          primary.solidHoverBg,
          primary.solidActiveBg,
          primary.solidDisabledBg,
        ],
      },
      {
        color: 'primary',
        variant: 'solid',
        invisibleChildren: false,
        className: [primary.solidColor, primary.solidDisabledColor],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: [
          primary.softBg,
          primary.softHoverBg,
          primary.softActiveBg,
          primary.softDisabledBg,
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        invisibleChildren: false,
        className: [
          primary.softColor,
          primary.softActiveColor,
          primary.softDisabledColor,
        ],
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: [
          primary.outlinedBorder,
          primary.outlinedHoverBg,
          primary.outlinedActiveBg,
          primary.outlinedDisabledBorder,
        ],
      },
      {
        color: 'primary',
        variant: 'outlined',
        invisibleChildren: false,
        className: [primary.outlinedColor, primary.outlinedDisabledColor],
      },
      {
        color: 'primary',
        variant: 'plain',
        className: [primary.plainHoverBg, primary.plainActiveBg],
      },
      {
        color: 'primary',
        variant: 'plain',
        invisibleChildren: false,
        className: [primary.plainColor, primary.plainDisabledColor],
      },
      {
        color: 'neutral',
        variant: ['soft', 'outlined', 'plain'],
        className: [
          // joy-neutral-500 dark:joy-neutral-400
          '[--Icon-color:#636b74] dark:[--Icon-color:#9fa6ad]',
          'disabled:[--Icon-color:currentColor]',
        ],
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          '[--Icon-color:currentColor]',
          neutral.solidBg,
          neutral.solidHoverBg,
          neutral.solidActiveBg,
          neutral.solidDisabledBg,
        ],
      },
      {
        color: 'neutral',
        variant: 'solid',
        invisibleChildren: false,
        className: [neutral.solidColor, neutral.solidDisabledColor],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: [
          neutral.softBg,
          neutral.softHoverBg,
          neutral.softActiveBg,
          neutral.softDisabledBg,
        ],
      },
      {
        color: 'neutral',
        variant: 'soft',
        invisibleChildren: false,
        className: [
          neutral.softColor,
          neutral.softActiveColor,
          neutral.softDisabledColor,
        ],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: [
          neutral.outlinedBorder,
          neutral.outlinedHoverBg,
          neutral.outlinedActiveBg,
          neutral.outlinedDisabledBorder,
        ],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        invisibleChildren: false,
        className: [neutral.outlinedColor, neutral.outlinedDisabledColor],
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: [neutral.plainHoverBg, neutral.plainActiveBg],
      },
      {
        color: 'neutral',
        variant: 'plain',
        invisibleChildren: false,
        className: [
          neutral.plainColor,
          neutral.plainHoverColor,
          neutral.plainDisabledColor,
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          danger.solidBg,
          danger.solidHoverBg,
          danger.solidActiveBg,
          danger.solidDisabledBg,
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        invisibleChildren: false,
        className: [danger.solidColor, danger.solidDisabledColor],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: [
          danger.softBg,
          danger.softHoverBg,
          danger.softActiveBg,
          danger.softDisabledBg,
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        invisibleChildren: false,
        className: [
          danger.softColor,
          danger.softActiveColor,
          danger.softDisabledColor,
        ],
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: [
          danger.outlinedBorder,
          danger.outlinedHoverBg,
          danger.outlinedActiveBg,
          danger.outlinedDisabledBorder,
        ],
      },
      {
        color: 'danger',
        variant: 'outlined',
        invisibleChildren: false,
        className: [danger.outlinedColor, danger.outlinedDisabledColor],
      },
      {
        color: 'danger',
        variant: 'plain',
        className: [danger.plainHoverBg, danger.plainActiveBg],
      },
      {
        color: 'danger',
        variant: 'plain',
        invisibleChildren: false,
        className: [danger.plainColor, danger.plainDisabledColor],
      },
      {
        color: 'success',
        variant: 'solid',
        className: [
          success.solidBg,
          success.solidHoverBg,
          success.solidActiveBg,
          success.solidDisabledBg,
        ],
      },
      {
        color: 'success',
        variant: 'solid',
        invisibleChildren: false,
        className: [success.solidColor, success.solidDisabledColor],
      },
      {
        color: 'success',
        variant: 'soft',
        className: [
          success.softBg,
          success.softHoverBg,
          success.softActiveBg,
          success.softDisabledBg,
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        invisibleChildren: false,
        className: [
          success.softColor,
          success.softActiveColor,
          success.softDisabledColor,
        ],
      },
      {
        color: 'success',
        variant: 'outlined',
        className: [
          success.outlinedBorder,
          success.outlinedHoverBg,
          success.outlinedActiveBg,
          success.outlinedDisabledBorder,
        ],
      },
      {
        color: 'success',
        variant: 'outlined',
        invisibleChildren: false,
        className: [success.outlinedColor, success.outlinedDisabledColor],
      },
      {
        color: 'success',
        variant: 'plain',
        className: [success.plainHoverBg, success.plainActiveBg],
      },
      {
        color: 'success',
        variant: 'plain',
        invisibleChildren: false,
        className: [success.plainColor, success.plainDisabledColor],
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [
          warning.solidBg,
          warning.solidHoverBg,
          warning.solidActiveBg,
          warning.solidDisabledBg,
        ],
      },
      {
        color: 'warning',
        variant: 'solid',
        invisibleChildren: false,
        className: [warning.solidColor, warning.solidDisabledColor],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: [
          warning.softBg,
          warning.softHoverBg,
          warning.softActiveBg,
          warning.softDisabledBg,
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        invisibleChildren: false,
        className: [
          warning.softColor,
          warning.softActiveColor,
          warning.softDisabledColor,
        ],
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: [
          warning.outlinedBorder,
          warning.outlinedHoverBg,
          warning.outlinedActiveBg,
          warning.outlinedDisabledBorder,
        ],
      },
      {
        color: 'warning',
        variant: 'outlined',
        invisibleChildren: false,
        className: [warning.outlinedColor, warning.outlinedDisabledColor],
      },
      {
        color: 'warning',
        variant: 'plain',
        className: [warning.plainHoverBg, warning.plainActiveBg],
      },
      {
        color: 'warning',
        variant: 'plain',
        invisibleChildren: false,
        className: [warning.plainColor, warning.plainDisabledColor],
      },
    ],
    defaultVariants: {
      color: 'primary',
      fullWidth: false,
      size: 'md',
      variant: 'solid',
      invisibleChildren: false,
    },
  },
);

interface ButtonRootVariants extends VariantProps<typeof buttonRootVariants> {
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
  loading?: boolean;
  loadingIndicator?: ReactNode;
  loadingPosition?: 'center' | 'start' | 'end';
}

type ButtonRootProps = Omit<
  ComponentProps<'button'>,
  keyof ButtonRootVariants
> &
  ButtonRootVariants;

export const Button = forwardRef<HTMLButtonElement, ButtonRootProps>(
  function ButtonRoot(
    {
      children,
      className,
      disabled,
      color = 'primary',
      fullWidth,
      size = 'md',
      variant = 'solid',
      startDecorator,
      endDecorator,
      loading,
      loadingIndicator,
      loadingPosition = 'center',
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
          buttonRootVariants({
            color,
            fullWidth,
            size,
            variant,
            invisibleChildren: loading && loadingPosition === 'center',
          }),
          className,
        )}
        disabled={disabled || loading}
        {...otherProps}
      >
        {(startDecorator || (loading && loadingPosition === 'start')) && (
          <span className={buttonStartDecoratorVariants()}>
            {loading
              ? loadingIndicator ?? (
                  <CircularProgress color={color} thickness={thickness} />
                )
              : startDecorator}
          </span>
        )}
        {children}
        {loading && loadingPosition === 'center' && (
          <span
            className={buttonLoadingIndicatorCenterVariants({
              color,
              variant,
            })}
          >
            {loadingIndicator ?? (
              <CircularProgress color={color} thickness={thickness} />
            )}
          </span>
        )}
        {(endDecorator || (loading && loadingPosition === 'end')) && (
          <span className={buttonEndDecoratorVariants()}>
            {loading
              ? loadingIndicator ?? (
                  <CircularProgress color={color} thickness={thickness} />
                )
              : endDecorator}
          </span>
        )}
      </button>
    );
  },
);
