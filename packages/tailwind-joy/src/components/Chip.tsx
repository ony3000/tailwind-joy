import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import { createContext, forwardRef, createElement, useMemo } from 'react';
import { r, twMerge } from '../base/alias';
import {
  focus,
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
import { VariantColorContext } from './internal/contexts';

type PassingProps = Pick<ComponentProps<'button'>, 'disabled' | 'onClick'>;

export const ChipContext = createContext<{ disabled?: boolean }>({});

function chipRootVariants(
  props?: BaseVariants & {
    borderRadius?: boolean;
    clickable?: boolean;
    visuallyDisabled?: boolean;
  },
) {
  const {
    color = 'neutral',
    size = 'md',
    variant = 'soft',
    borderRadius = false,
    clickable = false,
    visuallyDisabled = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-chip-root group/tj-chip',
      r`[--Chip-decoratorChildOffset:min(calc(var(--Chip-paddingInline)-(var(--\_Chip-minHeight)-2*var(--variant-borderWidth,0px)-var(--Chip-decoratorChildHeight))/2),var(--Chip-paddingInline))]`,
      r`[--Chip-decoratorChildRadius:max(var(--\_Chip-radius)-var(--variant-borderWidth,0px)-var(--\_Chip-paddingBlock),min(var(--\_Chip-paddingBlock)+var(--variant-borderWidth,0px),var(--\_Chip-radius)/2))]`,
      '[--Chip-deleteRadius:var(--Chip-decoratorChildRadius)]',
      '[--Chip-deleteSize:var(--Chip-decoratorChildHeight)]',
      '[--Avatar-radius:var(--Chip-decoratorChildRadius)]',
      '[--Avatar-size:var(--Chip-decoratorChildHeight)]',
      '[--Icon-margin:initial]',
      '[--Icon-color:currentColor]',
      r`[--unstable_actionRadius:var(--\_Chip-radius)]`,
      size === 'sm' && [
        '[--Chip-paddingInline:0.375rem]',
        r`[--Chip-decoratorChildHeight:calc(var(--\_Chip-minHeight)-2*var(--variant-borderWidth))]`,
        '[--Icon-fontSize:0.875rem]',
        '[--_Chip-minHeight:var(--Chip-minHeight,1.25rem)]',
        'gap-[3px]',
      ],
      size === 'md' && [
        '[--Chip-paddingInline:0.5rem]',
        r`[--Chip-decoratorChildHeight:calc(var(--\_Chip-minHeight)-0.25rem-2*var(--variant-borderWidth))]`,
        '[--Icon-fontSize:1rem]',
        '[--_Chip-minHeight:var(--Chip-minHeight,1.5rem)]',
        'gap-[0.25rem]',
      ],
      size === 'lg' && [
        '[--Chip-paddingInline:0.75rem]',
        r`[--Chip-decoratorChildHeight:calc(var(--\_Chip-minHeight)-0.375rem-2*var(--variant-borderWidth))]`,
        '[--Icon-fontSize:1.125rem]',
        '[--_Chip-minHeight:var(--Chip-minHeight,1.75rem)]',
        'gap-[0.375rem]',
      ],
      '[--_Chip-radius:var(--Chip-radius,1.5rem)]',
      r`[--_Chip-paddingBlock:max((var(--\_Chip-minHeight)-2*var(--variant-borderWidth,0px)-var(--Chip-decoratorChildHeight))/2,0px)]`,
      r`min-h-[var(--\_Chip-minHeight)]`,
      'max-w-max',
      'ps-[var(--Chip-paddingInline)] pe-[var(--Chip-paddingInline)]',
      r`rounded-[var(--\_Chip-radius)]`,
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'whitespace-nowrap',
      'no-underline',
      'align-middle',
      'box-border',
      size === 'sm' && theme.typography['body-xs'].className,
      size === 'md' && theme.typography['body-sm'].className,
      size === 'lg' && theme.typography['body-md'].className,
      'font-medium',
      !clickable
        ? [
            colorTokens.background.surface,
            theme.variants[variant][color].className,
            visuallyDisabled && [
              'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
              textColor(
                theme.variants[`${variant}Disabled`][color].tokens.color,
              ),
              backgroundColor(
                theme.variants[`${variant}Disabled`][color].tokens
                  .backgroundColor,
              ),
              borderColor(
                theme.variants[`${variant}Disabled`][color].tokens.borderColor,
              ),
            ],
          ]
        : [
            '[--variant-borderWidth:0px]',
            textColor(theme.variants[variant][color].tokens.color),
            visuallyDisabled &&
              textColor(
                theme.variants[`${variant}Disabled`][color].tokens.color,
              ),
          ],
      borderRadius && '[--_Chip-radius:var(--tj-Chip-borderRadius)]',
    ]),
  );
}

function chipLabelVariants(props?: { clickable?: boolean }) {
  const { clickable = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-chip-label',
      'inline-block',
      'overflow-hidden',
      'text-ellipsis',
      'order-1',
      '[min-inline-size:0]',
      'grow',
      clickable && ['z-[1]', 'pointer-events-none'],
    ]),
  );
}

