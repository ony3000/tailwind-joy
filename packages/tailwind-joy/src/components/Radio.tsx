import { clsx } from 'clsx';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef, useContext, useState } from 'react';
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
import { RadioGroupContext } from './RadioGroup';

function radioRootVariants(
  props?: BaseVariants & {
    disableIcon?: boolean;
    overlay?: boolean;
  },
) {
  const {
    color,
    size = 'md',
    variant = 'outlined',
    disableIcon = false,
    overlay = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-radio-root group/tj-radio',
      '[--Icon-fontSize:var(--Radio-size)]',
      '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
      size === 'sm' && [
        '[--Radio-size:1rem]',
        '[&~*]:[--FormHelperText-margin:0_0_0_1.5rem]',
        'text-[0.875rem]',
        'gap-[var(--Radio-gap,0.5rem)]',
      ],
      size === 'md' && [
        '[--Radio-size:1.25rem]',
        '[&~*]:[--FormHelperText-margin:0.25rem_0_0_1.875rem]',
        'text-[1rem]',
        'gap-[var(--Radio-gap,0.625rem)]',
      ],
      size === 'lg' && [
        '[--Radio-size:1.5rem]',
        '[&~*]:[--FormHelperText-margin:0.375rem_0_0_2.25rem]',
        'text-[1.125rem]',
        'gap-[var(--Radio-gap,0.75rem)]',
      ],
      overlay ? '[position:initial]' : 'relative',
      'inline-flex',
      'box-border',
      'min-w-0',
      'leading-[var(--Radio-size)]',
      colorTokens.text.primary,
      color && [
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
      ],
      !color && [
        addPrefix(
          textColor(baseTokens.primary.plainDisabledColor),
          'has-[:checked]:has-[:disabled]:',
        ),
        disableIcon && [
          addPrefix(colorTokens.primary[`${variant}Color`], 'has-[:checked]:'),
          addPrefix(
            textColor(baseTokens.primary[`${variant}DisabledColor`]),
            'has-[:checked]:has-[:disabled]:',
          ),
        ],
        addPrefix(
          textColor(baseTokens.neutral.plainDisabledColor),
          '[&:not(:has(:checked))]:has-[:disabled]:',
        ),
        disableIcon && [
          addPrefix(
            colorTokens.neutral[`${variant}Color`],
            '[&:not(:has(:checked))]:',
          ),
          addPrefix(
            textColor(baseTokens.neutral[`${variant}DisabledColor`]),
            '[&:not(:has(:checked))]:has-[:disabled]:',
          ),
        ],
      ],
    ]),
  );
}

