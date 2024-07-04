import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { r } from '../alias';
import type { BaseVariants } from '../base';
import { token } from '../color-tokens';

const { primary, neutral, danger, success, warning } = token;

const circularProgressSvgVariants = cva(
  'absolute left-[calc(-1*var(--variant-borderWidth,0px))] top-[calc(-1*var(--variant-borderWidth,0px))] h-[inherit] w-[inherit] [box-sizing:inherit] [display:inherit]',
);

const circularProgressTrackVariants = cva([
  'fill-transparent stroke-[var(--CircularProgress-trackColor)] [cx:50%] [cy:50%]',
  r`[r:calc(var(--\_inner-size)/2-var(--\_track-thickness)/2+min(0px,var(--\_thickness-diff)/2))] [stroke-width:var(--\_track-thickness)]`,
]);

const circularProgressProgressVariants = cva(
  [
    [
      r`[--_progress-radius:calc(var(--\_inner-size)/2-var(--\_progress-thickness)/2-max(0px,var(--\_thickness-diff)/2))]`,
      r`[--_progress-length:calc(2*var(--pi)*var(--\_progress-radius))]`,
    ],
    'origin-center -rotate-90 fill-transparent stroke-[var(--CircularProgress-progressColor)] [cx:50%] [cy:50%] [stroke-linecap:var(--CircularProgress-linecap,round)]',
    r`[r:var(--\_progress-radius)] [stroke-dasharray:var(--\_progress-length)] [stroke-dashoffset:calc(var(--\_progress-length)*(1-var(--CircularProgress-percent)/100))] [stroke-width:var(--\_progress-thickness)]`,
  ],
  {
    variants: {
      determinate: {
        false: 'animate-joy-circulate',
        true: '',
      },
    },
    defaultVariants: {
      determinate: false,
    },
  },
);

