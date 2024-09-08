import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import { join, addPrefix, toVariableClass } from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';

function circularProgressSvgVariants(props?: BaseVariants) {
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

function circularProgressTrackVariants(props?: BaseVariants) {
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

function circularProgressProgressVariants(
  props?: BaseVariants & {
    determinate?: boolean;
  },
) {
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
        baseTokens[color][`${variant}Bg`],
        'CircularProgress-trackColor',
      ),
      toVariableClass(
        baseTokens[color][`${variant}Color`],
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
      colorTokens[color][`${variant}Color`],
      'font-medium',
      r`text-[calc(0.2*var(--\_root-size))]`,
      [
        variant === 'outlined'
          ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
          : '[--variant-borderWidth:0px]',
        colorTokens[color][`${variant}Border`],
      ],
      variant === 'outlined' && [
        addPrefix(
          join([
            'content-[""]',
            'block',
            'absolute',
            'rounded-[inherit]',
            r`inset-[var(--\_outlined-inset)]`,
            join([
              variant === 'outlined'
                ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
                : '[--variant-borderWidth:0px]',
              colorTokens[color][`${variant}Border`],
            ]),
          ]),
          'before:',
        ),
      ],
      variant === 'soft' && [
        toVariableClass(
          baseTokens.neutral.softBg,
          'CircularProgress-trackColor',
        ),
        toVariableClass(
          baseTokens[color].solidBg,
          'CircularProgress-progressColor',
        ),
      ],
      variant === 'solid' && [
        toVariableClass(
          baseTokens[color].softHoverBg,
          'CircularProgress-trackColor',
        ),
        toVariableClass(
          baseTokens[color].solidBg,
          'CircularProgress-progressColor',
        ),
      ],
    ]),
  );
}

interface CircularProgressRootVariants extends BaseVariants {
  determinate?: boolean;
  thickness?: number;
  value?: number;
}

type CircularProgressRootProps = Omit<
  ComponentProps<'span'>,
  keyof CircularProgressRootVariants
> &
  CircularProgressRootVariants;

export const CircularProgress = forwardRef<
  HTMLSpanElement,
  CircularProgressRootProps
>(function CircularProgressRoot(
  {
    children,
    className,
    style,
    color = 'primary',
    size,
    variant = 'soft',
    thickness,
    determinate,
    value = determinate ? 0 : 25,
    ...otherProps
  },
  ref,
) {
  return (
    <span
      ref={ref}
      role="progressbar"
      className={twMerge(
        circularProgressRootVariants({
          color,
          size,
          instanceSize: size,
          variant,
        }),
        className,
      )}
      {...otherProps}
      style={{
        ...style,
        ...(thickness === undefined
          ? {}
          : {
              '--_track-thickness': `${thickness}px`,
              '--_progress-thickness': `${thickness}px`,
            }),
        // @ts-expect-error
        '--CircularProgress-percent': value,
      }}
    >
      <svg className={circularProgressSvgVariants()}>
        <circle className={circularProgressTrackVariants()} />
        <circle className={circularProgressProgressVariants({ determinate })} />
      </svg>
      {children}
    </span>
  );
});

export const generatorInputs: GeneratorInput[] = [
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
  {
    generatorFn: circularProgressRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      instanceSize: [undefined, 'sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
    },
  },
];
