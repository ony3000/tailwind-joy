import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import { colorTokens } from '../base/tokens';

const { primary, neutral, danger, success, warning } = colorTokens;

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
    'tj-circular-progress-root',
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
          neutral.softBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-trackColor:var(--$1)]',
          ),
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
          primary.softHoverBg.replace(
            /non-touchscreen:hover:bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-trackColor:var(--$1)]',
          ),
          primary.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          primary.solidColor,
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        className: [
          primary.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          primary.softColor,
        ],
      },
      {
        color: 'primary',
        variant: 'outlined',
        className: [
          primary.outlinedColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          primary.outlinedColor,
          primary.outlinedBorder,
          primary.outlinedBorder.replace(/border-/g, 'before:border-'),
        ],
      },
      {
        color: 'primary',
        variant: 'plain',
        className: [
          primary.plainColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          primary.plainColor,
        ],
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: [
          neutral.softHoverBg.replace(
            /non-touchscreen:hover:bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-trackColor:var(--$1)]',
          ),
          neutral.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          neutral.solidColor,
        ],
      },
      {
        color: 'neutral',
        variant: 'soft',
        className: [
          neutral.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          neutral.softColor,
        ],
      },
      {
        color: 'neutral',
        variant: 'outlined',
        className: [
          neutral.outlinedColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          neutral.outlinedColor,
          neutral.outlinedBorder,
          neutral.outlinedBorder.replace(/border-/g, 'before:border-'),
        ],
      },
      {
        color: 'neutral',
        variant: 'plain',
        className: [
          neutral.plainColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          neutral.plainColor,
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        className: [
          danger.softHoverBg.replace(
            /non-touchscreen:hover:bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-trackColor:var(--$1)]',
          ),
          danger.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          danger.solidColor,
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        className: [
          danger.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          danger.softColor,
        ],
      },
      {
        color: 'danger',
        variant: 'outlined',
        className: [
          danger.outlinedColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          danger.outlinedColor,
          danger.outlinedBorder,
          danger.outlinedBorder.replace(/border-/g, 'before:border-'),
        ],
      },
      {
        color: 'danger',
        variant: 'plain',
        className: [
          danger.plainColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          danger.plainColor,
        ],
      },
      {
        color: 'success',
        variant: 'solid',
        className: [
          success.softHoverBg.replace(
            /non-touchscreen:hover:bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-trackColor:var(--$1)]',
          ),
          success.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          success.solidColor,
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        className: [
          success.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          success.softColor,
        ],
      },
      {
        color: 'success',
        variant: 'outlined',
        className: [
          success.outlinedColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          success.outlinedColor,
          success.outlinedBorder,
          success.outlinedBorder.replace(/border-/g, 'before:border-'),
        ],
      },
      {
        color: 'success',
        variant: 'plain',
        className: [
          success.plainColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          success.plainColor,
        ],
      },
      {
        color: 'warning',
        variant: 'solid',
        className: [
          warning.softHoverBg.replace(
            /non-touchscreen:hover:bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-trackColor:var(--$1)]',
          ),
          warning.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          warning.solidColor,
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        className: [
          warning.solidBg.replace(
            /bg-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          warning.softColor,
        ],
      },
      {
        color: 'warning',
        variant: 'outlined',
        className: [
          warning.outlinedColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
          warning.outlinedColor,
          warning.outlinedBorder,
          warning.outlinedBorder.replace(/border-/g, 'before:border-'),
        ],
      },
      {
        color: 'warning',
        variant: 'plain',
        className: [
          warning.plainColor.replace(
            /text-(joy-[a-z]+-\d+)/g,
            '[--CircularProgress-progressColor:var(--$1)]',
          ),
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
    style,
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
        ...style,
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
      determinate: [false, true],
    },
  },
];
