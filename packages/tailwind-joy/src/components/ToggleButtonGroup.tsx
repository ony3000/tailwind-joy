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
import { twMerge } from '../base/alias';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '../base/types';
import { excludeClassName } from '../base/utils';
import type { ButtonGroupRootVariants } from './ButtonGroup';
import { ButtonGroupContext, buttonGroupRootVariants } from './ButtonGroup';

type ToggleButtonGroupValue = string | string[] | null;

type ToggleButtonGroupControlProps<
  V extends ToggleButtonGroupValue | undefined = undefined,
> = {
  value?: V;
  onChange?: (
    event: ChildButtonMouseEvent,
    value: V extends undefined
      ? unknown
      : V extends (infer S)[]
        ? S[]
        : V | null,
  ) => void;
};

type ChildButtonMouseEvent = Parameters<
  NonNullable<ComponentProps<'button'>['onClick']>
>[0];

export const ToggleButtonGroupContext = createContext<
  Partial<{
    value: ToggleButtonGroupValue;
    onClick?: (event: ChildButtonMouseEvent, childValue?: string) => void;
  }>
>({});

function toggleButtonGroupRootVariants(
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
      'tj-toggle-button-group-root group/tj-toggle-button-group',
      buttonGroupRootVariants({
        color,
        variant,
        orientation,
        flexibleButton,
        connectedButton,
      }),
    ]),
  );
}

type ToggleButtonGroupRootVariants<
  V extends ToggleButtonGroupValue | undefined,
> = ButtonGroupRootVariants & ToggleButtonGroupControlProps<V>;

type ToggleButtonGroupRootProps<
  T,
  V extends ToggleButtonGroupValue | undefined,
> = GenericComponentPropsWithVariants<
  'div',
  ToggleButtonGroupRootVariants<V>,
  T
>;

function ToggleButtonGroupRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
  V extends ToggleButtonGroupValue | undefined = undefined,
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
    onChange,
    orientation,
    spacing = '0',
    value,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: ToggleButtonGroupRootProps<T, V>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const refinedValue = value ?? null;

  return createElement(
    component,
    {
      ref,
      role: 'group',
      className: twMerge(
        toggleButtonGroupRootVariants({
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
    <ToggleButtonGroupContext.Provider
      value={{
        value: refinedValue,
        onClick: (event, childValue) => {
          if (!event.defaultPrevented) {
            if (!onChange || childValue === undefined) {
              return;
            }

            if (Array.isArray(refinedValue)) {
              const set = new Set<string>(refinedValue);

              if (set.has(childValue)) {
                set.delete(childValue);
              } else {
                set.add(childValue);
              }

              onChange(
                event,
                // @ts-expect-error
                Array.from(set),
              );
            } else {
              onChange(
                event,
                // @ts-expect-error
                refinedValue === childValue ? null : childValue,
              );
            }
          }
        },
      }}
    >
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
      </ButtonGroupContext.Provider>
    </ToggleButtonGroupContext.Provider>,
  );
}

export const ToggleButtonGroup = forwardRef(ToggleButtonGroupRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
  V extends ToggleButtonGroupValue | undefined = undefined,
>(
  props: ToggleButtonGroupRootProps<T, V> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: toggleButtonGroupRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      orientation: ['horizontal', 'vertical'],
      flexibleButton: [false, true],
      connectedButton: [false, true],
    },
  },
];
