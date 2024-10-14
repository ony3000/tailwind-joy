import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import { forwardRef, createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import {
  hover,
  focus,
  active,
  backgroundColor,
  borderColor,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens, colorTokens } from '../base/tokens';
import { CircularProgress } from './CircularProgress';

function iconButtonLoadingIndicatorVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'>,
) {
  const { color = 'neutral', variant = 'plain' } = props ?? {};

  return twMerge(
    clsx([
      'tj-icon-button-loading-indicator',
      '[display:inherit]',
      'absolute',
      'left-1/2',
      '-translate-x-1/2',

      // NOTE: It is disabled by default because the indicator is only activated when `loading: true`. So I didn't specify a color class name for the enabled state.
      textColor(theme.variants[`${variant}Disabled`][color].tokens.color),
    ]),
  );
}

function iconButtonRootVariants(
  props?: BaseVariants & {
    /**
     * The explicit `size` provided to the component.
     */
    instanceSize?: BaseVariants['size'];
    visuallyDisabled?: boolean;
  },
) {
  const {
    color = 'neutral',
    size = 'md',
    variant = 'plain',
    instanceSize,
    visuallyDisabled = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-icon-button-root group/tj-icon-button',
      '[--Icon-margin:initial]',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
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
        '[padding-inline:2px]',
      ],
      size === 'md' && [
        '[--Icon-fontSize:calc(var(--IconButton-size,2.25rem)/1.5)]',
        '[--CircularProgress-size:20px]',
        '[--CircularProgress-thickness:2px]',
        'min-w-[var(--IconButton-size,2.25rem)]',
        'min-h-[var(--IconButton-size,2.25rem)]',
        'text-[1rem]',
        '[padding-inline:0.25rem]',
      ],
      size === 'lg' && [
        '[--Icon-fontSize:calc(var(--IconButton-size,2.75rem)/1.571)]',
        '[--CircularProgress-size:28px]',
        '[--CircularProgress-thickness:4px]',
        'min-w-[var(--IconButton-size,2.75rem)]',
        'min-h-[var(--IconButton-size,2.75rem)]',
        'text-[1.125rem]',
        '[padding-inline:0.375rem]',
      ],
      '[-webkit-tap-highlight-color:transparent]',
      '[padding-block:0]',
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
        focus('[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'),

        // ---- (reference) theme.focus.default ----
        focus('outline-2 outline outline-offset-2'),
        colorTokens.focusVisible,
        // -----------------------------------------
      ],
      theme.variants[variant][color].className,
      [
        hover('[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'),
        theme.variants[`${variant}Hover`][color].className,
      ],
      [
        active('[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'),
        theme.variants[`${variant}Active`][color].className,
      ],
      theme.variants[`${variant}Disabled`][color].className,
      visuallyDisabled && [
        'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
        textColor(theme.variants[`${variant}Disabled`][color].tokens.color),
        backgroundColor(
          theme.variants[`${variant}Disabled`][color].tokens.backgroundColor,
        ),
        borderColor(
          theme.variants[`${variant}Disabled`][color].tokens.borderColor,
        ),
      ],
    ]),
  );
}

type IconButtonRootVariants = BaseVariants & {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingIndicator?: ReactNode;
} & {
  slotProps?: {
    root?: ComponentProps<'button'>;
    loadingIndicator?: ComponentProps<'span'>;
  };
};

type IconButtonRootProps<T> = GenericComponentPropsWithVariants<
  'button',
  IconButtonRootVariants,
  T
>;

function IconButtonRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- non-passing props ----
    // base variants
    color = 'neutral',
    size,
    variant = 'plain',

    // non-base variants
    className,
    disabled,
    loading,
    loadingIndicator,

    // slot props
    slotProps = {},

    // others
    component = 'button',
    children,
    ...otherProps
    // ---------------------------
  }: IconButtonRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotRootPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.root ?? {}).filter(([key]) => key !== 'className'),
  );
  const slotLoadingIndicatorPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.loadingIndicator ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );
  const thickness = { sm: 2, md: 3, lg: 4 }[size ?? 'md'];
  const visuallyDisabled = disabled || loading;

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        iconButtonRootVariants({
          color,
          size,
          instanceSize: size,
          variant,
          visuallyDisabled,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      disabled: visuallyDisabled,
      tabIndex: visuallyDisabled ? -1 : undefined,
      ...otherProps,
      ...slotRootPropsWithoutClassName,
    },
    <>
      {loading ? (
        <span
          className={twMerge(
            iconButtonLoadingIndicatorVariants({
              color,
              variant,
            }),
            slotProps.loadingIndicator?.className ?? '',
          )}
          {...slotLoadingIndicatorPropsWithoutClassName}
        >
          {loadingIndicator ?? (
            <CircularProgress color={color} thickness={thickness} />
          )}
        </span>
      ) : (
        children
      )}
    </>,
  );
}

export const IconButton = forwardRef(IconButtonRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: IconButtonRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

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
      variant: ['solid', 'soft', 'outlined', 'plain'],
      instanceSize: [undefined, 'sm', 'md', 'lg'],
      visuallyDisabled: [false, true],
    },
  },
];
