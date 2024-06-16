import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

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
    'fill-transparent [cx:50%] [cy:50%] [r:calc(var(--tj-outer-radius)-var(--tj-thickness)/2)] [stroke-width:var(--tj-thickness)]',
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
        className: 'stroke-joy-primary-200 dark:stroke-joy-primary-700',
      },
      {
        color: 'primary',
        variant: 'soft',
        className: 'stroke-joy-neutral-100 dark:stroke-joy-neutral-800',
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: '',
      },
      {
        color: 'primary',
        variant: 'plain',
        className: '',
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
    '[--tj-progress-radius:calc(var(--tj-outer-radius)-var(--tj-thickness)/2)]',
    '[--tj-progress-length:calc(2*var(--pi)*var(--tj-progress-radius))]',
    'origin-center -rotate-90 [cx:50%] [cy:50%] [stroke-width:var(--tj-thickness)] [r:var(--tj-progress-radius)] [stroke-dasharray:var(--tj-progress-length)] [stroke-dashoffset:calc(var(--tj-progress-length)*(1-var(--CircularProgress-percent)/100))] [stroke-linecap:round]',
  ],
  {
    variants: {
      color: {
        primary: 'stroke-joy-primary-500 fill-transparent',
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
        className: '',
      },
      {
        color: 'primary',
        variant: 'soft',
        className: '',
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: '',
      },
      {
        color: 'primary',
        variant: 'plain',
        className: '',
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
  ['relative inline-flex shrink-0 items-center justify-center rounded-full'],
  {
    variants: {
      color: {
        primary: 'text-joy-primary-700 dark:text-joy-primary-200',
        neutral: 'text-joy-neutral-700 dark:text-joy-neutral-200',
        danger: 'text-joy-danger-700 dark:text-joy-danger-200',
        success: 'text-joy-success-700 dark:text-joy-success-200',
        warning: 'text-joy-warning-700 dark:text-joy-warning-200',
      },
      size: {
        sm: [
          '[--Icon-fontSize:9.6px]',
          '[--tj-outer-radius:12px]',
          '[--tj-thickness:3px]',
          'h-6 w-6',
        ],
        md: [
          '[--Icon-fontSize:16px]',
          '[--tj-outer-radius:20px]',
          '[--tj-thickness:6px]',
          'h-10 w-10',
        ],
        lg: [
          '[--Icon-fontSize:25.6px]',
          '[--tj-outer-radius:32px]',
          '[--tj-thickness:8px]',
          'h-16 w-16',
        ],
      },
      variant: {
        solid: '',
        soft: '',
        outlined:
          'border-joy-primary-300 dark:border-joy-primary-700 border border-solid',
        plain: '',
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'solid',
        className: '',
      },
      {
        color: 'primary',
        variant: 'soft',
        className: '',
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: '',
      },
      {
        color: 'primary',
        variant: 'plain',
        className: '',
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
