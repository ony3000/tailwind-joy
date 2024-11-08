import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, createElement, useMemo } from 'react';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { r, twMerge } from '../base/alias';
import { addPrefix, backgroundColor, textColor } from '../base/modifier';
import { theme } from '../base/theme';
import { excludeClassName } from '../base/utils';

function linearProgressRootVariants(
  props?: BaseVariants & {
    determinate?: boolean;
  },
) {
  const {
    color = 'primary',
    size = 'md',
    variant = 'soft',
    determinate = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-linear-progress-root group/tj-linear-progress',
      '[--LinearProgress-radius:var(--LinearProgress-thickness)]',
      '[--LinearProgress-progressThickness:var(--LinearProgress-thickness)]',
      r`[--LinearProgress-progressRadius:max(var(--LinearProgress-radius)-var(--\_LinearProgress-padding),min(var(--\_LinearProgress-padding)/2,var(--LinearProgress-radius)/2))]`,
      size === 'sm' && '[--LinearProgress-thickness:4px]',
      size === 'md' && '[--LinearProgress-thickness:6px]',
      size === 'lg' && '[--LinearProgress-thickness:8px]',
      !determinate && [
        '[--LinearProgress-progressMinWidth:calc(var(--LinearProgress-percent)*1%/2)]',
        '[--LinearProgress-progressMaxWidth:calc(var(--LinearProgress-percent)*1%)]',
        r`[--_LinearProgress-progressLeft:calc(100%-var(--LinearProgress-progressMinWidth)-var(--\_LinearProgress-progressInset))]`,
        '[--_LinearProgress-progressInset:calc(var(--LinearProgress-thickness)/2-var(--LinearProgress-progressThickness)/2)]',
      ],
      '[min-block-size:var(--LinearProgress-thickness)]',
      'box-border',
      'rounded-[var(--LinearProgress-radius)]',
      'flex',
      'justify-center',
      'items-center',
      'flex-1',
      r`p-[var(--\_LinearProgress-padding)]`,
      'relative',
      theme.variants[variant][color].className,
      '[--_LinearProgress-padding:max((var(--LinearProgress-thickness)-2*var(--variant-borderWidth,0px)-var(--LinearProgress-progressThickness))/2,0px)]',
      addPrefix(
        clsx([
          'content-[""]',
          'block',
          '[box-sizing:inherit]',
          '[block-size:var(--LinearProgress-progressThickness)]',
          'rounded-[var(--LinearProgress-progressRadius)]',
          'bg-current',
          'text-inherit',
          'absolute',
        ]),
        'before:',
      ),
      variant === 'soft' && [
        backgroundColor(theme.variants.soft.neutral.tokens.backgroundColor),
        textColor(theme.variants.solid[color].tokens.backgroundColor),
      ],
      variant === 'solid' && [
        backgroundColor(theme.variants.softHover[color].tokens.backgroundColor),
        textColor(theme.variants.solid[color].tokens.backgroundColor),
      ],
      determinate
        ? addPrefix(
            clsx([
              r`left-[var(--\_LinearProgress-padding)]`,
              r`[inline-size:calc(var(--LinearProgress-percent)*1%-2*var(--\_LinearProgress-padding))]`,
            ]),
            'before:',
          )
        : 'before:animate-joy-linear-circulate',
    ]),
  );
}

type LinearProgressRootVariants = BaseVariants & {
  determinate?: boolean;
  thickness?: number;
  value?: number;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
};

type LinearProgressRootProps<T> = GenericComponentPropsWithVariants<
  'div',
  LinearProgressRootVariants,
  T
>;

function LinearProgressRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- non-passing props ----
    // base variants
    color = 'primary',
    size = 'md',
    variant = 'soft',

    // non-base variants
    className,
    determinate,
    style,
    thickness,
    value,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: LinearProgressRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  return createElement(
    component,
    {
      ref,
      role: 'progressbar',
      className: twMerge(
        linearProgressRootVariants({
          color,
          size,
          variant,
          determinate,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      style: {
        ...style,
        ...(thickness === undefined
          ? {}
          : {
              '--LinearProgress-thickness': `${thickness}px`,
            }),
        '--LinearProgress-percent': value ?? (determinate ? 0 : 25),
      },
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    children,
  );
}

export const LinearProgress = forwardRef(LinearProgressRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: LinearProgressRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: linearProgressRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      determinate: [false, true],
    },
  },
];
