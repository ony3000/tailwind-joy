import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import {
  forwardRef,
  createElement,
  useContext,
  useState,
  useMemo,
} from 'react';
import { r, uuid, twMerge } from '../base/alias';
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
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { excludeClassName } from '../base/utils';
import { RadioGroupContext } from './RadioGroup';

type PassingProps = Pick<
  ComponentProps<'input'>,
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'id'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'readOnly'
  | 'required'
  | 'value'
>;

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
      ],
      !color && [
        addPrefix(
          clsx([
            addPrefix(
              textColor(theme.variants.plainDisabled.primary.tokens.color),
              'has-[:disabled]:',
            ),
            disableIcon && [
              textColor(theme.variants[variant].primary.tokens.color),
              addPrefix(
                textColor(
                  theme.variants[`${variant}Disabled`].primary.tokens.color,
                ),
                'has-[:disabled]:',
              ),
            ],
          ]),
          'has-[:checked]:',
        ),
        addPrefix(
          clsx([
            addPrefix(
              textColor(theme.variants.plainDisabled.neutral.tokens.color),
              'has-[:disabled]:',
            ),
            disableIcon && [
              textColor(theme.variants[variant].neutral.tokens.color),
              addPrefix(
                textColor(
                  theme.variants[`${variant}Disabled`].neutral.tokens.color,
                ),
                'has-[:disabled]:',
              ),
            ],
          ]),
          '[&:not(:has(:checked))]:',
        ),
      ],
    ]),
  );
}

function radioRadioVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    disableIcon?: boolean;
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
        color && [
          theme.variants[variant][color].className,
          !theme.variants[variant][color].tokens.backgroundColor &&
            colorTokens.background.surface,
          theme.variants[`${variant}Hover`][color].className,
          theme.variants[`${variant}Active`][color].className,
          addPrefix(
            clsx([
              'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
              textColor(
                theme.variants[`${variant}Disabled`][color].tokens.color,
              ),
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
        !color && [
          addPrefix(
            clsx([
              theme.variants[variant].primary.className,
              !theme.variants[variant].primary.tokens.backgroundColor &&
                colorTokens.background.surface,
              theme.variants[`${variant}Hover`].primary.className,
              theme.variants[`${variant}Active`].primary.className,
              addPrefix(
                clsx([
                  'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
                  textColor(
                    theme.variants[`${variant}Disabled`].primary.tokens.color,
                  ),
                  backgroundColor(
                    theme.variants[`${variant}Disabled`].primary.tokens
                      .backgroundColor,
                  ),
                  borderColor(
                    theme.variants[`${variant}Disabled`].primary.tokens
                      .borderColor,
                  ),
                ]),
                'has-[:disabled]:',
              ),
            ]),
            'has-[:checked]:',
          ),
          addPrefix(
            clsx([
              theme.variants[variant].neutral.className,
              !theme.variants[variant].neutral.tokens.backgroundColor &&
                colorTokens.background.surface,
              theme.variants[`${variant}Hover`].neutral.className,
              theme.variants[`${variant}Active`].neutral.className,
              addPrefix(
                clsx([
                  'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
                  textColor(
                    theme.variants[`${variant}Disabled`].neutral.tokens.color,
                  ),
                  backgroundColor(
                    theme.variants[`${variant}Disabled`].neutral.tokens
                      .backgroundColor,
                  ),
                  borderColor(
                    theme.variants[`${variant}Disabled`].neutral.tokens
                      .borderColor,
                  ),
                ]),
                'has-[:disabled]:',
              ),
            ]),
            '[&:not(:has(:checked))]:',
          ),
        ],
      ],
    ]),
  );
}

function radioActionVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
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
        clsx([
          'outline-2 outline outline-offset-2',
          toColorClass(baseTokens.focusVisible, 'outline-'),
        ]),
        'has-[:focus-visible]:',
      ),
      disableIcon && [
        color && [
          theme.variants[variant][color].className,
          theme.variants[`${variant}Hover`][color].className,
          theme.variants[`${variant}Active`][color].className,
          addPrefix(
            clsx([
              'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
              textColor(
                theme.variants[`${variant}Disabled`][color].tokens.color,
              ),
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
        !color && [
          addPrefix(
            clsx([
              theme.variants[variant].primary.className,
              theme.variants[`${variant}Hover`].primary.className,
              theme.variants[`${variant}Active`].primary.className,
              addPrefix(
                clsx([
                  'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
                  textColor(
                    theme.variants[`${variant}Disabled`].primary.tokens.color,
                  ),
                  backgroundColor(
                    theme.variants[`${variant}Disabled`].primary.tokens
                      .backgroundColor,
                  ),
                  borderColor(
                    theme.variants[`${variant}Disabled`].primary.tokens
                      .borderColor,
                  ),
                ]),
                'has-[:disabled]:',
              ),
            ]),
            'has-[:checked]:',
          ),
          addPrefix(
            clsx([
              theme.variants[variant].neutral.className,
              theme.variants[`${variant}Hover`].neutral.className,
              theme.variants[`${variant}Active`].neutral.className,
              addPrefix(
                clsx([
                  'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
                  textColor(
                    theme.variants[`${variant}Disabled`].neutral.tokens.color,
                  ),
                  backgroundColor(
                    theme.variants[`${variant}Disabled`].neutral.tokens
                      .backgroundColor,
                  ),
                  borderColor(
                    theme.variants[`${variant}Disabled`].neutral.tokens
                      .borderColor,
                  ),
                ]),
                'has-[:disabled]:',
              ),
            ]),
            '[&:not(:has(:checked))]:',
          ),
        ],
      ],
    ]),
  );
}

function radioInputVariants() {
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

function radioLabelVariants(props?: { disableIcon?: boolean }) {
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

function radioIconVariants() {
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

type RadioRootVariants = BaseVariants & {
  disableIcon?: boolean;
  label?: ReactNode;
  overlay?: boolean;
} & {
  slotProps?: {
    root?: ComponentProps<'span'>;
    radio?: ComponentProps<'span'>;
    icon?: ComponentProps<'span'>;
    action?: ComponentProps<'span'>;
    input?: ComponentProps<'input'>;
    label?: ComponentProps<'label'>;
  };
} & PassingProps;

type RadioRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  RadioRootVariants
> &
  RadioRootVariants;

function RadioRoot<T extends ReactTags = 'span'>(
  {
    // ---- passing props ----
    checked,
    defaultChecked,
    disabled,
    id,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required,
    value,
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color,
    size,
    variant,

    // non-base variants
    className,
    disableIcon,
    label,
    overlay,

    // slot props
    slotProps = {},

    // others
    component = 'span',
    children,
    ...otherProps
    // ---------------------------
  }: RadioRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const radioGroup = useContext(RadioGroupContext);
  const [instanceId, setInstanceId] = useState(id ?? uuid());
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

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

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        radioRootVariants({
          color,
          size: instanceSize,
          variant,
          disableIcon: instanceDisableIcon,
          overlay: instanceOverlay,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    <>
      <span
        className={twMerge(
          radioRadioVariants({
            color,
            variant,
            disableIcon: instanceDisableIcon,
          }),
          slotProps.radio?.className ?? '',
        )}
        {...(slotPropsWithoutClassName.radio ?? {})}
      >
        {instanceDisableIcon ? null : (
          <span
            className={twMerge(
              radioIconVariants(),
              slotProps.icon?.className ?? '',
            )}
            {...(slotPropsWithoutClassName.icon ?? {})}
          />
        )}
        <span
          className={twMerge(
            radioActionVariants({
              color,
              variant,
              disableIcon: instanceDisableIcon,
              overlay: instanceOverlay,
            }),
            slotProps.action?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.action ?? {})}
        >
          <input
            type="radio"
            className={twMerge(
              radioInputVariants(),
              slotProps.input?.className ?? '',
            )}
            {...{
              checked: instanceChecked,
              defaultChecked: instanceDefaultChecked,
              disabled,
              id: instanceId,
              name: instanceName,
              onBlur,
              onChange: instanceOnChange,
              onFocus,
              readOnly,
              required,
              value,
            }}
            {...(slotPropsWithoutClassName.input ?? {})}
          />
        </span>
      </span>
      {label && (
        <label
          htmlFor={instanceId}
          className={twMerge(
            radioLabelVariants({ disableIcon: instanceDisableIcon }),
            slotProps.label?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.label ?? {})}
        >
          {label}
        </label>
      )}
    </>,
  );
}

export const Radio = forwardRef(RadioRoot) as <T extends ReactTags = 'span'>(
  props: RadioRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

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
