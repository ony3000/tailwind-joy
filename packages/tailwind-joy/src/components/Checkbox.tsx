import { clsx } from 'clsx';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import { MdCheck, MdHorizontalRule } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r, uuid } from '../base/alias';
import {
  join,
  addPrefix,
  toColorClass,
  backgroundColor,
  borderColor,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';
import { iconClassVariants } from './internal/class-adapter';

const checkboxRootVariants = (
  props?: BaseVariants & {
    disableIcon?: boolean;
    overlay?: boolean;
  },
) => {
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
        textColor(baseTokens[color].plainDisabledColor),
        'has-[:disabled]:',
      ),
      disableIcon && [
        colorTokens[color][`${variant}Color`],
        addPrefix(
          textColor(baseTokens[color][`${variant}DisabledColor`]),
          'has-[:disabled]:',
        ),
      ],
    ]),
  );
};

const checkboxCheckboxVariants = (
  props?: BaseVariants & {
    disableIcon?: boolean;
    instanceActive?: boolean;
  },
) => {
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
        variant === 'outlined'
          ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
          : '[--variant-borderWidth:0px]',
        addPrefix(
          'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          'has-[:disabled]:',
        ),
        colorTokens[color][`${variant}Color`],
        colorTokens[color][`${variant}Bg`] || colorTokens.background.surface,
        colorTokens[color][`${variant}Border`],
        colorTokens[color][`${variant}HoverColor`],
        colorTokens[color][`${variant}HoverBg`],
        colorTokens[color][`${variant}ActiveColor`],
        colorTokens[color][`${variant}ActiveBg`],
        addPrefix(
          join([
            textColor(baseTokens[color][`${variant}DisabledColor`]),
            backgroundColor(baseTokens[color][`${variant}DisabledBg`]),
            borderColor(baseTokens[color][`${variant}DisabledBorder`]),
          ]),
          'has-[:disabled]:',
        ),
      ],
    ]),
  );
};

const checkboxActionVariants = (
  props?: BaseVariants & {
    disableIcon?: boolean;
    overlay?: boolean;
  },
) => {
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
        join([
          'outline-2 outline outline-offset-2',
          toColorClass(baseTokens.focusVisible, 'outline-'),
        ]),
        'has-[:focus-visible]:',
      ),
      disableIcon && [
        variant === 'outlined'
          ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
          : '[--variant-borderWidth:0px]',
        addPrefix(
          'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          'has-[:disabled]:',
        ),
        colorTokens[color][`${variant}Color`],
        colorTokens[color][`${variant}Bg`],
        colorTokens[color][`${variant}Border`],
        colorTokens[color][`${variant}HoverColor`],
        colorTokens[color][`${variant}HoverBg`],
        colorTokens[color][`${variant}ActiveColor`],
        colorTokens[color][`${variant}ActiveBg`],
        addPrefix(
          join([
            textColor(baseTokens[color][`${variant}DisabledColor`]),
            backgroundColor(baseTokens[color][`${variant}DisabledBg`]),
            borderColor(baseTokens[color][`${variant}DisabledBorder`]),
          ]),
          'has-[:disabled]:',
        ),
      ],
    ]),
  );
};

const checkboxInputVariants = (props?: BaseVariants) => {
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
};

const checkboxLabelVariants = (
  props?: BaseVariants & {
    disableIcon?: boolean;
  },
) => {
  const { disableIcon = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-checkbox-label',
      'flex-1',
      'min-w-0',
      disableIcon && ['z-[1]', 'pointer-events-none'],
    ]),
  );
};

interface CheckboxRootVariants extends BaseVariants {
  checkedIcon?: ReactNode;
  disableIcon?: boolean;
  indeterminate?: boolean;
  indeterminateIcon?: ReactNode;
  label?: ReactNode;
  overlay?: boolean;
  uncheckedIcon?: ReactNode;
}

type CheckboxRootProps = Omit<
  ComponentProps<'input'>,
  keyof CheckboxRootVariants
> &
  CheckboxRootVariants;

export const Checkbox = forwardRef<HTMLSpanElement, CheckboxRootProps>(
  function CheckboxRoot(
    {
      children,
      className,
      id,
      color,
      size = 'md',
      variant,
      checked,
      checkedIcon,
      defaultChecked,
      disabled,
      disableIcon = false,
      indeterminate = false,
      indeterminateIcon,
      label,
      overlay,
      uncheckedIcon,
      onChange,
      ...otherProps
    },
    ref,
  ) {
    const [instanceId, setInstanceId] = useState(id ?? uuid());
    const [uncontrolledChecked, setUncontrolledChecked] = useState(
      defaultChecked ?? false,
    );

    const instanceChecked = checked ?? uncontrolledChecked;

    const isCheckboxActive = instanceChecked || indeterminate;

    const activeVariant = variant ?? 'solid';
    const inactiveVariant = variant ?? 'outlined';
    const instanceVariant = isCheckboxActive ? activeVariant : inactiveVariant;

    const activeColor = color || 'primary';
    const inactiveColor = color || 'neutral';
    const instanceColor = isCheckboxActive ? activeColor : inactiveColor;

    return (
      <span
        ref={ref}
        className={twMerge(
          checkboxRootVariants({
            color: instanceColor,
            size,
            variant: instanceVariant,
            disableIcon,
            overlay,
          }),
          className,
        )}
      >
        <span
          className={checkboxCheckboxVariants({
            color: instanceColor,
            variant: instanceVariant,
            disableIcon,
            instanceActive: isCheckboxActive,
          })}
        >
          <span
            className={checkboxActionVariants({
              color: instanceColor,
              variant: instanceVariant,
              disableIcon,
              overlay,
            })}
          >
            <input
              id={instanceId}
              type="checkbox"
              className={checkboxInputVariants()}
              checked={checked}
              defaultChecked={defaultChecked}
              disabled={disabled}
              onChange={(e) => {
                if (checked === undefined) {
                  setUncontrolledChecked(e.currentTarget.checked);
                }
                if (onChange) {
                  onChange(e);
                }
              }}
              {...otherProps}
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
            className={checkboxLabelVariants({ disableIcon })}
          >
            {label}
          </label>
        )}
      </span>
    );
  },
);

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
