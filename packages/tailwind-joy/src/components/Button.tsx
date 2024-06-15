import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  [
    'rounded-md font-semibold leading-normal select-none inline-flex items-center justify-center relative no-underline',
    'disabled:pointer-events-none disabled:text-joy-neutral-400 dark:disabled:text-joy-neutral-500',
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
        sm: 'px-3 py-1 min-h-[2rem] text-[0.875rem]',
        md: 'px-4 py-1.5 min-h-[2.25rem] text-[0.875rem]',
        lg: 'px-6 py-2 min-h-[2.75rem] text-[1rem]',
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
      size: 'md',
      variant: 'solid',
    },
  },
);

interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

type ButtonProps = Omit<ComponentProps<'button'>, keyof ButtonVariants> &
  ButtonVariants;

export function Button({
  children,
  color,
  size,
  variant,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      type="button"
      className={buttonVariants({ color, size, variant })}
      {...otherProps}
    >
      {children}
    </button>
  );
}
