import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { CircularProgress } from './CircularProgress';
import { token } from '../color-tokens';

const { primary, neutral, danger, success, warning } = token;

const buttonDecoratorVariants = cva('[display:inherit]', {
  variants: {
    position: {
      start: [
        [
          '[--Icon-margin:0_0_0_calc(var(--Button-gap)/-2)]',
          '[--CircularProgress-margin:0_0_0_calc(var(--Button-gap)/-2)]',
        ],
        'mr-[var(--Button-gap)]',
      ],
      end: [
        [
          '[--Icon-margin:0_calc(var(--Button-gap)/-2)_0_0]',
          '[--CircularProgress-margin:0_calc(var(--Button-gap)/-2)_0_0]',
        ],
        'ml-[var(--Button-gap)]',
      ],
    },
  },
});

const buttonVariants = cva(
  [
    '[--Icon-color:currentColor]',
    'relative inline-flex select-none items-center justify-center rounded-md font-semibold leading-normal no-underline [-webkit-tap-highlight-color:transparent]',
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
          'min-h-[2rem] px-3 py-1 text-[0.875rem]',
        ],
        md: [
          [
            '[--Icon-fontSize:1.25rem]',
            '[--CircularProgress-size:20px]',
            '[--CircularProgress-thickness:3px]',
            '[--Button-gap:0.5rem]',
          ],
          'min-h-[2.25rem] px-4 py-1.5 text-[0.875rem]',
        ],
        lg: [
          [
            '[--Icon-fontSize:1.5rem]',
            '[--CircularProgress-size:28px]',
            '[--CircularProgress-thickness:4px]',
            '[--Button-gap:0.75rem]',
          ],
          'min-h-[2.75rem] px-6 py-2 text-[1rem]',
        ],
      },
      variant: {
        solid: '',
        soft: '',
        outlined: 'border border-solid',
        plain: '',
      },
      loading: {
        false: '',
        true: 'text-transparent',
      },
    },
    compoundVariants: [
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
        className: [primary.plainColor, primary.plainDisabledColor],
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          neutral.solidBg,
          neutral.solidHoverBg,
          neutral.solidActiveBg,
          neutral.solidDisabledBg,
        ],
      },
      {
        color: 'neutral',
        variant: 'solid',
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
        className: [warning.plainColor, warning.plainDisabledColor],
      },
    ],
    defaultVariants: {
      color: 'primary',
      fullWidth: false,
      size: 'md',
      variant: 'solid',
      loading: false,
    },
  },
);

interface ButtonVariants extends VariantProps<typeof buttonVariants> {
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
  loading?: boolean;
  loadingIndicator?: ReactNode;
  loadingPosition?: 'center' | 'start' | 'end';
}

type ButtonProps = Omit<ComponentProps<'button'>, keyof ButtonVariants> &
  ButtonVariants;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      disabled,
      color,
      fullWidth,
      size,
      variant,
      startDecorator,
      endDecorator,
      loading,
      loadingIndicator,
      loadingPosition,
      ...otherProps
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        className={buttonVariants({ color, fullWidth, size, variant, loading })}
        disabled={disabled || loading}
        {...otherProps}
      >
        {startDecorator && (
          <span className={buttonDecoratorVariants({ position: 'start' })}>
            {startDecorator}
          </span>
        )}
        {children}
        {loading && (
          <span className="absolute left-1/2 -translate-x-1/2 [display:inherit]">
            <CircularProgress color={color} />
          </span>
        )}
        {endDecorator && (
          <span className={buttonDecoratorVariants({ position: 'end' })}>
            {endDecorator}
          </span>
        )}
      </button>
    );
  },
);
