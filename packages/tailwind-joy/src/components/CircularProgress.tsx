import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { token } from '../color-tokens';

const { primary, neutral, danger, success, warning } = token;

const circularProgressSvgVariants = cva(
  [
    'absolute h-[inherit] w-[inherit] origin-center -rotate-90 [box-sizing:inherit] [display:inherit]',
  ],
  {
    variants: {
      variant: {
        solid: 'left-0 top-0',
        soft: 'left-0 top-0',
        outlined: '-left-px -top-px',
        plain: 'left-0 top-0',
      },
    },
    defaultVariants: {
      variant: 'soft',
    },
  },
);

const circularProgressTrackVariants = cva(
  [
    'fill-transparent [cx:50%] [cy:50%]',
    String.raw`[r:calc(var(--\_inner-size)/2-var(--\_track-thickness)/2+min(0px,var(--\_thickness-diff)/2))] [stroke-width:var(--\_track-thickness)]`,
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
      variant: {
        solid: '',
        soft: [
          // same as neutral.softBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-neutral-100 dark:stroke-joy-neutral-800',
        ],
        outlined: '',
        plain: '',
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'solid',
        className: [
          // same as primary.softHoverBg.replace(/hover:bg-/g, 'stroke-')
          'stroke-joy-primary-200 dark:stroke-joy-primary-700',
        ],
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          // same as neutral.softHoverBg.replace(/hover:bg-/g, 'stroke-')
          'stroke-joy-neutral-200 dark:stroke-joy-neutral-700',
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          // same as danger.softHoverBg.replace(/hover:bg-/g, 'stroke-')
          'stroke-joy-danger-200 dark:stroke-joy-danger-700',
        ],
      },
      {
        color: 'success',
        variant: 'solid',
        className: [
          // same as success.softHoverBg.replace(/hover:bg-/g, 'stroke-')
          'stroke-joy-success-200 dark:stroke-joy-success-700',
        ],
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [
          // same as warning.softHoverBg.replace(/hover:bg-/g, 'stroke-')
          'stroke-joy-warning-200 dark:stroke-joy-warning-700',
        ],
      },
    ],
    defaultVariants: {
      color: 'primary',
      variant: 'soft',
    },
  },
);

