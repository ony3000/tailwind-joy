import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import { forwardRef, createElement, useContext, useMemo } from 'react';
import { twMerge } from '../base/alias';
import {
  addPrefix,
  hover,
  focus,
  active,
  disabled,
  backgroundColor,
  borderColor,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens, colorTokens } from '../base/tokens';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { excludeClassName } from '../base/utils';
import { ButtonGroupContext } from './ButtonGroup';
import { CircularProgress } from './CircularProgress';
import { ToggleButtonGroupContext } from './ToggleButtonGroup';

function buttonStartDecoratorVariants() {
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

function buttonEndDecoratorVariants() {
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

function buttonLoadingIndicatorCenterVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'>,
) {
  const { color = 'primary', variant = 'solid' } = props ?? {};

  return twMerge(
    clsx([
      'tj-button-loading-indicator-center',
      '[display:inherit]',
      'absolute',
      'left-1/2',
      '-translate-x-1/2',

      // NOTE: It is disabled by default because the indicator is only activated when `loading: true`. So I didn't specify a color class name for the enabled state.
      textColor(theme.variants[`${variant}Disabled`][color].tokens.color),
    ]),
  );
}

function buttonRootVariants(
  props?: BaseVariants & {
    fullWidth?: boolean;
    invisibleChildren?: boolean;
    visuallyDisabled?: boolean;
  },
) {
  const {
    color = 'primary',
    size = 'md',
    variant = 'solid',
    fullWidth = false,
    invisibleChildren = false,
    visuallyDisabled = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-button-root group/tj-button',
      '[--Icon-margin:initial]',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      size === 'sm' && [
        '[--Icon-fontSize:1.125rem]',
        '[--CircularProgress-size:20px]',
        '[--CircularProgress-thickness:2px]',
        '[--Button-gap:0.375rem]',
        'min-h-[var(--Button-minHeight,2rem)]',
        'text-[0.875rem]',
        '[padding-block:var(--Button-paddingBlock,0.25rem)]',
        'ps-[0.75rem] pe-[0.75rem]',
      ],
      size === 'md' && [
        '[--Icon-fontSize:1.25rem]',
        '[--CircularProgress-size:20px]',
        '[--CircularProgress-thickness:2px]',
        '[--Button-gap:0.5rem]',
        'min-h-[var(--Button-minHeight,2.25rem)]',
        'text-[0.875rem]',
        '[padding-block:var(--Button-paddingBlock,0.375rem)]',
        'ps-[1rem] pe-[1rem]',
      ],
      size === 'lg' && [
        '[--Icon-fontSize:1.5rem]',
        '[--CircularProgress-size:28px]',
        '[--CircularProgress-thickness:4px]',
        '[--Button-gap:0.75rem]',
        'min-h-[var(--Button-minHeight,2.75rem)]',
        'text-[1rem]',
        '[padding-block:var(--Button-paddingBlock,0.5rem)]',
        'ps-[1.5rem] pe-[1.5rem]',
      ],
      '[-webkit-tap-highlight-color:transparent]',
      'box-border',
      'rounded-[var(--Button-radius,6px)]',
      'm-[var(--Button-margin)]',
      'border-0',
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
      theme.variants[variant][color].className,
      theme.variants[`${variant}Hover`][color].className,
      theme.variants[`${variant}Active`][color].className,
      !visuallyDisabled && [
        addPrefix(
          clsx([
            textColor(theme.variants[`${variant}Active`][color].tokens.color),
            backgroundColor(
              theme.variants[`${variant}Active`][color].tokens.backgroundColor,
            ),
            borderColor(
              theme.variants[`${variant}Active`][color].tokens.borderColor,
            ),
          ]),
          '[&]:aria-pressed:',
        ),
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
      invisibleChildren && [
        'text-transparent dark:text-transparent',
        hover('text-transparent dark:text-transparent'),
        active('text-transparent dark:text-transparent'),
        disabled('text-transparent dark:text-transparent'),
      ],
    ]),
  );
}

