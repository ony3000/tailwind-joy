import { clsx } from 'clsx';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef, createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { focus, disabled, textColor, toVariableClass } from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';
import { CircularProgress } from './CircularProgress';

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
        '[padding-inline:0.75rem]',
      ],
      size === 'md' && [
        '[--Icon-fontSize:1.25rem]',
        '[--CircularProgress-size:20px]',
        '[--CircularProgress-thickness:2px]',
        '[--Button-gap:0.5rem]',
        'min-h-[var(--Button-minHeight,2.25rem)]',
        'text-[0.875rem]',
        '[padding-block:var(--Button-paddingBlock,0.375rem)]',
        '[padding-inline:1rem]',
      ],
      size === 'lg' && [
        '[--Icon-fontSize:1.5rem]',
        '[--CircularProgress-size:28px]',
        '[--CircularProgress-thickness:4px]',
        '[--Button-gap:0.75rem]',
        'min-h-[var(--Button-minHeight,2.75rem)]',
        'text-[1rem]',
        '[padding-block:var(--Button-paddingBlock,0.5rem)]',
        '[padding-inline:1.5rem]',
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
          'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
        ),
        !invisibleChildren && colorTokens[color][`${variant}DisabledColor`],
        colorTokens[color][`${variant}DisabledBg`],
        colorTokens[color][`${variant}DisabledBorder`],
      ],
      invisibleChildren && 'text-transparent',
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
} & {
  slotProps?: {
    root?: ComponentProps<'button'>;
    startDecorator?: ComponentProps<'span'>;
    endDecorator?: ComponentProps<'span'>;
    loadingIndicatorCenter?: ComponentProps<'span'>;
  };
};

type ButtonRootProps = GenericComponentPropsWithVariants<
  'button',
  ButtonRootVariants
>;

export const Button = forwardRef(function ButtonRoot(
  {
    // ---- non-passing props ----
    // base variants
    color = 'primary',
    size = 'md',
    variant = 'solid',

    // non-base variants
    className,
    disabled,
    endDecorator,
    fullWidth,
    loading,
    loadingIndicator,
    loadingPosition = 'center',
    startDecorator,

    // slot props
    slotProps = {},

    // others
    component = 'button',
    children,
    ...otherProps
    // ---------------------------
  }: ButtonRootProps,
  ref,
) {
  const slotRootPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.root ?? {}).filter(([key]) => key !== 'className'),
  );
  const slotStartDecoratorPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.startDecorator ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );
  const slotEndDecoratorPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.endDecorator ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );
  const slotLoadingIndicatorCenterPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.loadingIndicatorCenter ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );
  const thickness = { sm: 2, md: 3, lg: 4 }[size ?? 'md'];
  const instanceLoadingIndicator = loadingIndicator ?? (
    <CircularProgress color={color} thickness={thickness} />
  );

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        buttonRootVariants({
          color,
          fullWidth,
          size,
          variant,
          invisibleChildren: loading && loadingPosition === 'center',
        }),
        className,
      ),
      disabled: disabled || loading,
      ...otherProps,
      ...slotRootPropsWithoutClassName,
    },
    <>
      {(startDecorator || (loading && loadingPosition === 'start')) && (
        <span
          className={twMerge(
            buttonStartDecoratorVariants(),
            slotProps.startDecorator?.className ?? '',
          )}
          {...slotStartDecoratorPropsWithoutClassName}
        >
          {loading ? instanceLoadingIndicator : startDecorator}
        </span>
      )}
      {children}
      {loading && loadingPosition === 'center' && (
        <span
          className={twMerge(
            buttonLoadingIndicatorCenterVariants({
              color,
              variant,
            }),
            slotProps.loadingIndicatorCenter?.className ?? '',
          )}
          {...slotLoadingIndicatorCenterPropsWithoutClassName}
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
          {...slotEndDecoratorPropsWithoutClassName}
        >
          {loading ? instanceLoadingIndicator : endDecorator}
        </span>
      )}
    </>,
  );
});

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