const circularProgressProgressVariants = cva(
  [
    [
      String.raw`[--_progress-radius:calc(var(--\_inner-size)/2-var(--\_progress-thickness)/2-max(0px,var(--\_thickness-diff)/2))]`,
      String.raw`[--_progress-length:calc(2*var(--pi)*var(--\_progress-radius))]`,
    ],
    'origin-center fill-transparent [cx:50%] [cy:50%] [stroke-linecap:round]',
    String.raw`[r:var(--\_progress-radius)] [stroke-dasharray:var(--\_progress-length)] [stroke-dashoffset:calc(var(--\_progress-length)*(1-var(--CircularProgress-percent)/100))] [stroke-width:var(--\_progress-thickness)]`,
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
      variant: {
        solid: '',
        soft: '',
        outlined: '',
        plain: '',
      },
      determinate: {
        false: 'animate-spin [animation-duration:0.8s]',
        true: '',
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'solid',
        className: [
          // same as primary.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-primary-500',
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: [
          // same as primary.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-primary-500',
        ],
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: [
          // same as primary.outlinedColor.replace(/text-/g, 'stroke-')
          'stroke-joy-primary-500 dark:stroke-joy-primary-200',
        ],
      },
      {
        color: 'primary',
        variant: 'plain',
        className: [
          // same as primary.plainColor.replace(/text-/g, 'stroke-')
          'stroke-joy-primary-500 dark:stroke-joy-primary-300',
        ],
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          // same as neutral.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-neutral-500',
        ],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: [
          // same as neutral.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-neutral-500',
        ],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: [
          // same as neutral.outlinedColor.replace(/text-/g, 'stroke-')
          'stroke-joy-neutral-700 dark:stroke-joy-neutral-200',
        ],
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: [
          // same as neutral.plainColor.replace(/text-/g, 'stroke-')
          'stroke-joy-neutral-700 dark:stroke-joy-neutral-300',
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          // same as danger.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-danger-500',
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: [
          // same as danger.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-danger-500',
        ],
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: [
          // same as danger.outlinedColor.replace(/text-/g, 'stroke-')
          'stroke-joy-danger-500 dark:stroke-joy-danger-200',
        ],
      },
      {
        color: 'danger',
        variant: 'plain',
        className: [
          // same as danger.plainColor.replace(/text-/g, 'stroke-')
          'stroke-joy-danger-500 dark:stroke-joy-danger-300',
        ],
      },
      {
        color: 'success',
        variant: 'solid',
        className: [
          // same as success.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-success-500',
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        className: [
          // same as success.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-success-500',
        ],
      },
      {
        color: 'success',
        variant: 'outlined',
        className: [
          // same as success.outlinedColor.replace(/text-/g, 'stroke-')
          'stroke-joy-success-500 dark:stroke-joy-success-200',
        ],
      },
      {
        color: 'success',
        variant: 'plain',
        className: [
          // same as success.plainColor.replace(/text-/g, 'stroke-')
          'stroke-joy-success-500 dark:stroke-joy-success-300',
        ],
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [
          // same as warning.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-warning-500',
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: [
          // same as warning.solidBg.replace(/bg-/g, 'stroke-')
          'stroke-joy-warning-500',
        ],
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: [
          // same as warning.outlinedColor.replace(/text-/g, 'stroke-')
          'stroke-joy-warning-500 dark:stroke-joy-warning-200',
        ],
      },
      {
        color: 'warning',
        variant: 'plain',
        className: [
          // same as warning.plainColor.replace(/text-/g, 'stroke-')
          'stroke-joy-warning-500 dark:stroke-joy-warning-300',
        ],
      },
    ],
    defaultVariants: {
      color: 'primary',
      variant: 'soft',
      determinate: false,
    },
  },
);

const circularProgressVariants = cva(
  [
    [
      String.raw`[--Icon-fontSize:calc(0.4*var(--\_root-size))]`,
      String.raw`[--_thickness-diff:calc(var(--\_track-thickness)-var(--\_progress-thickness))]`,
      String.raw`[--_inner-size:calc(var(--\_root-size)-2*var(--variant-borderWidth,0px))]`,
      String.raw`[--_outlined-inset:max(var(--\_track-thickness),var(--\_progress-thickness))]`,
    ],
    'relative inline-flex shrink-0 items-center justify-center font-medium',
    String.raw`h-[var(--\_root-size)] w-[var(--\_root-size)] rounded-[var(--\_root-size)] text-[calc(0.2*var(--\_root-size))]`,
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
        sm: [
          '[--_track-thickness:var(--CircularProgress-trackThickness,var(--CircularProgress-thickness,3px))]',
          '[--_progress-thickness:var(--CircularProgress-progressThickness,var(--CircularProgress-thickness,3px))]',
          '[--_root-size:var(--CircularProgress-size,24px)]',
          '[--CircularProgress-size:24px]',
        ],
        md: [
          '[--_track-thickness:var(--CircularProgress-trackThickness,var(--CircularProgress-thickness,6px))]',
          '[--_progress-thickness:var(--CircularProgress-progressThickness,var(--CircularProgress-thickness,6px))]',
          '[--_root-size:var(--CircularProgress-size,40px)]',
        ],
        lg: [
          '[--_track-thickness:var(--CircularProgress-trackThickness,var(--CircularProgress-thickness,8px))]',
          '[--_progress-thickness:var(--CircularProgress-progressThickness,var(--CircularProgress-thickness,8px))]',
          '[--_root-size:var(--CircularProgress-size,64px)]',
          '[--CircularProgress-size:64px]',
        ],
      },
      variant: {
        solid: '',
        soft: '',
        outlined: [
          '[--variant-borderWidth:1px]',
          'border-solid [border-width:var(--variant-borderWidth)]',
          'before:absolute before:block before:border-solid before:content-[""] before:[border-radius:inherit] before:[border-width:var(--variant-borderWidth)]',
          String.raw`before:inset-[var(--\_outlined-inset)]`,
        ],
        plain: '',
      },
      determinate: {
        false: '[--CircularProgress-percent:25]',
        true: '[--CircularProgress-percent:0]',
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
        className: [primary.solidColor],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: [primary.softColor],
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: [
          [primary.outlinedColor, primary.outlinedBorder],
          // same as primary.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-primary-300 dark:before:border-joy-primary-700',
        ],
      },
      {
        color: 'primary',
        variant: 'plain',
        className: [primary.plainColor],
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [neutral.solidColor],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: [neutral.softColor],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: [
          [neutral.outlinedColor, neutral.outlinedBorder],
          // same as neutral.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-neutral-300 dark:before:border-joy-neutral-700',
        ],
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: [neutral.plainColor],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [danger.solidColor],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: [danger.softColor],
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: [
          [danger.outlinedColor, danger.outlinedBorder],
          // same as danger.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-danger-300 dark:before:border-joy-danger-700',
        ],
      },
      {
        color: 'danger',
        variant: 'plain',
        className: [danger.plainColor],
      },
      {
        color: 'success',
        variant: 'solid',
        className: [success.solidColor],
      },
      {
        color: 'success',
        variant: 'soft',
        className: [success.softColor],
      },
      {
        color: 'success',
        variant: 'outlined',
        className: [
          [success.outlinedColor, success.outlinedBorder],
          // same as success.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-success-300 dark:before:border-joy-success-700',
        ],
      },
      {
        color: 'success',
        variant: 'plain',
        className: [success.plainColor],
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [warning.solidColor],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: [warning.softColor],
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: [
          [warning.outlinedColor, warning.outlinedBorder],
          // same as warning.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-warning-300 dark:before:border-joy-warning-700',
        ],
      },
      {
        color: 'warning',
        variant: 'plain',
        className: [warning.plainColor],
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

interface CircularProgressVariants
  extends VariantProps<typeof circularProgressVariants> {
  thickness?: number;
  value?: number;
}

type CircularProgressProps = Omit<
  ComponentProps<'span'>,
  keyof CircularProgressVariants
> &
  CircularProgressVariants;

export const CircularProgress = forwardRef<
  HTMLSpanElement,
  CircularProgressProps
>(function CircularProgress(
  {
    children,
    color,
    size,
    variant,
    thickness,
    determinate,
    value,
    ...otherProps
  },
  ref,
) {
  return (
    <span
      ref={ref}
      className={circularProgressVariants({
        color,
        size,
        variant,
        determinate,
      })}
      {...otherProps}
      // @ts-ignore
      style={{
        ...(value === undefined
          ? {}
          : {
              '--CircularProgress-percent': value,
            }),
      }}
    >
      <svg className={circularProgressSvgVariants({ variant })}>
        <circle className={circularProgressTrackVariants({ color, variant })} />
        <circle
          className={circularProgressProgressVariants({
            color,
            variant,
            determinate,
          })}
        />
      </svg>
      {children}
    </span>
  );
});
