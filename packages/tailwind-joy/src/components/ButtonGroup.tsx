import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import {
  forwardRef,
  createElement,
  cloneElement,
  isValidElement,
  Children,
  useMemo,
} from 'react';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { r, twMerge } from '../base/alias';
import { addPrefix, toVariableClass } from '../base/modifier';
import { theme } from '../base/theme';
import { excludeClassName } from '../base/utils';

function buttonGroupRootVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    orientation?: 'horizontal' | 'vertical';
    flexibleButton?: boolean;
    connectedButton?: boolean;
  },
) {
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
        theme.variants.outlined[color].tokens.borderColor,
        'ButtonGroup-separatorColor',
      ),
      '[--ButtonGroup-radius:6px]',
      '[--Divider-inset:0.5rem]',
      '[--unstable_childRadius:calc((1-var(--ButtonGroup-connected))*var(--ButtonGroup-radius)-var(--variant-borderWidth,0px))]',
      connectedButton
        ? '[--ButtonGroup-connected:1]'
        : '[--ButtonGroup-connected:0]',
      'gap-[var(--tj-ButtonGroup-spacing)]',
      'flex',
      'rounded-[var(--ButtonGroup-radius)]',
      orientation === 'vertical' ? 'flex-col' : 'flex-row',
      addPrefix(
        clsx([
          orientation === 'vertical'
            ? [
                r`[--Button-radius:var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)]`,
                r`[--IconButton-radius:var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)]`,
                '[border-bottom:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ]
            : [
                r`[--Button-radius:var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)]`,
                r`[--IconButton-radius:var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)]`,
                '[border-right:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ],
        ]),
        '[&>[data-first-child]]:',
      ),
      addPrefix(
        clsx([
          r`[--Button-radius:var(--unstable\_childRadius)]`,
          r`[--IconButton-radius:var(--unstable\_childRadius)]`,
          r`rounded-[var(--unstable\_childRadius)]`,
          orientation === 'vertical'
            ? [
                '[border-top:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
                '[border-bottom:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ]
            : [
                '[border-left:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
                '[border-right:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ],
        ]),
        '[&>:not([data-first-child]):not([data-last-child]):not(:only-child)]:',
      ),
      addPrefix(
        clsx([
          orientation === 'vertical'
            ? [
                r`[--Button-radius:var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)]`,
                r`[--IconButton-radius:var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)]`,
                '[border-top:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ]
            : [
                r`[--Button-radius:var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)]`,
                r`[--IconButton-radius:var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)]`,
                '[border-left:var(--ButtonGroup-separatorSize)_solid_var(--ButtonGroup-separatorColor)]',
              ],
        ]),
        '[&>[data-last-child]]:',
      ),
      addPrefix(
        clsx([
          '[--Button-radius:var(--ButtonGroup-radius)]',
          '[--IconButton-radius:var(--ButtonGroup-radius)]',
        ]),
        '[&>:only-child]:',
      ),
      addPrefix(
        clsx([
          orientation === 'vertical'
            ? [
                '[--Button-margin:calc(var(--ButtonGroup-separatorSize)*-1)_0_0_0]',
                '[--IconButton-margin:calc(var(--ButtonGroup-separatorSize)*-1)_0_0_0]',
              ]
            : [
                '[--Button-margin:0_0_0_calc(var(--ButtonGroup-separatorSize)*-1)]',
                '[--IconButton-margin:0_0_0_calc(var(--ButtonGroup-separatorSize)*-1)]',
              ],
        ]),
        '[&>:not([data-first-child]):not(:only-child)]:',
      ),
      [
        '[&_.tj-button-root:enabled]:z-[1]',
        addPrefix(
          toVariableClass(
            theme.variants.outlinedDisabled[color].tokens.borderColor,
            'ButtonGroup-separatorColor',
          ),
          '[&_.tj-button-root:disabled]:',
        ),
        'non-touchscreen:[&_.tj-button-root:hover]:z-[2]',
        '[&_.tj-button-root:focus-visible]:z-[2]',
      ],
      [
        '[&_.tj-icon-button-root:enabled]:z-[1]',
        addPrefix(
          toVariableClass(
            theme.variants.outlinedDisabled[color].tokens.borderColor,
            'ButtonGroup-separatorColor',
          ),
          '[&_.tj-icon-button-root:disabled]:',
        ),
        'non-touchscreen:[&_.tj-icon-button-root:hover]:z-[2]',
        '[&_.tj-icon-button-root:focus-visible]:z-[2]',
      ],
      flexibleButton && [
        '[&>*:not(.tj-icon-button-root)]:[flex:var(--tj-ButtonGroup-buttonFlex)]',
        '[&>:not(button)>.tj-button-root]:w-full',
      ],
    ]),
  );
}

type ButtonGroupRootVariants = BaseVariants & {
  buttonFlex?: number | string;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  spacing?: string;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
};

type ButtonGroupRootProps<T> = GenericComponentPropsWithVariants<
  'div',
  ButtonGroupRootVariants,
  T
>;

function ButtonGroupRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- passing props ----
    // base variants
    color = 'neutral',
    size = 'md',
    variant = 'outlined',

    // non-base variants
    disabled = false,
    // -----------------------

    // ---- non-passing props ----
    // non-base variants
    className,
    style,
    buttonFlex,
    orientation,
    spacing = '0',

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: ButtonGroupRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  return createElement(
    component,
    {
      ref,
      role: 'group',
      className: twMerge(
        buttonGroupRootVariants({
          color,
          variant,
          orientation,
          flexibleButton: buttonFlex !== undefined,
          connectedButton: Number.parseFloat(spacing) === 0,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      style: {
        ...style,
        ...(buttonFlex === undefined
          ? {}
          : {
              '--tj-ButtonGroup-buttonFlex': buttonFlex,
            }),
        '--tj-ButtonGroup-spacing': spacing,
      },
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    <>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        return cloneElement(child, {
          // @ts-expect-error
          color: child.props?.color ?? color,
          size: child.props?.size ?? size,
          variant: child.props?.variant ?? variant,
          disabled: (child.props?.loading || child.props?.disabled) ?? disabled,
          'data-first-child':
            Children.count(children) > 1 && index === 0 ? '' : undefined,
          'data-last-child':
            Children.count(children) > 1 &&
            index === Children.count(children) - 1
              ? ''
              : undefined,
        });
      })}
    </>,
  );
}

export const ButtonGroup = forwardRef(ButtonGroupRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: ButtonGroupRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

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
