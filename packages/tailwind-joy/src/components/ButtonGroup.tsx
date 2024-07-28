import type { ComponentProps } from 'react';
import { Children, isValidElement } from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import { colorTokens } from '../base/colors';

const { primary, neutral, danger, success, warning } = colorTokens;

const buttonGroupRootVariants = cva(
  [
    'tj-button-group-root',
    [
      '[--ButtonGroup-radius:6px]',
      '[--Divider-inset:0.5rem]',
      '[--unstable_childRadius:calc((1-var(--ButtonGroup-connected))*var(--ButtonGroup-radius)-var(--variant-borderWidth,0px))]',
    ],
    'flex gap-[var(--tj-gap)] rounded-[var(--ButtonGroup-radius)]',
    r`[&>:not([data-first-child]):not([data-last-child]):not(:only-child)]:[--Button-radius:var(--unstable\_childRadius)]`,
    r`[&>:not([data-first-child]):not([data-last-child]):not(:only-child)]:[--IconButton-radius:var(--unstable\_childRadius)]`,
    r`[&>:not([data-first-child]):not([data-last-child]):not(:only-child)]:rounded-[var(--unstable\_childRadius)]`,
    '[&>:only-child]:[--Button-radius:var(--ButtonGroup-radius)]',
    '[&>:only-child]:[--IconButton-radius:var(--ButtonGroup-radius)]',
    '[&_.tj-button-root:enabled]:z-[1]',
    'non-touchscreen:[&_.tj-button-root:hover]:z-[2]',
    '[&_.tj-button-root:focus-visible]:z-[2]',
    '[&_.tj-icon-button-root:enabled]:z-[1]',
    'non-touchscreen:[&_.tj-icon-button-root:hover]:z-[2]',
    '[&_.tj-icon-button-root:focus-visible]:z-[2]',
  ],
  {
    variants: {
      color: {
        primary: [
          primary.outlinedBorder.replace(
            /border-(joy-[a-z]+-\d+)/g,
            '[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          primary.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          primary.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-icon-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
        ],
        neutral: [
          neutral.outlinedBorder.replace(
            /border-(joy-[a-z]+-\d+)/g,
            '[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          neutral.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          neutral.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-icon-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
        ],
        danger: [
          danger.outlinedBorder.replace(
            /border-(joy-[a-z]+-\d+)/g,
            '[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          danger.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          danger.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-icon-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
        ],
        success: [
          success.outlinedBorder.replace(
            /border-(joy-[a-z]+-\d+)/g,
            '[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          success.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          success.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-icon-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
        ],
        warning: [
          warning.outlinedBorder.replace(
            /border-(joy-[a-z]+-\d+)/g,
            '[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          warning.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
          warning.outlinedDisabledBorder.replace(
            /disabled:border-(joy-[a-z]+-\d+)/g,
            '[&_.tj-icon-button-root:disabled]:[--ButtonGroup-separatorColor:var(--$1)]',
          ),
        ],
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      variant: {
        solid: '',
        soft: '',
        outlined: '[--ButtonGroup-separatorSize:1px]',
        plain: '',
      },
      orientation: {
        horizontal: [
          'flex-row',
          r`[&>[data-first-child]]:[--Button-radius:var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)]`,
          r`[&>[data-first-child]]:[--IconButton-radius:var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)]`,
          '[&>[data-first-child]]:[border-right:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
          '[&>:not([data-first-child]):not([data-last-child]):not(:only-child)]:[border-left:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
          '[&>:not([data-first-child]):not([data-last-child]):not(:only-child)]:[border-right:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
          r`[&>[data-last-child]]:[--Button-radius:var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)]`,
          r`[&>[data-last-child]]:[--IconButton-radius:var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)]`,
          '[&>[data-last-child]]:[border-left:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
          '[&>:not([data-first-child]):not(:only-child)]:[--Button-margin:0_0_0_calc(var(--ButtonGroup-separatorSize)*-1)]',
          '[&>:not([data-first-child]):not(:only-child)]:[--IconButton-margin:0_0_0_calc(var(--ButtonGroup-separatorSize)*-1)]',
        ],
        vertical: [
          'flex-col',
          r`[&>[data-first-child]]:[--Button-radius:var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)]`,
          r`[&>[data-first-child]]:[--IconButton-radius:var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)]`,
          '[&>[data-first-child]]:[border-bottom:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
          '[&>:not([data-first-child]):not([data-last-child]):not(:only-child)]:[border-top:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
          '[&>:not([data-first-child]):not([data-last-child]):not(:only-child)]:[border-bottom:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
          r`[&>[data-last-child]]:[--Button-radius:var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)]`,
          r`[&>[data-last-child]]:[--IconButton-radius:var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)]`,
          '[&>[data-last-child]]:[border-top:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
          '[&>:not([data-first-child]):not(:only-child)]:[--Button-margin:calc(var(--ButtonGroup-separatorSize)*-1)_0_0_0]',
          '[&>:not([data-first-child]):not(:only-child)]:[--IconButton-margin:calc(var(--ButtonGroup-separatorSize)*-1)_0_0_0]',
        ],
      },
      flexibleButton: {
        false: '',
        true: [
          '[&>*:not(.tj-icon-button-root)]:[flex:var(--tj-buttonFlex)]',
          '[&>:not(button)>.tj-button-root]:w-full',
        ],
      },
      connectedButton: {
        false: '[--ButtonGroup-connected:0]',
        true: '[--ButtonGroup-connected:1]',
      },
    },
    compoundVariants: [
      {
        variant: ['solid', 'soft', 'plain'],
        className: [
          '[--ButtonGroup-separatorSize:calc(var(--ButtonGroup-connected)*1px)]',
        ],
      },
    ],
    defaultVariants: {
      color: 'neutral',
      size: 'md',
      variant: 'outlined',
      orientation: 'horizontal',
      flexibleButton: false,
      connectedButton: false,
    },
  },
);

interface ButtonGroupRootVariants extends BaseVariants {
  orientation?: 'horizontal' | 'vertical';
  buttonFlex?: number | string;
  disabled?: boolean;
  spacing?: string;
}

type ButtonGroupRootProps = Omit<
  ComponentProps<'div'>,
  keyof ButtonGroupRootVariants
> &
  ButtonGroupRootVariants;

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupRootProps>(
  function ButtonGroupRoot(
    {
      children,
      className,
      style,
      color = 'neutral',
      size = 'md',
      variant = 'outlined',
      orientation,
      buttonFlex,
      disabled = false,
      spacing = '0',
      ...otherProps
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        role="group"
        className={twMerge(
          buttonGroupRootVariants({
            color,
            size,
            variant,
            orientation,
            flexibleButton: buttonFlex !== undefined,
            connectedButton: parseFloat(spacing) === 0,
          }),
          className,
        )}
        {...otherProps}
        // @ts-ignore
        style={{
          ...style,
          ...(buttonFlex === undefined
            ? {}
            : {
                '--tj-buttonFlex': buttonFlex,
              }),
          // @ts-ignore
          '--tj-gap': spacing,
        }}
      >
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) {
            return child;
          }

          return Object.assign({}, child, {
            props: {
              ...(child.props ?? {}),
              color: child.props?.color ?? color,
              size: child.props?.size ?? size,
              variant: child.props?.variant ?? variant,
              disabled:
                (child.props?.loading || child.props?.disabled) ?? disabled,
              'data-first-child':
                Children.count(children) > 1 && index === 0 ? '' : undefined,
              'data-last-child':
                Children.count(children) > 1 &&
                index === Children.count(children) - 1
                  ? ''
                  : undefined,
            },
          });
        })}
      </div>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: buttonGroupRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      orientation: ['horizontal', 'vertical'],
      flexibleButton: [false, true],
      connectedButton: [false, true],
    },
  },
];
