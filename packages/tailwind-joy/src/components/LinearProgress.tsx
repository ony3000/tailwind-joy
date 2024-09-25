import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import { join, addPrefix, backgroundColor, textColor } from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';

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
      variant === 'outlined'
        ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
        : '[--variant-borderWidth:0px]',
      colorTokens[color][`${variant}Color`],
      colorTokens[color][`${variant}Bg`],
      colorTokens[color][`${variant}Border`],
      '[--_LinearProgress-padding:max((var(--LinearProgress-thickness)-2*var(--variant-borderWidth,0px)-var(--LinearProgress-progressThickness))/2,0px)]',
      addPrefix(
        join([
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
        colorTokens.neutral.softBg,
        textColor(baseTokens[color].solidBg),
      ],
      variant === 'solid' && [
        backgroundColor(baseTokens[color].softHoverBg),
        textColor(baseTokens[color].solidBg),
      ],
      determinate
        ? addPrefix(
            join([
              r`left-[var(--\_LinearProgress-padding)]`,
              r`[inline-size:calc(var(--LinearProgress-percent)*1%-2*var(--\_LinearProgress-padding))]`,
            ]),
            'before:',
          )
        : 'before:animate-joy-linear-circulate',
    ]),
  );
}

interface LinearProgressRootVariants extends BaseVariants {
  determinate?: boolean;
  thickness?: number;
  value?: number;
}

type LinearProgressRootProps = Omit<
  ComponentProps<'div'>,
  keyof LinearProgressRootVariants
> &
  LinearProgressRootVariants;

export const LinearProgress = forwardRef<
  HTMLDivElement,
  LinearProgressRootProps
>(function LinearProgressRoot(
  {
    children,
    className,
    style,
    color = 'primary',
    size = 'md',
    variant = 'soft',
    thickness,
    determinate,
    value,
    ...otherProps
  },
  ref,
) {
  return (
    <div
      ref={ref}
      role="progressbar"
      className={twMerge(
        linearProgressRootVariants({
          color,
          size,
          variant,
          determinate,
        }),
        className,
      )}
      {...otherProps}
      // @ts-ignore
      style={{
        ...style,
        ...(thickness === undefined
          ? {}
          : {
              '--LinearProgress-thickness': `${thickness}px`,
            }),
        // @ts-ignore
        '--LinearProgress-percent': value ?? (determinate ? 0 : 25),
      }}
    >
      {children}
    </div>
  );
});

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