function chipActionVariants(props?: Pick<BaseVariants, 'color' | 'variant'>) {
  const { color = 'neutral', variant = 'soft' } = props ?? {};

  return twMerge(
    clsx([
      'tj-chip-action',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      'absolute',
      'z-0',
      'inset-0',
      'w-full',
      'border-none',
      'cursor-pointer',
      'p-[initial]',
      'm-[initial]',
      'bg-[color:initial]',
      'no-underline',
      'rounded-[inherit]',
      [focus('outline-2 outline outline-offset-2'), colorTokens.focusVisible],
      [
        colorTokens.background.surface,
        theme.variants[variant][color].className,
      ],
      theme.variants[`${variant}Hover`][color].className,
      theme.variants[`${variant}Active`][color].className,
      theme.variants[`${variant}Disabled`][color].className,
    ]),
  );
}

function chipStartDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-chip-start-decorator',
      '[--Avatar-marginInlineStart:calc(var(--Chip-decoratorChildOffset)*-1)]',
      '[--IconButton-margin:0_calc(-1*var(--Chip-paddingInline)/3)_0_calc(var(--Chip-decoratorChildOffset)*-1)]',
      '[--Icon-margin:0_0_0_calc(var(--Chip-paddingInline)/-4)]',
      '[display:inherit]',
      'order-none',
      'z-[1]',
      'pointer-events-none',
    ]),
  );
}

function chipEndDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-chip-end-decorator',
      '[--IconButton-margin:0_calc(var(--Chip-decoratorChildOffset)*-1)_0_calc(-1*var(--Chip-paddingInline)/3)]',
      '[--Icon-margin:0_calc(var(--Chip-paddingInline)/-4)_0_0]',
      '[display:inherit]',
      'order-2',
      'z-[1]',
      'pointer-events-none',
    ]),
  );
}

type ChipRootVariants = BaseVariants & {
  endDecorator?: ReactNode;
  startDecorator?: ReactNode;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
    label?: ComponentProps<'span'>;
    action?: ComponentProps<'button'>;
    startDecorator?: ComponentProps<'span'>;
    endDecorator?: ComponentProps<'span'>;
  };
} & PassingProps;

type ChipRootProps<T> = GenericComponentPropsWithVariants<
  'div',
  ChipRootVariants,
  T
>;

function ChipRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- passing props ----
    disabled = false,
    onClick,
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color = 'neutral',
    size = 'md',
    variant = 'soft',

    // non-base variants
    className,
    endDecorator,
    startDecorator,
    style,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: ChipRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const resolvedClassNames = twMerge(className).split(' ');
  const resolvedBorderRadiusWithArbitraryValue = useMemo(() => {
    const regExp = /^rounded-\[([^\]]+)\]$/;

    return resolvedClassNames
      .filter((text) => regExp.test(text))
      .at(0)
      ?.replace(regExp, '$1');
  }, [resolvedClassNames]);
  const resolvedBorderRadiusWithArbitraryProperty = useMemo(() => {
    const regExp = /^\[border-radius:([^\]]+)\]$/;

    return resolvedClassNames
      .filter((text) => regExp.test(text))
      .at(0)
      ?.replace(regExp, '$1');
  }, [resolvedClassNames]);

  const instanceBorderRadius =
    resolvedBorderRadiusWithArbitraryProperty ||
    resolvedBorderRadiusWithArbitraryValue;
  const instanceClickable = Boolean(onClick) || Boolean(slotProps.action);
  const visuallyDisabled = Boolean(disabled);

  return (
    <ChipContext.Provider value={{ disabled }}>
      <VariantColorContext.Provider value={{ color, variant }}>
        {createElement(
          component,
          {
            ref,
            className: twMerge(
              chipRootVariants({
                color,
                size,
                variant,
                borderRadius: instanceBorderRadius !== undefined,
                clickable: instanceClickable,
                visuallyDisabled,
              }),
              className,
              slotProps.root?.className ?? '',
            ),
            style: {
              ...style,
              '--tj-Chip-borderRadius': instanceBorderRadius,
            },
            ...otherProps,
            ...(slotPropsWithoutClassName.root ?? {}),
          },
          <>
            {instanceClickable && (
              <button
                type="button"
                className={twMerge(
                  chipActionVariants({ color, variant }),
                  slotProps.action?.className ?? '',
                )}
                {...{
                  disabled,
                  onClick,
                }}
                {...(slotPropsWithoutClassName.action ?? {})}
              />
            )}
            <span
              className={twMerge(
                chipLabelVariants({
                  clickable: instanceClickable,
                }),
                slotProps.label?.className ?? '',
              )}
              {...(slotPropsWithoutClassName.label ?? {})}
            >
              {children}
            </span>
            {startDecorator && (
              <span
                className={twMerge(
                  chipStartDecoratorVariants(),
                  slotProps.startDecorator?.className ?? '',
                )}
                {...(slotPropsWithoutClassName.startDecorator ?? {})}
              >
                {startDecorator}
              </span>
            )}
            {endDecorator && (
              <span
                className={twMerge(
                  chipEndDecoratorVariants(),
                  slotProps.endDecorator?.className ?? '',
                )}
                {...(slotPropsWithoutClassName.endDecorator ?? {})}
              >
                {endDecorator}
              </span>
            )}
          </>,
        )}
      </VariantColorContext.Provider>
    </ChipContext.Provider>
  );
}

export const Chip = forwardRef(ChipRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: ChipRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: chipRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      borderRadius: [false, true],
      clickable: [false, true],
      visuallyDisabled: [false, true],
    },
  },
  {
    generatorFn: chipLabelVariants,
    variants: {
      clickable: [false, true],
    },
  },
  {
    generatorFn: chipActionVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
    },
  },
  {
    generatorFn: chipStartDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: chipEndDecoratorVariants,
    variants: {},
  },
];