function radioRadioVariants(
  props?: BaseVariants & {
    disableIcon?: boolean;
    overlay?: boolean;
  },
) {
  const { color, variant = 'outlined', disableIcon = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-radio-radio',
      variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
        : [
            color && [
              color !== 'neutral'
                ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
                : toVariableClass(baseTokens.text.icon, 'Icon-color'),
            ],
            !color && [
              addPrefix(
                '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
                'has-[:checked]:',
              ),
              addPrefix(
                toVariableClass(baseTokens.text.icon, 'Icon-color'),
                '[&:not(:has(:checked))]:',
              ),
            ],
          ],
      'm-0',
      'box-border',
      'w-[var(--Radio-size)]',
      'h-[var(--Radio-size)]',
      'rounded-[var(--Radio-size)]',
      'inline-flex',
      'justify-center',
      'items-center',
      'shrink-0',
      disableIcon && 'contents',
      addPrefix(
        '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
        'has-[:checked]:',
      ),
      !disableIcon && [
        variant === 'outlined'
          ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
          : '[--variant-borderWidth:0px]',
        addPrefix(
          'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          'has-[:disabled]:',
        ),
        color && [
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
        !color && [
          addPrefix(
            join([
              colorTokens.primary[`${variant}Color`],
              colorTokens.primary[`${variant}Bg`] ||
                colorTokens.background.surface,
              colorTokens.primary[`${variant}Border`],
              colorTokens.primary[`${variant}HoverColor`],
              colorTokens.primary[`${variant}HoverBg`],
              colorTokens.primary[`${variant}ActiveColor`],
              colorTokens.primary[`${variant}ActiveBg`],
            ]),
            'has-[:checked]:',
          ),
          addPrefix(
            join([
              textColor(baseTokens.primary[`${variant}DisabledColor`]),
              backgroundColor(baseTokens.primary[`${variant}DisabledBg`]),
              borderColor(baseTokens.primary[`${variant}DisabledBorder`]),
            ]),
            'has-[:checked]:has-[:disabled]:',
          ),
          addPrefix(
            join([
              colorTokens.neutral[`${variant}Color`],
              colorTokens.neutral[`${variant}Bg`] ||
                colorTokens.background.surface,
              colorTokens.neutral[`${variant}Border`],
              colorTokens.neutral[`${variant}HoverColor`],
              colorTokens.neutral[`${variant}HoverBg`],
              colorTokens.neutral[`${variant}ActiveColor`],
              colorTokens.neutral[`${variant}ActiveBg`],
            ]),
            '[&:not(:has(:checked))]:',
          ),
          addPrefix(
            join([
              textColor(baseTokens.neutral[`${variant}DisabledColor`]),
              backgroundColor(baseTokens.neutral[`${variant}DisabledBg`]),
              borderColor(baseTokens.neutral[`${variant}DisabledBorder`]),
            ]),
            '[&:not(:has(:checked))]:has-[:disabled]:',
          ),
        ],
      ],
    ]),
  );
}

function radioActionVariants(
  props?: BaseVariants & {
    disableIcon?: boolean;
    overlay?: boolean;
  },
) {
  const {
    color,
    variant = 'outlined',
    disableIcon = false,
    overlay = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-radio-action',
      'absolute',
      'text-left',
      overlay
        ? r`rounded-[var(--Radio-actionRadius,var(--unstable\_actionRadius,inherit))]`
        : 'rounded-[var(--Radio-actionRadius,inherit)]',
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
        color && [
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
        !color && [
          addPrefix(
            join([
              colorTokens.primary[`${variant}Color`],
              colorTokens.primary[`${variant}Bg`],
              colorTokens.primary[`${variant}Border`],
              colorTokens.primary[`${variant}HoverColor`],
              colorTokens.primary[`${variant}HoverBg`],
              colorTokens.primary[`${variant}ActiveColor`],
              colorTokens.primary[`${variant}ActiveBg`],
            ]),
            'has-[:checked]:',
          ),
          addPrefix(
            join([
              textColor(baseTokens.primary[`${variant}DisabledColor`]),
              backgroundColor(baseTokens.primary[`${variant}DisabledBg`]),
              borderColor(baseTokens.primary[`${variant}DisabledBorder`]),
            ]),
            'has-[:checked]:has-[:disabled]:',
          ),
          addPrefix(
            join([
              colorTokens.neutral[`${variant}Color`],
              colorTokens.neutral[`${variant}Bg`],
              colorTokens.neutral[`${variant}Border`],
              colorTokens.neutral[`${variant}HoverColor`],
              colorTokens.neutral[`${variant}HoverBg`],
              colorTokens.neutral[`${variant}ActiveColor`],
              colorTokens.neutral[`${variant}ActiveBg`],
            ]),
            '[&:not(:has(:checked))]:',
          ),
          addPrefix(
            join([
              textColor(baseTokens.neutral[`${variant}DisabledColor`]),
              backgroundColor(baseTokens.neutral[`${variant}DisabledBg`]),
              borderColor(baseTokens.neutral[`${variant}DisabledBorder`]),
            ]),
            '[&:not(:has(:checked))]:has-[:disabled]:',
          ),
        ],
      ],
    ]),
  );
}

function radioInputVariants(props?: BaseVariants) {
  return twMerge(
    clsx([
      'tj-radio-input',
      'm-0',
      'opacity-0',
      'absolute',
      'h-full',
      'w-full',
      'cursor-pointer',
    ]),
  );
}