type ButtonRootVariants = BaseVariants & {
  className?: string;
  disabled?: boolean;
  endDecorator?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  loadingIndicator?: ReactNode;
  loadingPosition?: 'center' | 'start' | 'end';
  startDecorator?: ReactNode;
  value?: string;
} & {
  slotProps?: {
    root?: ComponentProps<'button'>;
    startDecorator?: ComponentProps<'span'>;
    endDecorator?: ComponentProps<'span'>;
    loadingIndicatorCenter?: ComponentProps<'span'>;
  };
};

type ButtonRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ButtonRootVariants
> &
  ButtonRootVariants;

function ButtonRoot<T extends ReactTags = 'button'>(
  {
    // ---- non-passing props ----
    // base variants
    color,
    size,
    variant,

    // non-base variants
    className,
    disabled,
    endDecorator,
    fullWidth,
    loading,
    loadingIndicator,
    loadingPosition = 'center',
    onClick,
    startDecorator,
    value,

    // slot props
    slotProps = {},

    // others
    component = 'button',
    children,
    ...otherProps
    // ---------------------------
  }: ButtonRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const buttonGroup = useContext(ButtonGroupContext);
  const toggleButtonGroup = useContext(ToggleButtonGroupContext);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const refinedColor = color ?? buttonGroup.color ?? 'primary';
  const refinedSize = size ?? buttonGroup.size ?? 'md';
  const refinedVariant = variant ?? buttonGroup.variant ?? 'solid';
  const refinedDisabled =
    (disabled || loading) ??
    (loading || disabled) ??
    buttonGroup.disabled ??
    false;

  const thickness = { sm: 2, md: 3, lg: 4 }[refinedSize];
  const instanceLoadingIndicator = loadingIndicator ?? (
    <CircularProgress color={refinedColor} thickness={thickness} />
  );

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        buttonRootVariants({
          color: refinedColor,
          fullWidth,
          size: refinedSize,
          variant: refinedVariant,
          invisibleChildren: loading && loadingPosition === 'center',
          visuallyDisabled: refinedDisabled,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      disabled: refinedDisabled,
      tabIndex: refinedDisabled ? -1 : undefined,
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
      onClick: (e) => {
        if (slotPropsWithoutClassName.root?.onClick) {
          slotPropsWithoutClassName.root.onClick(
            // @ts-expect-error
            e,
          );
        } else if (onClick) {
          onClick(
            // @ts-expect-error
            e,
          );
        }

        if (toggleButtonGroup?.onClick) {
          toggleButtonGroup.onClick(
            // @ts-expect-error
            e,
            value,
          );
        }
      },
      'aria-pressed':
        toggleButtonGroup.value === undefined
          ? undefined
          : Array.isArray(toggleButtonGroup.value)
            ? toggleButtonGroup.value.includes(
                // @ts-expect-error
                value,
              )
            : toggleButtonGroup.value === value,
    },
    <>
      {(startDecorator || (loading && loadingPosition === 'start')) && (
        <span
          className={twMerge(
            buttonStartDecoratorVariants(),
            slotProps.startDecorator?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.startDecorator ?? {})}
        >
          {loading ? instanceLoadingIndicator : startDecorator}
        </span>
      )}
      {children}
      {loading && loadingPosition === 'center' && (
        <span
          className={twMerge(
            buttonLoadingIndicatorCenterVariants({
              color: refinedColor,
              variant: refinedVariant,
            }),
            slotProps.loadingIndicatorCenter?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.loadingIndicatorCenter ?? {})}
        >
          {instanceLoadingIndicator}
        </span>
      )}
      {(endDecorator || (loading && loadingPosition === 'end')) && (
        <span
          className={twMerge(
            buttonEndDecoratorVariants(),
            slotProps.endDecorator?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.endDecorator ?? {})}
        >
          {loading ? instanceLoadingIndicator : endDecorator}
        </span>
      )}
    </>,
  );
}

export const Button = forwardRef(ButtonRoot) as <
  T extends ReactTags = 'button',
>(
  props: ButtonRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

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
      visuallyDisabled: [false, true],
    },
  },
];
