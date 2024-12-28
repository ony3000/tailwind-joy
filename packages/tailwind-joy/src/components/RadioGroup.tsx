import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { createContext, forwardRef, createElement, useMemo } from 'react';
import { r, twMerge, useUniqueId } from '../base/alias';
import { theme } from '../base/theme';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { excludeClassName } from '../base/utils';

type PassingProps = Pick<
  ComponentProps<'input'>,
  'defaultValue' | 'name' | 'onChange' | 'value'
>;

export const RadioGroupContext = createContext<
  Partial<
    Pick<BaseVariants, 'size'> & {
      disableIcon?: boolean;
      overlay?: boolean;
    } & PassingProps
  >
>({});

function radioGroupRootVariants(
  props?: BaseVariants & {
    orientation?: 'horizontal' | 'vertical';
  },
) {
  const {
    color = 'neutral',
    size = 'md',
    variant = 'plain',
    orientation = 'vertical',
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-radio-group-root group/tj-radio-group',
      size === 'sm' && '[--RadioGroup-gap:0.625rem]',
      size === 'md' && '[--RadioGroup-gap:0.875rem]',
      size === 'lg' && '[--RadioGroup-gap:1.25rem]',
      'flex',
      r`m-[var(--unstable\_RadioGroup-margin)]`,
      orientation === 'horizontal' ? 'flex-row' : 'flex-col',
      'rounded-[6px]',
      theme.variants[variant][color].className,
      orientation === 'horizontal' && 'gap-x-[var(--RadioGroup-gap)]',
      orientation === 'vertical' && 'gap-y-[var(--RadioGroup-gap)]',
    ]),
  );
}

type RadioGroupRootVariants = BaseVariants & {
  disableIcon?: boolean;
  orientation?: 'horizontal' | 'vertical';
  overlay?: boolean;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
} & PassingProps;

type RadioGroupRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  RadioGroupRootVariants
> &
  RadioGroupRootVariants;

function RadioGroupRoot<T extends ReactTags = 'div'>(
  {
    // ---- passing props ----
    // base variants
    size = 'md',

    // non-base variants
    defaultValue,
    disableIcon = false,
    name,
    onChange,
    overlay = false,
    value,
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color = 'neutral',
    variant = 'plain',

    // non-base variants
    className,
    orientation = 'vertical',

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: RadioGroupRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const instanceName = useUniqueId();
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  return (
    <RadioGroupContext.Provider
      value={{
        size,
        defaultValue,
        disableIcon,
        overlay,
        name: name ?? instanceName,
        value,
        onChange,
      }}
    >
      {createElement(
        component,
        {
          ref,
          role: 'radiogroup',
          className: twMerge(
            radioGroupRootVariants({
              color,
              size,
              variant,
              orientation,
            }),
            className,
            slotProps.root?.className ?? '',
          ),
          ...otherProps,
          ...(slotPropsWithoutClassName.root ?? {}),
        },
        children,
      )}
    </RadioGroupContext.Provider>
  );
}

export const RadioGroup = forwardRef(RadioGroupRoot) as <
  T extends ReactTags = 'div',
>(
  props: RadioGroupRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: radioGroupRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      orientation: ['horizontal', 'vertical'],
    },
  },
];
