import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  ['px-4 py-1 rounded-md text-[14px] leading-[14px] font-semibold'],
  {
    variants: {
      color: {
        primary: 'bg-joy-primary-100 text-joy-primary-700',
        neutral: 'bg-joy-neutral-100 text-joy-neutral-700',
        danger: 'bg-joy-danger-100 text-joy-danger-700',
        success: 'bg-joy-success-100 text-joy-success-700',
        warning: 'bg-joy-warning-100 text-joy-warning-700',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

type ButtonProps = Omit<ComponentProps<'button'>, keyof ButtonVariants> &
  ButtonVariants;

export function Button({ children, color }: ButtonProps) {
  return (
    <button type="button" className={buttonVariants({ color })}>
      {children}
    </button>
  );
}
