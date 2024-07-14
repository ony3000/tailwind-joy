import type { ComponentProps } from 'react';
import { forwardRef, isValidElement } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';

const svgIconRootVariants = cva(
  ['m-[var(--Icon-margin)] inline-block h-[1em] w-[1em] shrink-0 select-none'],
  {
    variants: {
      color: {
        primary: '',
        neutral: '',
        danger: '',
        success: '',
        warning: '',
      },
      htmlColor: {
        false: '',
        true: '',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      /**
       * The explicit `size` provided to the component.
       */
      instanceSize: {
        sm: '',
        md: '',
        lg: '',
      },
      fontSize: {
        xs: '[font-size:var(--Icon-fontSize,0.75rem)]',
        sm: '[font-size:var(--Icon-fontSize,0.875rem)]',
        md: '[font-size:var(--Icon-fontSize,1rem)]',
        lg: '[font-size:var(--Icon-fontSize,1.125rem)]',
        xl: '[font-size:var(--Icon-fontSize,1.25rem)]',
        xl2: '[font-size:var(--Icon-fontSize,1.5rem)]',
        xl3: '[font-size:var(--Icon-fontSize,1.875rem)]',
        xl4: '[font-size:var(--Icon-fontSize,2.25rem)]',
      },
      /**
       * The explicit `fontSize` provided to the component.
       */
      instanceFontSize: {
        xs: '[--Icon-fontSize:0.75rem]',
        sm: '[--Icon-fontSize:0.875rem]',
        md: '[--Icon-fontSize:1rem]',
        lg: '[--Icon-fontSize:1.125rem]',
        xl: '[--Icon-fontSize:1.25rem]',
        xl2: '[--Icon-fontSize:1.5rem]',
        xl3: '[--Icon-fontSize:1.875rem]',
        xl4: '[--Icon-fontSize:2.25rem]',
      },
      hasSvgChild: {
        false: 'fill-current',
        true: '',
      },
    },
    compoundVariants: [
      {
        htmlColor: false,
        color: undefined,
        className:
          '[color:var(--Icon-color,var(--joy-neutral-500))] dark:[color:var(--Icon-color,var(--joy-neutral-400))]',
      },
      {
        htmlColor: false,
        color: 'primary',
        className:
          '[color:var(--Icon-color,var(--joy-primary-500))] dark:[color:var(--Icon-color,var(--joy-primary-400))]',
      },
      {
        htmlColor: false,
        color: 'neutral',
        className:
          '[color:var(--Icon-color,var(--joy-neutral-500))] dark:[color:var(--Icon-color,var(--joy-neutral-400))]',
      },
      {
        htmlColor: false,
        color: 'danger',
        className:
          '[color:var(--Icon-color,var(--joy-danger-500))] dark:[color:var(--Icon-color,var(--joy-danger-400))]',
      },
      {
        htmlColor: false,
        color: 'success',
        className:
          '[color:var(--Icon-color,var(--joy-success-500))] dark:[color:var(--Icon-color,var(--joy-success-400))]',
      },
      {
        htmlColor: false,
        color: 'warning',
        className:
          '[color:var(--Icon-color,var(--joy-warning-500))] dark:[color:var(--Icon-color,var(--joy-warning-400))]',
      },
      {
        instanceFontSize: undefined,
        instanceSize: 'sm',
        className: '[--Icon-fontSize:1.25rem]',
      },
      {
        instanceFontSize: undefined,
        instanceSize: 'md',
        className: '[--Icon-fontSize:1.5rem]',
      },
      {
        instanceFontSize: undefined,
        instanceSize: 'lg',
        className: '[--Icon-fontSize:1.875rem]',
      },
      {
        fontSize: undefined,
        size: 'sm',
        className: '[font-size:var(--Icon-fontSize,1.25rem)]',
      },
      {
        fontSize: undefined,
        size: 'md',
        className: '[font-size:var(--Icon-fontSize,1.5rem)]',
      },
      {
        fontSize: undefined,
        size: 'lg',
        className: '[font-size:var(--Icon-fontSize,1.875rem)]',
      },
    ],
    defaultVariants: {
      htmlColor: false,
      size: 'md',
      hasSvgChild: false,
    },
  },
);

interface SvgIconRootVariants extends Omit<BaseVariants, 'variant'> {
  htmlColor?: string;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2' | 'xl3' | 'xl4';
}

type SvgIconRootProps = Omit<ComponentProps<'svg'>, keyof SvgIconRootVariants> &
  SvgIconRootVariants;

export const SvgIcon = forwardRef<SVGSVGElement, SvgIconRootProps>(
  function SvgIconRoot(
    { children, className, color, htmlColor, size, fontSize, ...otherProps },
    ref,
  ) {
    const hasSvgChild = isValidElement(children) && children.type === 'svg';
    const nonSvgChild = hasSvgChild ? children.props.children : children;

    return (
      <svg
        ref={ref}
        className={twMerge(
          svgIconRootVariants({
            color,
            htmlColor: Boolean(htmlColor),
            size: size ?? 'md',
            instanceSize: size,
            fontSize,
            instanceFontSize: fontSize,
            hasSvgChild,
          }),
          className,
        )}
        {...otherProps}
      >
        {nonSvgChild}
      </svg>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: svgIconRootVariants,
    variants: {
      color: [undefined, 'primary', 'neutral', 'danger', 'success', 'warning'],
      htmlColor: [false, true],
      size: ['sm', 'md', 'lg'],
      instanceSize: [undefined, 'sm', 'md', 'lg'],
      fontSize: [undefined, 'xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3', 'xl4'],
      instanceFontSize: [
        undefined,
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xl2',
        'xl3',
        'xl4',
      ],
      hasSvgChild: [false, true],
    },
  },
];
