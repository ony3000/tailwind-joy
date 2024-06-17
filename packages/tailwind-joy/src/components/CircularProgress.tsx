import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { token } from '../color-tokens';

const { primary, neutral, danger, success, warning } = token;

const circularProgressSvgVariants = cva(
  ['absolute h-[inherit] w-[inherit] [box-sizing:inherit] [display:inherit]'],
  {
    variants: {
      variant: {
        solid: 'left-0 top-0',
        soft: 'left-0 top-0',
        outlined: '-left-px -top-px',
        plain: 'left-0 top-0',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        className: '',
      },
    ],
    defaultVariants: {
      variant: 'soft',
    },
  },
);

interface CircularProgressSvgVariants
  extends VariantProps<typeof circularProgressSvgVariants> {}

type CircularProgressSvgProps = Omit<
  ComponentProps<'svg'>,
  keyof CircularProgressSvgVariants
> &
  CircularProgressSvgVariants;

function CircularProgressSvg({ children, variant }: CircularProgressSvgProps) {
  return (
    <svg className={circularProgressSvgVariants({ variant })}>{children}</svg>
  );
}

const circularProgressTrackVariants = cva(
  [
    'fill-transparent [cx:50%] [cy:50%] [r:var(--tj-progress-radius)] [stroke-width:var(--tj-thickness)]',
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
        sm: '',
        md: '',
        lg: '',
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
      size: 'md',
      variant: 'soft',
    },
  },
);

interface CircularProgressTrackVariants
  extends VariantProps<typeof circularProgressTrackVariants> {}

type CircularProgressTrackProps = CircularProgressTrackVariants;

function CircularProgressTrack({
  color,
  size,
  variant,
}: CircularProgressTrackProps) {
  return (
    <circle
      className={circularProgressTrackVariants({ color, size, variant })}
    />
  );
}

const circularProgressProgressVariants = cva(
  [
    '[--tj-progress-length:calc(2*var(--pi)*var(--tj-progress-radius))]',
    'origin-center -rotate-90 fill-transparent [cx:50%] [cy:50%] [r:var(--tj-progress-radius)] [stroke-width:var(--tj-thickness)] [stroke-dasharray:var(--tj-progress-length)] [stroke-dashoffset:calc(var(--tj-progress-length)*(1-var(--CircularProgress-percent)/100))] [stroke-linecap:round]',
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
        sm: '',
        md: '',
        lg: '',
      },
      variant: {
        solid: '',
        soft: '',
        outlined: '',
        plain: '',
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
      size: 'md',
      variant: 'soft',
    },
  },
);

interface CircularProgressProgressVariants
  extends VariantProps<typeof circularProgressProgressVariants> {}

type CircularProgressProgressProps = CircularProgressProgressVariants;

function CircularProgressProgress({
  color,
  size,
  variant,
}: CircularProgressProgressProps) {
  return (
    <circle
      className={circularProgressProgressVariants({ color, size, variant })}
    />
  );
}

const circularProgressVariants = cva(
  [
    '[--tj-progress-radius:calc(var(--tj-outer-radius)-var(--variant-borderWidth)-var(--tj-thickness)/2)]',
    'relative inline-flex shrink-0 items-center justify-center rounded-full font-medium',
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
          '[--Icon-fontSize:9.6px]',
          '[--tj-outer-radius:12px]',
          '[--tj-thickness:3px]',
          'h-6 w-6 text-[4.8px]',
        ],
        md: [
          '[--Icon-fontSize:16px]',
          '[--tj-outer-radius:20px]',
          '[--tj-thickness:6px]',
          'h-10 w-10 text-[8px]',
        ],
        lg: [
          '[--Icon-fontSize:25.6px]',
          '[--tj-outer-radius:32px]',
          '[--tj-thickness:8px]',
          'h-16 w-16 text-[12.8px]',
        ],
      },
      variant: {
        solid: '[--variant-borderWidth:0px]',
        soft: '[--variant-borderWidth:0px]',
        outlined: [
          '[--variant-borderWidth:1px]',
          'border border-solid',
          'before:absolute before:inset-[var(--tj-thickness)] before:block before:border before:border-solid before:content-[""] before:[border-radius:inherit]',
        ],
        plain: '[--variant-borderWidth:0px]',
      },
    },
    compoundVariants: [
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
    },
  },
);

interface CircularProgressVariants
  extends VariantProps<typeof circularProgressVariants> {
  thickness?: number;
  determinate?: boolean;
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
  const refinedValue = value ?? (determinate ? 0 : 25);

  return (
    <span
      ref={ref}
      className={circularProgressVariants({ color, size, variant })}
      {...otherProps}
      style={{
        // @ts-ignore
        '--CircularProgress-percent': refinedValue,
      }}
    >
      <CircularProgressSvg {...{ variant }}>
        <CircularProgressTrack {...{ color, size, variant }} />
        <CircularProgressProgress {...{ color, size, variant }} />
      </CircularProgressSvg>
      {children}
    </span>
  );
});
