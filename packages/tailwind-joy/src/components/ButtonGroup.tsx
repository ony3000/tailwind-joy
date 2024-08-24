import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { forwardRef, isValidElement, Children } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import { join, addPrefix, toVariableClass } from '../base/modifier';
import { baseTokens } from '../base/tokens';

const buttonGroupRootVariants = (
  props?: BaseVariants & {
    orientation?: 'horizontal' | 'vertical';
    flexibleButton?: boolean;
    connectedButton?: boolean;
  },
) => {
  const {
    color = 'neutral',
    variant = 'outlined',
    orientation = 'horizontal',
    flexibleButton = false,
    connectedButton = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-button-group-root group/tj-button-group',
      variant === 'outlined'
        ? '[--ButtonGroup-separatorSize:1px]'
        : '[--ButtonGroup-separatorSize:calc(var(--ButtonGroup-connected)*1px)]',
      toVariableClass(
        baseTokens[color].outlinedBorder,
        'ButtonGroup-separatorColor',
      ),
      '[--ButtonGroup-radius:6px]',
      '[--Divider-inset:0.5rem]',
      '[--unstable_childRadius:calc((1-var(--ButtonGroup-connected))*var(--ButtonGroup-radius)-var(--variant-borderWidth,0px))]',
      connectedButton
        ? '[--ButtonGroup-connected:1]'
        : '[--ButtonGroup-connected:0]',
      'gap-[var(--tj-gap)]',
      'flex',
      'rounded-[var(--ButtonGroup-radius)]',
      orientation === 'vertical' ? 'flex-col' : 'flex-row',
      addPrefix(
        join([
          ...(orientation === 'vertical'
            ? [
                r`[--Button-radius:var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)]`,
                r`[--IconButton-radius:var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)]`,
                '[border-bottom:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ]
            : [
                r`[--Button-radius:var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)]`,
                r`[--IconButton-radius:var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)]`,
                '[border-right:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ]),
        ]),
        '[&>[data-first-child]]:',
      ),
      addPrefix(
        join([
          r`[--Button-radius:var(--unstable\_childRadius)]`,
          r`[--IconButton-radius:var(--unstable\_childRadius)]`,
          r`rounded-[var(--unstable\_childRadius)]`,
          ...(orientation === 'vertical'
            ? [
                '[border-top:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
                '[border-bottom:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ]
            : [
                '[border-left:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
                '[border-right:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ]),
        ]),
        '[&>:not([data-first-child]):not([data-last-child]):not(:only-child)]:',
      ),
      addPrefix(
        join([
          ...(orientation === 'vertical'
            ? [
                r`[--Button-radius:var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)]`,
                r`[--IconButton-radius:var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)]`,
                '[border-top:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ]
            : [
                r`[--Button-radius:var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)]`,
                r`[--IconButton-radius:var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)]`,
                '[border-left:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ]),
        ]),
        '[&>[data-last-child]]:',
      ),
      addPrefix(
        join([
          '[--Button-radius:var(--ButtonGroup-radius)]',
          '[--IconButton-radius:var(--ButtonGroup-radius)]',
        ]),
        '[&>:only-child]:',
      ),
      addPrefix(
        join([
          ...(orientation === 'vertical'
            ? [
                '[--Button-margin:calc(var(--ButtonGroup-separatorSize)*-1)_0_0_0]',
                '[--IconButton-margin:calc(var(--ButtonGroup-separatorSize)*-1)_0_0_0]',
              ]
            : [
                '[--Button-margin:0_0_0_calc(var(--ButtonGroup-separatorSize)*-1)]',
                '[--IconButton-margin:0_0_0_calc(var(--ButtonGroup-separatorSize)*-1)]',
              ]),
        ]),
        '[&>:not([data-first-child]):not(:only-child)]:',
      ),
      '[&_.tj-button-root:enabled]:z-[1]',
      addPrefix(
        toVariableClass(
          baseTokens[color].outlinedDisabledBorder,
          'ButtonGroup-separatorColor',
        ),
        '[&_.tj-button-root:disabled]:',
      ),
      'non-touchscreen:[&_.tj-button-root:hover]:z-[2]',
      '[&_.tj-button-root:focus-visible]:z-[2]',
      '[&_.tj-icon-button-root:enabled]:z-[1]',
      addPrefix(
        toVariableClass(
          baseTokens[color].outlinedDisabledBorder,
          'ButtonGroup-separatorColor',
        ),
        '[&_.tj-icon-button-root:disabled]:',
      ),
      'non-touchscreen:[&_.tj-icon-button-root:hover]:z-[2]',
      '[&_.tj-icon-button-root:focus-visible]:z-[2]',
      flexibleButton && [
        '[&>*:not(.tj-icon-button-root)]:[flex:var(--tj-buttonFlex)]',
        '[&>:not(button)>.tj-button-root]:w-full',
      ],
    ]),
  );
};

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
      variant: ['solid', 'soft', 'outlined', 'plain'],
      orientation: ['horizontal', 'vertical'],
      flexibleButton: [false, true],
      connectedButton: [false, true],
    },
  },
];
