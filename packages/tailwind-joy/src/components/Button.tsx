import { clsx } from 'clsx';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { focus, disabled, textColor, toVariableClass } from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';
import { CircularProgress } from './CircularProgress';
import { adaptAsIcon } from './internal/class-adapter';

function buttonStartDecoratorVariants(props?: BaseVariants) {
  return twMerge(
    clsx([
      'tj-button-start-decorator',
      '[--Icon-margin:0_0_0_calc(var(--Button-gap)/-2)]',
      '[--CircularProgress-margin:0_0_0_calc(var(--Button-gap)/-2)]',
      '[display:inherit]',
      'mr-[var(--Button-gap)]',
    ]),
  );
}

function buttonEndDecoratorVariants(props?: BaseVariants) {
  return twMerge(
    clsx([
      'tj-button-end-decorator',
      '[--Icon-margin:0_calc(var(--Button-gap)/-2)_0_0]',
      '[--CircularProgress-margin:0_calc(var(--Button-gap)/-2)_0_0]',
      '[display:inherit]',
      'ml-[var(--Button-gap)]',
    ]),
  );
}

function buttonLoadingIndicatorCenterVariants(props?: BaseVariants) {
  const { color = 'primary', variant = 'solid' } = props ?? {};

  return twMerge(
    clsx([
      'tj-button-loading-indicator-center',
      '[display:inherit]',
      'absolute',
      'left-1/2',
      '-translate-x-1/2',
      textColor(baseTokens[color][`${variant}DisabledColor`]),
    ]),
  );
}

function buttonRootVariants(
  props?: BaseVariants & {
    fullWidth?: boolean;
    invisibleChildren?: boolean;
  },
) {
  const {
    color = 'primary',
    size = 'md',
    variant = 'solid',
    fullWidth = false,
    invisibleChildren = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-button-root group/tj-button',
      '[--Icon-margin:initial]',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      size === 'sm' && [
        '[--Icon-fontSize:1.125rem]',
        '[--CircularProgress-size:20px]',
        '[--CircularProgress-thickness:2px]',
        '[--Button-gap:0.375rem]',
        'min-h-[var(--Button-minHeight,2rem)]',
        'text-[0.875rem]',
        'py-[var(--Button-paddingBlock,0.25rem)]',
        'px-3',
      ],
      size === 'md' && [
        '[--Icon-fontSize:1.25rem]',
        '[--CircularProgress-size:20px]',
        '[--CircularProgress-thickness:2px]',
        '[--Button-gap:0.5rem]',
        'min-h-[var(--Button-minHeight,2.25rem)]',
        'text-[0.875rem]',
        'py-[var(--Button-paddingBlock,0.375rem)]',
        'px-4',
      ],
      size === 'lg' && [
        '[--Icon-fontSize:1.5rem]',
        '[--CircularProgress-size:28px]',
        '[--CircularProgress-thickness:4px]',
        '[--Button-gap:0.75rem]',
        'min-h-[var(--Button-minHeight,2.75rem)]',
        'text-[1rem]',
        'py-[var(--Button-paddingBlock,0.5rem)]',
        'px-6',
      ],
      '[-webkit-tap-highlight-color:transparent]',
      'box-border',
      'rounded-[var(--Button-radius,6px)]',
      'm-[var(--Button-margin)]',
      'border-none',
      'bg-transparent',
      'cursor-pointer',
      'select-none',
      'inline-flex',
      'items-center',
      'justify-center',
      'relative',
      'no-underline',
      'font-semibold',
      'leading-normal',
      fullWidth && 'w-full',
      [focus('outline-2 outline outline-offset-2'), colorTokens.focusVisible],
      [
        variant === 'outlined'
          ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
          : '[--variant-borderWidth:0px]',
        !invisibleChildren && colorTokens[color][`${variant}Color`],
        colorTokens[color][`${variant}Bg`],
        colorTokens[color][`${variant}Border`],
      ],
      [
        !invisibleChildren && colorTokens[color][`${variant}HoverColor`],
        colorTokens[color][`${variant}HoverBg`],
      ],
      [
        !invisibleChildren && colorTokens[color][`${variant}ActiveColor`],
        colorTokens[color][`${variant}ActiveBg`],
      ],
      [
        disabled(
          'pointer-events-none cursor-default [--Icon-color:currentColor]',
        ),
        !invisibleChildren && colorTokens[color][`${variant}DisabledColor`],
        colorTokens[color][`${variant}DisabledBg`],
        colorTokens[color][`${variant}DisabledBorder`],
      ],
      invisibleChildren && 'text-transparent',
    ]),
  );
}

interface ButtonRootVariants extends BaseVariants {
  fullWidth?: boolean;
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
    const instanceLoadingIndicator = loadingIndicator ? (
      adaptAsIcon(loadingIndicator, { color, size })
    ) : (
      <CircularProgress color={color} thickness={thickness} />
    );

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
              ? instanceLoadingIndicator
              : adaptAsIcon(startDecorator, { color, size })}
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
            {instanceLoadingIndicator}
          </span>
        )}
        {(endDecorator || (loading && loadingPosition === 'end')) && (
          <span className={buttonEndDecoratorVariants()}>
            {loading
              ? instanceLoadingIndicator
              : adaptAsIcon(endDecorator, { color, size })}
          </span>
        )}
      </button>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: buttonStartDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: buttonEndDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: buttonLoadingIndicatorCenterVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
    },
  },
  {
    generatorFn: buttonRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      fullWidth: [false, true],
      invisibleChildren: [false, true],
    },
  },
];