function radioLabelVariants(
  props?: BaseVariants & {
    disableIcon?: boolean;
  },
) {
  const { disableIcon = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-radio-label',
      'flex-1',
      'min-w-0',
      disableIcon && ['z-[1]', 'pointer-events-none'],
    ]),
  );
}

function radioIconVariants(props?: BaseVariants) {
  return twMerge(
    clsx([
      'tj-radio-icon',
      'w-[calc(var(--Radio-size)/2)]',
      'h-[calc(var(--Radio-size)/2)]',
      'rounded-[inherit]',
      'text-inherit',
      'bg-current',
      'group-has-[:checked]/tj-radio:scale-100',
      r`[.group\/tj-radio:not(:has(:checked))_&]:scale-0`,
    ]),
  );
}

interface RadioRootVariants extends BaseVariants {
  disableIcon?: boolean;
  label?: ReactNode;
  overlay?: boolean;
}

type RadioRootProps = Omit<ComponentProps<'input'>, keyof RadioRootVariants> &
  RadioRootVariants;

export const Radio = forwardRef<HTMLSpanElement, RadioRootProps>(
  function RadioRoot(
    {
      children,
      className,
      id,
      name,
      value,
      color,
      size,
      variant,
      checked,
      defaultChecked,
      disabled,
      disableIcon,
      label,
      overlay,
      onChange,
      ...otherProps
    },
    ref,
  ) {
    const radioGroup = useContext(RadioGroupContext);
    const [instanceId, setInstanceId] = useState(id ?? uuid());

    const instanceName = name ?? radioGroup.name;
    const instanceSize = size ?? radioGroup.size;
    const instanceChecked =
      radioGroup.value === undefined ? checked : radioGroup.value === value;
    const instanceDefaultChecked =
      radioGroup.value === undefined
        ? radioGroup.defaultValue === undefined
          ? defaultChecked
          : radioGroup.defaultValue === value
        : undefined;
    const instanceDisableIcon = disableIcon ?? radioGroup.disableIcon;
    const instanceOverlay = overlay ?? radioGroup.overlay;
    const instanceOnChange = radioGroup.onChange ?? onChange;

    return (
      <span
        ref={ref}
        className={twMerge(
          radioRootVariants({
            color,
            size: instanceSize,
            variant,
            disableIcon: instanceDisableIcon,
            overlay: instanceOverlay,
          }),
          className,
        )}
      >
        <span
          className={radioRadioVariants({
            color,
            variant,
            disableIcon: instanceDisableIcon,
          })}
        >
          {instanceDisableIcon ? null : (
            <span className={radioIconVariants()} />
          )}
          <span
            className={radioActionVariants({
              color,
              variant,
              disableIcon: instanceDisableIcon,
              overlay: instanceOverlay,
            })}
          >
            <input
              id={instanceId}
              type="radio"
              name={instanceName}
              className={radioInputVariants()}
              checked={instanceChecked}
              defaultChecked={instanceDefaultChecked}
              disabled={disabled}
              value={value}
              onChange={instanceOnChange}
              {...otherProps}
            />
          </span>
        </span>
        {label && (
          <label
            htmlFor={instanceId}
            className={radioLabelVariants({ disableIcon: instanceDisableIcon })}
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
    generatorFn: radioRootVariants,
    variants: {
      color: [undefined, 'primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      disableIcon: [false, true],
      overlay: [false, true],
    },
  },
  {
    generatorFn: radioRadioVariants,
    variants: {
      color: [undefined, 'primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      disableIcon: [false, true],
    },
  },
  {
    generatorFn: radioActionVariants,
    variants: {
      color: [undefined, 'primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      disableIcon: [false, true],
      overlay: [false, true],
    },
  },
  {
    generatorFn: radioInputVariants,
    variants: {},
  },
  {
    generatorFn: radioLabelVariants,
    variants: {
      disableIcon: [false, true],
    },
  },
  {
    generatorFn: radioIconVariants,
    variants: {},
  },
];
