import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, createElement, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { r } from '../base/alias';
import {
  addPrefix,
  borderColor,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { theme } from '../base/theme';
import { excludeClassName } from '../base/utils';

function circularProgressRootVariants(
  props?: BaseVariants & {
    /**
     * The explicit `size` provided to the component.
     */
    instanceSize?: BaseVariants['size'];
  },
) {
  const {
    color = 'primary',
    size = 'md',
    variant = 'soft',
    instanceSize,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-circular-progress-root group/tj-circular-progress',
      r`[--Icon-fontSize:calc(0.4*var(--\_root-size))]`,
      toVariableClass(
        theme.variants[variant][color].tokens.backgroundColor,
        'CircularProgress-trackColor',
      ),
      toVariableClass(
        theme.variants[variant][color].tokens.color,
        'CircularProgress-progressColor',
      ),
      '[--CircularProgress-linecap:round]',
      size === 'sm' && [
        '[--_root-size:var(--CircularProgress-size,24px)]',
        '[--_track-thickness:var(--CircularProgress-trackThickness,var(--CircularProgress-thickness,3px))]',
        '[--_progress-thickness:var(--CircularProgress-progressThickness,var(--CircularProgress-thickness,3px))]',
      ],
      instanceSize === 'sm' && '[--CircularProgress-size:24px]',
      size === 'md' && [
        '[--_track-thickness:var(--CircularProgress-trackThickness,var(--CircularProgress-thickness,6px))]',
        '[--_progress-thickness:var(--CircularProgress-progressThickness,var(--CircularProgress-thickness,6px))]',
        '[--_root-size:var(--CircularProgress-size,40px)]',
      ],
      instanceSize === 'md' && '[--CircularProgress-size:40px]',
      size === 'lg' && [
        '[--_track-thickness:var(--CircularProgress-trackThickness,var(--CircularProgress-thickness,8px))]',
        '[--_progress-thickness:var(--CircularProgress-progressThickness,var(--CircularProgress-thickness,8px))]',
        '[--_root-size:var(--CircularProgress-size,64px)]',
      ],
      instanceSize === 'lg' && '[--CircularProgress-size:64px]',
      r`[--_thickness-diff:calc(var(--\_track-thickness)-var(--\_progress-thickness))]`,
      r`[--_inner-size:calc(var(--\_root-size)-2*var(--variant-borderWidth,0px))]`,
      r`[--_outlined-inset:max(var(--\_track-thickness),var(--\_progress-thickness))]`,
      r`w-[var(--\_root-size)]`,
      r`h-[var(--\_root-size)]`,
      r`rounded-[var(--\_root-size)]`,
      r`m-[var(--CircularProgress-margin)]`,
      'box-border',
      'inline-flex',
      'justify-center',
      'items-center',
      'shrink-0',
      'relative',
      textColor(theme.variants[variant][color].tokens.color),
      ['font-medium', r`text-[calc(0.2*var(--\_root-size))]`],
      [
        variant === 'outlined'
          ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
          : '[--variant-borderWidth:0px]',
        borderColor(theme.variants[variant][color].tokens.borderColor),
      ],
      variant === 'outlined' && [
        addPrefix(
          clsx([
            'content-[""]',
            'block',
            'absolute',
            'rounded-[inherit]',
            r`inset-[var(--\_outlined-inset)]`,
            [
              variant === 'outlined'
                ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
                : '[--variant-borderWidth:0px]',
              borderColor(theme.variants[variant][color].tokens.borderColor),
            ],
          ]),
          'before:',
        ),
      ],
      variant === 'soft' && [
        toVariableClass(
          theme.variants.soft.neutral.tokens.backgroundColor,
          'CircularProgress-trackColor',
        ),
        toVariableClass(
          theme.variants.solid[color].tokens.backgroundColor,
          'CircularProgress-progressColor',
        ),
      ],
      variant === 'solid' && [
        toVariableClass(
          theme.variants.softHover[color].tokens.backgroundColor,
          'CircularProgress-trackColor',
        ),
        toVariableClass(
          theme.variants.solid[color].tokens.backgroundColor,
          'CircularProgress-progressColor',
        ),
      ],
    ]),
  );
}

