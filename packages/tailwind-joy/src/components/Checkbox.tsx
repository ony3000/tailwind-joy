import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import { forwardRef, createElement, useState } from 'react';
import { MdCheck, MdHorizontalRule } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { r, uuid } from '../base/alias';
import {
  addPrefix,
  toColorClass,
  backgroundColor,
  borderColor,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens, colorTokens } from '../base/tokens';
import { iconClassVariants } from './internal/class-adapter';

type PassingProps = Pick<
  ComponentProps<'input'>,
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'id'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'readOnly'
  | 'required'
>;

function checkboxRootVariants(
  props?: BaseVariants & {
    disableIcon?: boolean;
    overlay?: boolean;
  },
) {
  const {
    color = 'neutral',
    size = 'md',
    variant = 'solid',
    disableIcon = false,
    overlay = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-checkbox-root group/tj-checkbox',
      '[--Icon-fontSize:var(--Checkbox-size)]',
      size === 'sm' && [
        '[--Checkbox-size:1rem]',
        '[&~*]:[--FormHelperText-margin:0_0_0_1.5rem]',
        'text-[0.875rem]',
        'gap-[var(--Checkbox-gap,0.5rem)]',
      ],
      size === 'md' && [
        '[--Checkbox-size:1.25rem]',
        '[&~*]:[--FormHelperText-margin:0.25rem_0_0_1.875rem]',
        'text-[1rem]',
        'gap-[var(--Checkbox-gap,0.625rem)]',
      ],
      size === 'lg' && [
        '[--Checkbox-size:1.5rem]',
        '[&~*]:[--FormHelperText-margin:0.375rem_0_0_2.25rem]',
        'text-[1.125rem]',
        'gap-[var(--Checkbox-gap,0.75rem)]',
      ],
      overlay ? '[position:initial]' : 'relative',
      'inline-flex',
      'leading-[var(--Checkbox-size)]',
      colorTokens.text.primary,
      addPrefix(
        textColor(theme.variants.plainDisabled[color].tokens.color),
        'has-[:disabled]:',
      ),
      disableIcon && [
        textColor(theme.variants[variant][color].tokens.color),
        addPrefix(
          textColor(theme.variants[`${variant}Disabled`][color].tokens.color),
          'has-[:disabled]:',
        ),
      ],
    ]),
  );
}

function checkboxCheckboxVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    disableIcon?: boolean;
    instanceActive?: boolean;
  },
) {
  const {
    color = 'neutral',
    variant = 'solid',
    disableIcon = false,
    instanceActive = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-checkbox-checkbox',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      'box-border',
      'rounded-[min(6px,0.25rem)]',
      'w-[var(--Checkbox-size)]',
      'h-[var(--Checkbox-size)]',
      'inline-flex',
      'justify-center',
      'items-center',
      'shrink-0',
      disableIcon && 'contents',
      instanceActive &&
        '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
      !disableIcon && [
        theme.variants[variant][color].className,
        !theme.variants[variant][color].tokens.backgroundColor &&
          colorTokens.background.surface,
        theme.variants[`${variant}Hover`][color].className,
        theme.variants[`${variant}Active`][color].className,
        addPrefix(
          clsx([
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
            textColor(theme.variants[`${variant}Disabled`][color].tokens.color),
            backgroundColor(
              theme.variants[`${variant}Disabled`][color].tokens
                .backgroundColor,
            ),
            borderColor(
              theme.variants[`${variant}Disabled`][color].tokens.borderColor,
            ),
          ]),
          'has-[:disabled]:',
        ),
      ],
    ]),
  );
}

function checkboxActionVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    disableIcon?: boolean;
    overlay?: boolean;
  },
) {
  const {
    color = 'neutral',
    variant = 'solid',
    disableIcon = false,
    overlay = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-checkbox-action',
      overlay
        ? r`rounded-[var(--Checkbox-actionRadius,var(--unstable\_actionRadius,inherit))]`
        : 'rounded-[var(--Checkbox-actionRadius,inherit)]',
      'text-left',
      'absolute',
      'inset-[calc(-1*var(--variant-borderWidth,0px))]',
      'z-[1]',
      addPrefix(
        clsx([
          'outline-2 outline outline-offset-2',
          toColorClass(baseTokens.focusVisible, 'outline-'),
        ]),
        'has-[:focus-visible]:',
      ),
      disableIcon && [
        theme.variants[variant][color].className,
        theme.variants[`${variant}Hover`][color].className,
        theme.variants[`${variant}Active`][color].className,
        addPrefix(
          clsx([
            'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
            textColor(theme.variants[`${variant}Disabled`][color].tokens.color),
            backgroundColor(
              theme.variants[`${variant}Disabled`][color].tokens
                .backgroundColor,
            ),
            borderColor(
              theme.variants[`${variant}Disabled`][color].tokens.borderColor,
            ),
          ]),
          'has-[:disabled]:',
        ),
      ],
    ]),
  );
}

function checkboxInputVariants() {
  return twMerge(
    clsx([
      'tj-checkbox-input',
      'm-0',
      'opacity-0',
      'absolute',
      'w-full',
      'h-full',
      'cursor-pointer',
    ]),
  );
}

