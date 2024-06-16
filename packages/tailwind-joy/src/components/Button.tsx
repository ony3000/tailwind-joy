import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

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
    'focus-visible:outline-joy-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500 disabled:pointer-events-none',
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
        solid: [
          'text-joy-common-white',
          'disabled:bg-joy-neutral-100 dark:disabled:bg-joy-neutral-800',
        ],
        soft: 'disabled:bg-joy-neutral-50 dark:disabled:bg-joy-neutral-800',
        outlined: [
          'border border-solid',
          'disabled:border-joy-neutral-200 dark:disabled:border-joy-neutral-800',
        ],
        plain: '',
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'solid',
        className: [
          'bg-joy-primary-500',
          'hover:bg-joy-primary-600',
          'active:bg-joy-primary-700',
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: [
          'bg-joy-primary-100 text-joy-primary-700 dark:bg-joy-primary-800 dark:text-joy-primary-200',
          'hover:bg-joy-primary-200 dark:hover:bg-joy-primary-700',
          'active:bg-joy-primary-300 active:text-joy-primary-800 dark:active:bg-joy-primary-600 dark:active:text-joy-primary-100',
        ],
      },
      {
        color: 'primary',
        variant: ['outlined', 'plain'],
        className: [
          'hover:bg-joy-primary-100 dark:hover:bg-joy-primary-800',
          'active:bg-joy-primary-200 dark:active:bg-joy-primary-700',
        ],
      },
      {
        color: 'primary',
        variant: 'outlined',
        className:
          'text-joy-primary-500 border-joy-primary-300 dark:text-joy-primary-200 dark:border-joy-primary-700',
      },
      {
        color: 'primary',
        variant: 'plain',
        className: 'text-joy-primary-500 dark:text-joy-primary-300',
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          'bg-joy-neutral-500',
          'hover:bg-joy-neutral-600',
          'active:bg-joy-neutral-700',
        ],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: [
          'bg-joy-neutral-100 text-joy-neutral-700 dark:bg-joy-neutral-800 dark:text-joy-neutral-200',
          'hover:bg-joy-neutral-200 dark:hover:bg-joy-neutral-700',
          'active:bg-joy-neutral-300 active:text-joy-neutral-800 dark:active:bg-joy-neutral-600 dark:active:text-joy-neutral-100',
        ],
      },
      {
        color: 'neutral',
        variant: ['outlined', 'plain'],
        className: [
          'hover:bg-joy-neutral-100 dark:hover:bg-joy-neutral-800',
          'active:bg-joy-neutral-200 dark:active:bg-joy-neutral-700',
        ],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className:
          'text-joy-neutral-700 border-joy-neutral-300 dark:text-joy-neutral-200 dark:border-joy-neutral-700',
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: [
          'text-joy-neutral-700 dark:text-joy-neutral-300',
          'hover:text-joy-neutral-900 dark:hover:text-joy-neutral-300',
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          'bg-joy-danger-500',
          'hover:bg-joy-danger-600',
          'active:bg-joy-danger-700',
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: [
          'bg-joy-danger-100 text-joy-danger-700 dark:bg-joy-danger-800 dark:text-joy-danger-200',
          'hover:bg-joy-danger-200 dark:hover:bg-joy-danger-700',
          'active:bg-joy-danger-300 active:text-joy-danger-800 dark:active:bg-joy-danger-600 dark:active:text-joy-danger-100',
        ],
      },
      {
        color: 'danger',
        variant: ['outlined', 'plain'],
        className: [
          'hover:bg-joy-danger-100 dark:hover:bg-joy-danger-800',
          'active:bg-joy-danger-200 dark:active:bg-joy-danger-700',
        ],
      },
      {
        color: 'danger',
        variant: 'outlined',
        className:
          'text-joy-danger-500 border-joy-danger-300 dark:text-joy-danger-200 dark:border-joy-danger-700',
      },
      {
        color: 'danger',
        variant: 'plain',
        className: 'text-joy-danger-500 dark:text-joy-danger-300',
      },
      {
        color: 'success',
        variant: 'solid',
        className: [
          'bg-joy-success-500',
          'hover:bg-joy-success-600',
          'active:bg-joy-success-700',
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        className: [
          'bg-joy-success-100 text-joy-success-700 dark:bg-joy-success-800 dark:text-joy-success-200',
          'hover:bg-joy-success-200 dark:hover:bg-joy-success-700',
          'active:bg-joy-success-300 active:text-joy-success-800 dark:active:bg-joy-success-600 dark:active:text-joy-success-100',
        ],
      },
      {
        color: 'success',
        variant: ['outlined', 'plain'],
        className: [
          'hover:bg-joy-success-100 dark:hover:bg-joy-success-800',
          'active:bg-joy-success-200 dark:active:bg-joy-success-700',
        ],
      },
      {
        color: 'success',
        variant: 'outlined',
        className:
          'text-joy-success-500 border-joy-success-300 dark:text-joy-success-200 dark:border-joy-success-700',
      },
      {
        color: 'success',
        variant: 'plain',
        className: 'text-joy-success-500 dark:text-joy-success-300',
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [
          'bg-joy-warning-500',
          'hover:bg-joy-warning-600',
          'active:bg-joy-warning-700',
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: [
          'bg-joy-warning-100 text-joy-warning-700 dark:bg-joy-warning-800 dark:text-joy-warning-200',
          'hover:bg-joy-warning-200 dark:hover:bg-joy-warning-700',
          'active:bg-joy-warning-300 active:text-joy-warning-800 dark:active:bg-joy-warning-600 dark:active:text-joy-warning-100',
        ],
      },
      {
        color: 'warning',
        variant: ['outlined', 'plain'],
        className: [
          'hover:bg-joy-warning-100 dark:hover:bg-joy-warning-800',
          'active:bg-joy-warning-200 dark:active:bg-joy-warning-700',
        ],
      },
      {
        color: 'warning',
        variant: 'outlined',
        className:
          'text-joy-warning-500 border-joy-warning-300 dark:text-joy-warning-200 dark:border-joy-warning-700',
      },
      {
        color: 'warning',
        variant: 'plain',
        className: 'text-joy-warning-500 dark:text-joy-warning-300',
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