function circularProgressSvgVariants() {
  return twMerge(
    clsx([
      'tj-circular-progress-svg',
      'w-[inherit]',
      'h-[inherit]',
      '[display:inherit]',
      '[box-sizing:inherit]',
      'absolute',
      'top-[calc(-1*var(--variant-borderWidth,0px))]',
      'left-[calc(-1*var(--variant-borderWidth,0px))]',
    ]),
  );
}

function circularProgressTrackVariants() {
  return twMerge(
    clsx([
      'tj-circular-progress-track',
      '[cx:50%]',
      '[cy:50%]',
      r`[r:calc(var(--\_inner-size)/2-var(--\_track-thickness)/2+min(0px,var(--\_thickness-diff)/2))]`,
      'fill-transparent',
      r`[stroke-width:var(--\_track-thickness)]`,
      'stroke-[var(--CircularProgress-trackColor)]',
    ]),
  );
}

function circularProgressProgressVariants(props?: { determinate?: boolean }) {
  const { determinate = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-circular-progress-progress',
      r`[--_progress-radius:calc(var(--\_inner-size)/2-var(--\_progress-thickness)/2-max(0px,var(--\_thickness-diff)/2))]`,
      r`[--_progress-length:calc(2*var(--pi)*var(--\_progress-radius))]`,
      '[cx:50%]',
      '[cy:50%]',
      r`[r:var(--\_progress-radius)]`,
      'fill-transparent',
      r`[stroke-width:var(--\_progress-thickness)]`,
      'stroke-[var(--CircularProgress-progressColor)]',
      '[stroke-linecap:var(--CircularProgress-linecap,round)]',
      r`[stroke-dasharray:var(--\_progress-length)]`,
      r`[stroke-dashoffset:calc(var(--\_progress-length)*(1-var(--CircularProgress-percent)/100))]`,
      'origin-center',
      '-rotate-90',
      !determinate && 'animate-joy-circulate',
    ]),
  );
}

type CircularProgressRootVariants = BaseVariants & {
  determinate?: boolean;
  thickness?: number;
  value?: number;
} & {
  slotProps?: {
    root?: ComponentProps<'span'>;
    svg?: ComponentProps<'svg'>;
    track?: ComponentProps<'circle'>;
    progress?: ComponentProps<'circle'>;
  };
};

type CircularProgressRootProps<T> = GenericComponentPropsWithVariants<
  'span',
  CircularProgressRootVariants,
  T
>;

function CircularProgressRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- non-passing props ----
    // base variants
    color = 'primary',
    size,
    variant = 'soft',

    // non-base variants
    className,
    determinate,
    style,
    thickness,
    value = determinate ? 0 : 25,

    // slot props
    slotProps = {},

    // others
    component = 'span',
    children,
    ...otherProps
    // ---------------------------
  }: CircularProgressRootProps<T>,
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
        circularProgressRootVariants({
          color,
          size,
          variant,
          instanceSize: size,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      style: {
        ...style,
        ...(thickness === undefined
          ? {}
          : {
              '--_track-thickness': `${thickness}px`,
              '--_progress-thickness': `${thickness}px`,
            }),
        '--CircularProgress-percent': value,
      },
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    <>
      <svg
        className={twMerge(
          circularProgressSvgVariants(),
          slotProps.svg?.className ?? '',
        )}
        {...(slotPropsWithoutClassName.svg ?? {})}
      >
        <circle
          className={twMerge(
            circularProgressTrackVariants(),
            slotProps.track?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.track ?? {})}
        />
        <circle
          className={twMerge(
            circularProgressProgressVariants({ determinate }),
            slotProps.progress?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.progress ?? {})}
        />
      </svg>
      {children}
    </>,
  );
}

export const CircularProgress = forwardRef(CircularProgressRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: CircularProgressRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: circularProgressRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      instanceSize: [undefined, 'sm', 'md', 'lg'],
    },
  },
  {
    generatorFn: circularProgressSvgVariants,
    variants: {},
  },
  {
    generatorFn: circularProgressTrackVariants,
    variants: {},
  },
  {
    generatorFn: circularProgressProgressVariants,
    variants: {
      determinate: [false, true],
    },
  },
];
