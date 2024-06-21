import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { CircularProgress } from './CircularProgress';
import { twMerge } from 'tailwind-merge';
import { token } from '../color-tokens';

const { primary, neutral, danger, success, warning } = token;

const iconButtonLoadingIndicatorVariants = cva('', {
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
  defaultVariants: {
    color: 'neutral',
    variant: 'plain',
  },
});

const iconButtonRootVariants = cva(
  [
    ['[--Icon-fontSize:calc(var(--IconButton-size,2.25rem)/1.5)]'],
    'relative m-[var(--IconButton-margin)] inline-flex items-center justify-center rounded-md py-0 font-medium [-webkit-tap-highlight-color:transparent]',
  ],
  {
    variants: {
      color: {
        primary: '[--Icon-color:currentColor]',
        neutral: 'text-joy-neutral-500 dark:text-joy-neutral-400',
        danger: '[--Icon-color:currentColor]',
        success: '[--Icon-color:currentColor]',
        warning: '[--Icon-color:currentColor]',
      },
      size: {
        sm: [
          [
            '[--IconButton-size:2rem]',
            '[--CircularProgress-size:20px]',
            '[--CircularProgress-thickness:2px]',
          ],
          'min-h-[var(--IconButton-size,2rem)] min-w-[var(--IconButton-size,2rem)] px-0.5 text-[0.875rem]',
        ],
        md: [
          [
            '[--CircularProgress-size:20px]',
            '[--CircularProgress-thickness:3px]',
          ],
          'min-h-[var(--IconButton-size,2.25rem)] min-w-[var(--IconButton-size,2.25rem)] px-1 text-[1rem]',
        ],
        lg: [
          [
            '[--IconButton-size:2.75rem]',
            '[--CircularProgress-size:28px]',
            '[--CircularProgress-thickness:4px]',
          ],
          'min-h-[var(--IconButton-size,2.75rem)] min-w-[var(--IconButton-size,2.75rem)] px-1.5 text-[1.125rem]',
        ],
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
        variant: ['solid', 'soft', 'plain'],
        className: '[--variant-borderWidth:0px]',
      },
    ],
    defaultVariants: {
      color: 'neutral',
      size: 'md',
      variant: 'plain',
    },
  },
);

interface IconButtonRootVariants
  extends VariantProps<typeof iconButtonRootVariants> {
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
      color,
      size,
      variant,
      loading,
      loadingIndicator,
      ...otherProps
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        className={twMerge(
          iconButtonRootVariants({
            color,
            size,
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
            {loadingIndicator ?? <CircularProgress color={color} />}
          </span>
        ) : (
          children
        )}
      </button>
    );
  },
);