const circularProgressRootVariants = cva(
  [
    [
      r`[--Icon-fontSize:calc(0.4*var(--\_root-size))]`,
      r`[--_thickness-diff:calc(var(--\_track-thickness)-var(--\_progress-thickness))]`,
      r`[--_inner-size:calc(var(--\_root-size)-2*var(--variant-borderWidth,0px))]`,
      r`[--_outlined-inset:max(var(--\_track-thickness),var(--\_progress-thickness))]`,
    ],
    'relative box-border inline-flex shrink-0 items-center justify-center font-medium [--CircularProgress-linecap:round]',
    r`m-[var(--CircularProgress-margin)] h-[var(--\_root-size)] w-[var(--\_root-size)] rounded-[var(--\_root-size)] text-[calc(0.2*var(--\_root-size))]`,
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
        ],
      },
      /**
       * The explicit `size` provided to the component.
       */
      instanceSize: {
        sm: '[--CircularProgress-size:24px]',
        md: '[--CircularProgress-size:40px]',
        lg: '[--CircularProgress-size:64px]',
      },
      variant: {
        solid: '',
        soft: [
          '[--CircularProgress-trackColor:var(--joy-neutral-100)] dark:[--CircularProgress-trackColor:var(--joy-neutral-800)]',
        ],
        outlined: [
          '[--variant-borderWidth:1px]',
          'border-solid [border-width:var(--variant-borderWidth)]',
          'before:absolute before:block before:rounded-[inherit] before:border-solid before:content-[""] before:[border-width:var(--variant-borderWidth)]',
          r`before:inset-[var(--\_outlined-inset)]`,
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
        className: [
          '[--CircularProgress-trackColor:var(--joy-primary-200)] dark:[--CircularProgress-trackColor:var(--joy-primary-700)]',
          '[--CircularProgress-progressColor:var(--joy-primary-500)]',
          primary.solidColor,
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: [
          '[--CircularProgress-progressColor:var(--joy-primary-500)]',
          primary.softColor,
        ],
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: [
          '[--CircularProgress-progressColor:var(--joy-primary-500)] dark:[--CircularProgress-progressColor:var(--joy-primary-200)]',
          primary.outlinedColor,
          primary.outlinedBorder,
          // same as primary.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-primary-300 dark:before:border-joy-primary-700',
        ],
      },
      {
        color: 'primary',
        variant: 'plain',
        className: [
          '[--CircularProgress-progressColor:var(--joy-primary-500)] dark:[--CircularProgress-progressColor:var(--joy-primary-300)]',
          primary.plainColor,
        ],
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          '[--CircularProgress-trackColor:var(--joy-neutral-200)] dark:[--CircularProgress-trackColor:var(--joy-neutral-700)]',
          '[--CircularProgress-progressColor:var(--joy-neutral-500)]',
          neutral.solidColor,
        ],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: [
          '[--CircularProgress-progressColor:var(--joy-neutral-500)]',
          neutral.softColor,
        ],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: [
          '[--CircularProgress-progressColor:var(--joy-neutral-700)] dark:[--CircularProgress-progressColor:var(--joy-neutral-200)]',
          neutral.outlinedColor,
          neutral.outlinedBorder,
          // same as neutral.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-neutral-300 dark:before:border-joy-neutral-700',
        ],
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: [
          '[--CircularProgress-progressColor:var(--joy-neutral-700)] dark:[--CircularProgress-progressColor:var(--joy-neutral-300)]',
          neutral.plainColor,
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          '[--CircularProgress-trackColor:var(--joy-danger-200)] dark:[--CircularProgress-trackColor:var(--joy-danger-700)]',
          '[--CircularProgress-progressColor:var(--joy-danger-500)]',
          danger.solidColor,
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: [
          '[--CircularProgress-progressColor:var(--joy-danger-500)]',
          danger.softColor,
        ],
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: [
          '[--CircularProgress-progressColor:var(--joy-danger-500)] dark:[--CircularProgress-progressColor:var(--joy-danger-200)]',
          danger.outlinedColor,
          danger.outlinedBorder,
          // same as danger.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-danger-300 dark:before:border-joy-danger-700',
        ],
      },
      {
        color: 'danger',
        variant: 'plain',
        className: [
          '[--CircularProgress-progressColor:var(--joy-danger-500)] dark:[--CircularProgress-progressColor:var(--joy-danger-300)]',
          danger.plainColor,
        ],
      },
      {
        color: 'success',
        variant: 'solid',
        className: [
          '[--CircularProgress-trackColor:var(--joy-success-200)] dark:[--CircularProgress-trackColor:var(--joy-success-700)]',
          '[--CircularProgress-progressColor:var(--joy-success-500)]',
          success.solidColor,
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        className: [
          '[--CircularProgress-progressColor:var(--joy-success-500)]',
          success.softColor,
        ],
      },
      {
        color: 'success',
        variant: 'outlined',
        className: [
          '[--CircularProgress-progressColor:var(--joy-success-500)] dark:[--CircularProgress-progressColor:var(--joy-success-200)]',
          success.outlinedColor,
          success.outlinedBorder,
          // same as success.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-success-300 dark:before:border-joy-success-700',
        ],
      },
      {
        color: 'success',
        variant: 'plain',
        className: [
          '[--CircularProgress-progressColor:var(--joy-success-500)] dark:[--CircularProgress-progressColor:var(--joy-success-300)]',
          success.plainColor,
        ],
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [
          '[--CircularProgress-trackColor:var(--joy-warning-200)] dark:[--CircularProgress-trackColor:var(--joy-warning-700)]',
          '[--CircularProgress-progressColor:var(--joy-warning-500)]',
          warning.solidColor,
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: [
          '[--CircularProgress-progressColor:var(--joy-warning-500)]',
          warning.softColor,
        ],
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: [
          '[--CircularProgress-progressColor:var(--joy-warning-500)] dark:[--CircularProgress-progressColor:var(--joy-warning-200)]',
          warning.outlinedColor,
          warning.outlinedBorder,
          // same as warning.outlinedBorder.replace(/border-/g, 'before:border-')
          'before:border-joy-warning-300 dark:before:border-joy-warning-700',
        ],
      },
      {
        color: 'warning',
        variant: 'plain',
        className: [
          '[--CircularProgress-progressColor:var(--joy-warning-500)] dark:[--CircularProgress-progressColor:var(--joy-warning-300)]',
          warning.plainColor,
        ],
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
    color = 'primary',
    size,
    variant = 'soft',
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
      role="progressbar"
      className={twMerge(
        circularProgressRootVariants({
          color,
          size: size ?? 'md',
          instanceSize: size,
          variant,
          determinate,
        }),
        className,
      )}
      {...otherProps}
      // @ts-ignore
      style={{
        ...(thickness === undefined
          ? {}
          : {
              '--_track-thickness': `${thickness}px`,
              '--_progress-thickness': `${thickness}px`,
            }),
        ...(value === undefined
          ? {}
          : {
              '--CircularProgress-percent': value,
            }),
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
