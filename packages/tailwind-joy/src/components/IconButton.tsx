import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import { forwardRef, createElement, useContext, useMemo } from 'react';
import { twMerge } from '../base/alias';
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
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '../base/types';
import { excludeClassName } from '../base/utils';
import { ButtonGroupContext } from './ButtonGroup';
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

export function iconButtonRootVariants(
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
    size,
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
        'ps-[2px] pe-[2px]',
      ],
      size === 'md' && [
        '[--Icon-fontSize:calc(var(--IconButton-size,2.25rem)/1.5)]',
        '[--CircularProgress-size:20px]',
        '[--CircularProgress-thickness:2px]',
        'min-w-[var(--IconButton-size,2.25rem)]',
        'min-h-[var(--IconButton-size,2.25rem)]',
        'text-[1rem]',
        'ps-[0.25rem] pe-[0.25rem]',
      ],
      size === 'lg' && [
        '[--Icon-fontSize:calc(var(--IconButton-size,2.75rem)/1.571)]',
        '[--CircularProgress-size:28px]',
        '[--CircularProgress-thickness:4px]',
        'min-w-[var(--IconButton-size,2.75rem)]',
        'min-h-[var(--IconButton-size,2.75rem)]',
        'text-[1.125rem]',
        'ps-[0.375rem] pe-[0.375rem]',
      ],
      '[-webkit-tap-highlight-color:transparent]',
      '[padding-block:0]',
      'font-medium',
      'm-[var(--IconButton-margin)]',
      'rounded-[var(--IconButton-radius,6px)]',
      'border-0',
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
    color,
    size,
    variant,

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
  const buttonGroup = useContext(ButtonGroupContext);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const refinedColor = color ?? buttonGroup.color ?? 'neutral';
  const refinedSize = size ?? buttonGroup.size ?? 'md';
  const refinedVariant = variant ?? buttonGroup.variant ?? 'plain';
  const refinedDisabled =
    (disabled || loading) ?? buttonGroup.disabled ?? false;

  const thickness = { sm: 2, md: 3, lg: 4 }[refinedSize];

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        iconButtonRootVariants({
          color: refinedColor,
          size: refinedSize,
          instanceSize: size,
          variant: refinedVariant,
          visuallyDisabled: refinedDisabled,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      disabled: refinedDisabled,
      tabIndex: refinedDisabled ? -1 : undefined,
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    <>
      {loading ? (
        <span
          className={twMerge(
            iconButtonLoadingIndicatorVariants({
              color: refinedColor,
              variant: refinedVariant,
            }),
            slotProps.loadingIndicator?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.loadingIndicator ?? {})}
        >
          {loadingIndicator ?? (
            <CircularProgress color={refinedColor} thickness={thickness} />
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
      size: [undefined, 'sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      instanceSize: [undefined, 'sm', 'md', 'lg'],
      visuallyDisabled: [false, true],
    },
  },
];
