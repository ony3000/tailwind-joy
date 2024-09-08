import { clsx } from 'clsx';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import {
  hover,
  focus,
  active,
  disabled,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';
import { CircularProgress } from './CircularProgress';

function iconButtonLoadingIndicatorVariants(props?: BaseVariants) {
  const { color = 'neutral', variant = 'plain' } = props ?? {};

  return twMerge(
    clsx([
      'tj-icon-button-loading-indicator',
      '[display:inherit]',
      'absolute',
      'left-1/2',
      '-translate-x-1/2',
      textColor(baseTokens[color][`${variant}DisabledColor`]),
    ]),
  );
}

function iconButtonRootVariants(
  props?: BaseVariants & {
    /**
     * The explicit `size` provided to the component.
     */
    instanceSize?: BaseVariants['size'];
  },
) {
  const {
    color = 'neutral',
    size = 'md',
    variant = 'plain',
    instanceSize,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-icon-button-root group/tj-icon-button',
      '[--Icon-margin:initial]',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      instanceSize && [
        instanceSize === 'sm' && '[--IconButton-size:2rem]',
        instanceSize === 'md' && '[--IconButton-size:2.25rem]',
        instanceSize === 'lg' && '[--IconButton-size:2.75rem]',
      ],
      size === 'sm' && [
        '[--Icon-fontSize:calc(var(--IconButton-size,2rem)/1.6)]',
        '[--CircularProgress-size:20px]',
        '[--CircularProgress-thickness:2px]',
        'min-w-[var(--IconButton-size,2rem)]',
        'min-h-[var(--IconButton-size,2rem)]',
        'text-[0.875rem]',
        'px-[2px]',
      ],
      size === 'md' && [
        '[--Icon-fontSize:calc(var(--IconButton-size,2.25rem)/1.5)]',
        '[--CircularProgress-size:20px]',
        '[--CircularProgress-thickness:2px]',
        'min-w-[var(--IconButton-size,2.25rem)]',
        'min-h-[var(--IconButton-size,2.25rem)]',
        'text-[1rem]',
        'px-1',
      ],
      size === 'lg' && [
        '[--Icon-fontSize:calc(var(--IconButton-size,2.75rem)/1.571)]',
        '[--CircularProgress-size:28px]',
        '[--CircularProgress-thickness:4px]',
        'min-w-[var(--IconButton-size,2.75rem)]',
        'min-h-[var(--IconButton-size,2.75rem)]',
        'text-[1.125rem]',
        'px-1.5',
      ],
      '[-webkit-tap-highlight-color:transparent]',
      'py-0',
      'font-medium',
      'm-[var(--IconButton-margin)]',
      'rounded-[var(--IconButton-radius,6px)]',
      'border-none',
      'box-border',
      'bg-transparent',
      'cursor-pointer',
      'inline-flex',
      'items-center',
      'justify-center',
      'relative',
      [
        focus('[--Icon-color:currentColor]'),
        focus('outline-2 outline outline-offset-2'),
        colorTokens.focusVisible,
      ],
      [
        variant === 'outlined'
          ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
          : '[--variant-borderWidth:0px]',
        colorTokens[color][`${variant}Color`],
        colorTokens[color][`${variant}Bg`],
        colorTokens[color][`${variant}Border`],
      ],
      [
        hover('[--Icon-color:currentColor]'),
        colorTokens[color][`${variant}HoverColor`],
        colorTokens[color][`${variant}HoverBg`],
      ],
      [
        active('[--Icon-color:currentColor]'),
        colorTokens[color][`${variant}ActiveColor`],
        colorTokens[color][`${variant}ActiveBg`],
      ],
      [
        disabled(
          'pointer-events-none cursor-default [--Icon-color:currentColor]',
        ),
        colorTokens[color][`${variant}DisabledColor`],
        colorTokens[color][`${variant}DisabledBg`],
        colorTokens[color][`${variant}DisabledBorder`],
      ],
    ]),
  );
}

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
            size,
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
