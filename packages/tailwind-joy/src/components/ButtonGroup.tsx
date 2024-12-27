import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import {
  forwardRef,
  createContext,
  createElement,
  cloneElement,
  isValidElement,
  Children,
  useMemo,
} from 'react';
import { r, twMerge } from '../base/alias';
import { addPrefix, toVariableClass } from '../base/modifier';
import { theme } from '../base/theme';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { excludeClassName } from '../base/utils';

export const ButtonGroupContext = createContext<
  Partial<
    BaseVariants & {
      disabled?: boolean;
    }
  >
>({});

export function buttonGroupRootVariants(
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
                'border-b-[length:var(--ButtonGroup-separatorSize)] border-solid border-b-[color:var(--ButtonGroup-separatorColor)]',
              ]
            : [
                r`[--Button-radius:var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)]`,
                r`[--IconButton-radius:var(--ButtonGroup-radius)_var(--unstable\_childRadius)_var(--unstable\_childRadius)_var(--ButtonGroup-radius)]`,
                'border-r-[length:var(--ButtonGroup-separatorSize)] border-solid border-r-[color:var(--ButtonGroup-separatorColor)]',
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
                'border-t-[length:var(--ButtonGroup-separatorSize)] border-solid border-t-[color:var(--ButtonGroup-separatorColor)]',
                'border-b-[length:var(--ButtonGroup-separatorSize)] border-solid border-b-[color:var(--ButtonGroup-separatorColor)]',
              ]
            : [
                'border-l-[length:var(--ButtonGroup-separatorSize)] border-solid border-l-[color:var(--ButtonGroup-separatorColor)]',
                'border-r-[length:var(--ButtonGroup-separatorSize)] border-solid border-r-[color:var(--ButtonGroup-separatorColor)]',
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
                'border-t-[length:var(--ButtonGroup-separatorSize)] border-solid border-t-[color:var(--ButtonGroup-separatorColor)]',
              ]
            : [
                r`[--Button-radius:var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)]`,
                r`[--IconButton-radius:var(--unstable\_childRadius)_var(--ButtonGroup-radius)_var(--ButtonGroup-radius)_var(--unstable\_childRadius)]`,
                'border-l-[length:var(--ButtonGroup-separatorSize)] border-solid border-l-[color:var(--ButtonGroup-separatorColor)]',
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
        '[&>*:not(.tj-icon-button-root)]:flex-[var(--tj-ButtonGroup-buttonFlex)]',
        '[&>:not(button)>.tj-button-root]:w-full',
      ],
    ]),
  );
}

export type ButtonGroupRootVariants = BaseVariants & {
  buttonFlex?: number | string;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  spacing?: string;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
};

type ButtonGroupRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ButtonGroupRootVariants
> &
  ButtonGroupRootVariants;

function ButtonGroupRoot<T extends ReactTags = 'div'>(
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
    <ButtonGroupContext.Provider value={{ color, size, variant, disabled }}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        const extraProps: Record<string, any> = {
          'data-first-child':
            Children.count(children) > 1 && index === 0 ? '' : undefined,
          'data-last-child':
            Children.count(children) > 1 &&
            index === Children.count(children) - 1
              ? ''
              : undefined,
        };

        return cloneElement(child, extraProps);
      })}
    </ButtonGroupContext.Provider>,
  );
}

export const ButtonGroup = forwardRef(ButtonGroupRoot) as <
  T extends ReactTags = 'div',
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