function checkboxLabelVariants(props?: { disableIcon?: boolean }) {
  const { disableIcon = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-checkbox-label',
      'flex-1',
      'min-w-0',
      disableIcon && ['z-[1]', 'pointer-events-none'],
    ]),
  );
}

type CheckboxRootVariants = BaseVariants & {
  checkedIcon?: ReactNode;
  disableIcon?: boolean;
  indeterminate?: boolean;
  indeterminateIcon?: ReactNode;
  label?: ReactNode;
  overlay?: boolean;
  uncheckedIcon?: ReactNode;
} & {
  slotProps?: {
    root?: ComponentProps<'span'>;
    checkbox?: ComponentProps<'span'>;
    action?: ComponentProps<'span'>;
    input?: ComponentProps<'input'>;
    label?: ComponentProps<'label'>;
  };
} & PassingProps;

type CheckboxRootProps<T> = GenericComponentPropsWithVariants<
  'span',
  CheckboxRootVariants,
  T
>;

function CheckboxRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- passing props ----
    checked,
    defaultChecked,
    disabled,
    id,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required,
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color,
    size = 'md',
    variant,

    // non-base variants
    checkedIcon,
    className,
    disableIcon = false,
    indeterminate = false,
    indeterminateIcon,
    label,
    overlay,
    uncheckedIcon,

    // slot props
    slotProps = {},

    // others
    component = 'span',
    children,
    ...otherProps
    // ---------------------------
  }: CheckboxRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const [instanceId, setInstanceId] = useState(id ?? uuid());
  const [uncontrolledChecked, setUncontrolledChecked] = useState(
    defaultChecked ?? false,
  );

  const slotRootPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.root ?? {}).filter(([key]) => key !== 'className'),
  );
  const slotCheckboxPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.checkbox ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );
  const slotActionPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.action ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );
  const slotInputPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.input ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );
  const slotLabelPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.label ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );

  const instanceChecked = checked ?? uncontrolledChecked;

  const isCheckboxActive = instanceChecked || indeterminate;

  const activeVariant = variant ?? 'solid';
  const inactiveVariant = variant ?? 'outlined';
  const instanceVariant = isCheckboxActive ? activeVariant : inactiveVariant;

  const activeColor = color || 'primary';
  const inactiveColor = color || 'neutral';
  const instanceColor = isCheckboxActive ? activeColor : inactiveColor;

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        checkboxRootVariants({
          color: instanceColor,
          size,
          variant: instanceVariant,
          disableIcon,
          overlay,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      ...otherProps,
      ...slotRootPropsWithoutClassName,
    },
    <>
      <span
        className={twMerge(
          checkboxCheckboxVariants({
            color: instanceColor,
            variant: instanceVariant,
            disableIcon,
            instanceActive: isCheckboxActive,
          }),
          slotProps.checkbox?.className ?? '',
        )}
        {...slotCheckboxPropsWithoutClassName}
      >
        <span
          className={twMerge(
            checkboxActionVariants({
              color: instanceColor,
              variant: instanceVariant,
              disableIcon,
              overlay,
            }),
            slotProps.action?.className ?? '',
          )}
          {...slotActionPropsWithoutClassName}
        >
          <input
            type="checkbox"
            className={twMerge(
              checkboxInputVariants(),
              slotProps.input?.className ?? '',
            )}
            {...{
              checked,
              defaultChecked,
              disabled,
              id: instanceId,
              onBlur,
              onChange: (e) => {
                if (checked === undefined) {
                  setUncontrolledChecked(e.currentTarget.checked);
                }
                if (onChange) {
                  onChange(e);
                }
              },
              onFocus,
              readOnly,
              required,
            }}
            {...slotInputPropsWithoutClassName}
          />
        </span>
        {disableIcon
          ? null
          : indeterminate
            ? (indeterminateIcon ?? (
                <MdHorizontalRule
                  className={iconClassVariants({
                    color: instanceColor,
                    size,
                  })}
                />
              ))
            : instanceChecked
              ? (checkedIcon ?? (
                  <MdCheck
                    className={iconClassVariants({
                      color: instanceColor,
                      size,
                    })}
                  />
                ))
              : uncheckedIcon}
      </span>
      {label && (
        <label
          htmlFor={instanceId}
          className={twMerge(
            checkboxLabelVariants({ disableIcon }),
            slotProps.label?.className ?? '',
          )}
          {...slotLabelPropsWithoutClassName}
        >
          {label}
        </label>
      )}
    </>,
  );
}

export const Checkbox = forwardRef(CheckboxRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: CheckboxRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: checkboxRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      disableIcon: [false, true],
      overlay: [false, true],
    },
  },
  {
    generatorFn: checkboxCheckboxVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      disableIcon: [false, true],
      instanceActive: [false, true],
    },
  },
  {
    generatorFn: checkboxActionVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      disableIcon: [false, true],
      overlay: [false, true],
    },
  },
  {
    generatorFn: checkboxInputVariants,
    variants: {},
  },
  {
    generatorFn: checkboxLabelVariants,
    variants: {
      disableIcon: [false, true],
    },
  },
];
