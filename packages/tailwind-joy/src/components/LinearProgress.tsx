import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import { colorTokens } from '../base/tokens';

const { primary, neutral, danger, success, warning } = colorTokens;

const linearProgressRootVariants = cva(
  [
    'tj-linear-progress-root',
    [
      '[--LinearProgress-radius:var(--LinearProgress-thickness)]',
      '[--LinearProgress-progressThickness:var(--LinearProgress-thickness)]',
      r`[--LinearProgress-progressRadius:max(var(--LinearProgress-radius)-var(--\_LinearProgress-padding),min(var(--\_LinearProgress-padding)/2,var(--LinearProgress-radius)/2))]`,
      '[--_LinearProgress-padding:max((var(--LinearProgress-thickness)-2*var(--variant-borderWidth,0px)-var(--LinearProgress-progressThickness))/2,0px)]',
    ],
    'relative box-border flex flex-1 items-center justify-center rounded-[var(--LinearProgress-radius)] [min-block-size:var(--LinearProgress-thickness)]',
    r`p-[var(--\_LinearProgress-padding)]`,
    'before:absolute before:block before:rounded-[var(--LinearProgress-progressRadius)] before:bg-current before:text-inherit before:content-[""] before:[block-size:var(--LinearProgress-progressThickness)] before:[box-sizing:inherit]',
  ],
  {
    variants: {
      color: {
        primary: '',
        neutral: '',
        danger: '',
        success: '',
        warning: '',
      },
      size: {
        sm: '[--LinearProgress-thickness:4px]',
        md: '[--LinearProgress-thickness:6px]',
        lg: '[--LinearProgress-thickness:8px]',
      },
      variant: {
        solid: '',
        soft: neutral.softBg,
        outlined: [
          '[--variant-borderWidth:1px]',
          'border-solid [border-width:var(--variant-borderWidth)]',
        ],
        plain: '',
      },
      determinate: {
        false: [
          '[--LinearProgress-percent:25]',
          '[--LinearProgress-progressMinWidth:calc(var(--LinearProgress-percent)*1%/2)]',
          '[--LinearProgress-progressMaxWidth:calc(var(--LinearProgress-percent)*1%)]',
          r`[--_LinearProgress-progressLeft:calc(100%-var(--LinearProgress-progressMinWidth)-var(--\_LinearProgress-progressInset))]`,
          '[--_LinearProgress-progressInset:calc(var(--LinearProgress-thickness)/2-var(--LinearProgress-progressThickness)/2)]',
          'before:animate-joy-linear-circulate',
        ],
        true: [
          '[--LinearProgress-percent:0]',
          r`before:left-[var(--\_LinearProgress-padding)] before:[inline-size:calc(var(--LinearProgress-percent)*1%-2*var(--\_LinearProgress-padding))]`,
        ],
      },
    },
    compoundVariants: [
      {
        variant: ['solid', 'soft', 'plain'],
        className: '[--variant-borderWidth:0px]',
      },
      {
        color: 'primary',
        variant: 'solid',
        className: [
          primary.solidBg.replace(/bg-/g, 'text-'),
          primary.softHoverBg.replace(/non-touchscreen:hover:/g, ''),
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: primary.solidBg.replace(/bg-/g, 'text-'),
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: [primary.outlinedColor, primary.outlinedBorder],
      },
      {
        color: 'primary',
        variant: 'plain',
        className: primary.plainColor,
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          neutral.solidBg.replace(/bg-/g, 'text-'),
          neutral.softHoverBg.replace(/non-touchscreen:hover:/g, ''),
        ],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: neutral.solidBg.replace(/bg-/g, 'text-'),
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: [neutral.outlinedColor, neutral.outlinedBorder],
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: neutral.plainColor,
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          danger.solidBg.replace(/bg-/g, 'text-'),
          danger.softHoverBg.replace(/non-touchscreen:hover:/g, ''),
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: danger.solidBg.replace(/bg-/g, 'text-'),
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: [danger.outlinedColor, danger.outlinedBorder],
      },
      {
        color: 'danger',
        variant: 'plain',
        className: danger.plainColor,
      },
      {
        color: 'success',
        variant: 'solid',
        className: [
          success.solidBg.replace(/bg-/g, 'text-'),
          success.softHoverBg.replace(/non-touchscreen:hover:/g, ''),
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        className: success.solidBg.replace(/bg-/g, 'text-'),
      },
      {
        color: 'success',
        variant: 'outlined',
        className: [success.outlinedColor, success.outlinedBorder],
      },
      {
        color: 'success',
        variant: 'plain',
        className: success.plainColor,
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [
          warning.solidBg.replace(/bg-/g, 'text-'),
          warning.softHoverBg.replace(/non-touchscreen:hover:/g, ''),
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: warning.solidBg.replace(/bg-/g, 'text-'),
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: [warning.outlinedColor, warning.outlinedBorder],
      },
      {
        color: 'warning',
        variant: 'plain',
        className: warning.plainColor,
      },
    ],
    defaultVariants: {
      color: 'primary',
      size: 'md',
      variant: 'soft',
      determinate: false,
    },
  },
);

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
        ...(value === undefined
          ? {}
          : {
              '--LinearProgress-percent': value,
            }),
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
