import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { token } from '../color-tokens';

const { primary, neutral, danger, success, warning } = token;

const buttonDecoratorVariants = cva('[display:inherit]', {
  variants: {
    position: {
      start: [
        '[--Icon-margin:0_0_0_calc(var(--Button-gap)/-2)]',
        'mr-[var(--Button-gap)]',
      ],
      end: [
        '[--Icon-margin:0_calc(var(--Button-gap)/-2)_0_0]',
        'ml-[var(--Button-gap)]',
      ],
    },
  },
});

interface ButtonDecoratorVariants
  extends VariantProps<typeof buttonDecoratorVariants> {
  position: 'start' | 'end';
  node: ReactNode;
}

type ButtonDecoratorProps = ButtonDecoratorVariants;

function ButtonDecorator({ position, node }: ButtonDecoratorProps) {
  return <span className={buttonDecoratorVariants({ position })}>{node}</span>;
}

const buttonVariants = cva(
  [
    '[--Icon-color:currentColor]',
    'relative inline-flex select-none items-center justify-center rounded-md font-semibold leading-normal no-underline',
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
          '[--Icon-fontSize:1.125rem]',
          '[--Button-gap:0.375rem]',
          'min-h-[2rem] px-3 py-1 text-[0.875rem]',
        ],
        md: [
          '[--Icon-fontSize:1.25rem]',
          '[--Button-gap:0.5rem]',
          'min-h-[2.25rem] px-4 py-1.5 text-[0.875rem]',
        ],
        lg: [
          '[--Icon-fontSize:1.5rem]',
          '[--Button-gap:0.75rem]',
          'min-h-[2.75rem] px-6 py-2 text-[1rem]',
        ],
      },
      variant: {
        solid: '',
        soft: '',
        outlined: 'border border-solid',
        plain: '',
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'solid',
        className: [
          [primary.solidColor, primary.solidBg],
          primary.solidHoverBg,
          primary.solidActiveBg,
          [primary.solidDisabledColor, primary.solidDisabledBg],
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: [
          [primary.softColor, primary.softBg],
          primary.softHoverBg,
          [primary.softActiveColor, primary.softActiveBg],
          [primary.softDisabledColor, primary.softDisabledBg],
        ],
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: [
          [primary.outlinedColor, primary.outlinedBorder],
          primary.outlinedHoverBg,
          primary.outlinedActiveBg,
          [primary.outlinedDisabledColor, primary.outlinedDisabledBorder],
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
        variant: 'solid',
        className: [
          [neutral.solidColor, neutral.solidBg],
          neutral.solidHoverBg,
          neutral.solidActiveBg,
          [neutral.solidDisabledColor, neutral.solidDisabledBg],
        ],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: [
          [neutral.softColor, neutral.softBg],
          neutral.softHoverBg,
          [neutral.softActiveColor, neutral.softActiveBg],
          [neutral.softDisabledColor, neutral.softDisabledBg],
        ],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: [
          [neutral.outlinedColor, neutral.outlinedBorder],
          neutral.outlinedHoverBg,
          neutral.outlinedActiveBg,
          [neutral.outlinedDisabledColor, neutral.outlinedDisabledBorder],
        ],
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: [
          neutral.plainColor,
          [neutral.plainHoverColor, neutral.plainHoverBg],
          neutral.plainActiveBg,
          neutral.plainDisabledColor,
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          [danger.solidColor, danger.solidBg],
          danger.solidHoverBg,
          danger.solidActiveBg,
          [danger.solidDisabledColor, danger.solidDisabledBg],
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: [
          [danger.softColor, danger.softBg],
          danger.softHoverBg,
          [danger.softActiveColor, danger.softActiveBg],
          [danger.softDisabledColor, danger.softDisabledBg],
        ],
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: [
          [danger.outlinedColor, danger.outlinedBorder],
          danger.outlinedHoverBg,
          danger.outlinedActiveBg,
          [danger.outlinedDisabledColor, danger.outlinedDisabledBorder],
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
          [success.solidColor, success.solidBg],
          success.solidHoverBg,
          success.solidActiveBg,
          [success.solidDisabledColor, success.solidDisabledBg],
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        className: [
          [success.softColor, success.softBg],
          success.softHoverBg,
          [success.softActiveColor, success.softActiveBg],
          [success.softDisabledColor, success.softDisabledBg],
        ],
      },
      {
        color: 'success',
        variant: 'outlined',
        className: [
          [success.outlinedColor, success.outlinedBorder],
          success.outlinedHoverBg,
          success.outlinedActiveBg,
          [success.outlinedDisabledColor, success.outlinedDisabledBorder],
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
          [warning.solidColor, warning.solidBg],
          warning.solidHoverBg,
          warning.solidActiveBg,
          [warning.solidDisabledColor, warning.solidDisabledBg],
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: [
          [warning.softColor, warning.softBg],
          warning.softHoverBg,
          [warning.softActiveColor, warning.softActiveBg],
          [warning.softDisabledColor, warning.softDisabledBg],
        ],
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: [
          [warning.outlinedColor, warning.outlinedBorder],
          warning.outlinedHoverBg,
          warning.outlinedActiveBg,
          [warning.outlinedDisabledColor, warning.outlinedDisabledBorder],
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
      color: 'primary',
      fullWidth: false,
      size: 'md',
      variant: 'solid',
    },
  },
);

interface ButtonVariants extends VariantProps<typeof buttonVariants> {
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
}

type ButtonProps = Omit<ComponentProps<'button'>, keyof ButtonVariants> &
  ButtonVariants;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      color,
      fullWidth,
      size,
      variant,
      startDecorator,
      endDecorator,
      ...otherProps
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        className={buttonVariants({ color, fullWidth, size, variant })}
        {...otherProps}
      >
        {startDecorator && (
          <ButtonDecorator position="start" node={startDecorator} />
        )}
        {children}
        {endDecorator && <ButtonDecorator position="end" node={endDecorator} />}
      </button>
    );
  },
);
