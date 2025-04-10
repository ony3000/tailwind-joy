import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import { forwardRef, createElement, useMemo } from 'react';
import { r, twMerge } from '../base/alias';
import {
  addPrefix,
  backgroundColor,
  borderColor,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { isTailwindVersion4, excludeClassName } from '../base/utils';

type PassingProps = Pick<
  ComponentProps<'input'>,
  | 'autoComplete'
  | 'autoFocus'
  | 'defaultValue'
  | 'disabled'
  | 'id'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'onClick'
  | 'onFocus'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'type'
  | 'value'
>;

function inputStartDecoratorVariants(props?: { isTailwind4?: boolean }) {
  const { isTailwind4 = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-input-start-decorator',
      '[--Button-margin:0_0_0_calc(var(--Input-decoratorChildOffset)*-1)]',
      '[--IconButton-margin:0_0_0_calc(var(--Input-decoratorChildOffset)*-1)]',
      '[--Icon-margin:0_0_0_calc(var(--Input-paddingInline)/-4)]',
      '[display:inherit]',
      'items-center',
      isTailwind4
        ? r`py-[var(--unstable\_InputPaddingBlock)]`
        : r`[padding-block:var(--unstable\_InputPaddingBlock)]`,
      'flex-wrap',
      'me-[var(--Input-gap)]',
      'text-[color:var(--Input-decoratorColor)]',
      '[cursor:initial]',
    ]),
  );
}

function inputEndDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-input-end-decorator',
      '[--Button-margin:0_calc(var(--Input-decoratorChildOffset)*-1)_0_0]',
      '[--IconButton-margin:0_calc(var(--Input-decoratorChildOffset)*-1)_0_0]',
      '[--Icon-margin:0_calc(var(--Input-paddingInline)/-4)_0_0]',
      '[display:inherit]',
      'items-center',
      'ms-[var(--Input-gap)]',
      'text-[color:var(--Input-decoratorColor)]',
      '[cursor:initial]',
    ]),
  );
}

function inputInputVariants(props?: {
  isTailwind4?: boolean;
  hasStartDecorator?: boolean;
  hasEndDecorator?: boolean;
}) {
  const {
    isTailwind4 = false,
    hasStartDecorator = false,
    hasEndDecorator = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-input-input',
      'border-0',
      'min-w-0',
      isTailwind4 ? 'outline-hidden' : 'outline-none',
      'p-0',
      'flex-1',
      'text-inherit',
      'bg-transparent',
      'font-[family-name:inherit]',
      'text-[length:inherit]',
      '[font-style:inherit]',
      'font-[number:inherit]',
      'leading-[inherit]',
      'text-ellipsis',
      addPrefix(
        clsx([
          'ps-[var(--Input-paddingInline)] pe-[var(--Input-paddingInline)]',
          !hasStartDecorator && [
            'ms-[calc(-1*var(--Input-paddingInline))]',
            'ps-[var(--Input-paddingInline)]',
            'rounded-l-[calc(var(--Input-radius)-var(--variant-borderWidth,0px))]',
          ],
          !hasEndDecorator && [
            'me-[calc(-1*var(--Input-paddingInline))]',
            'pe-[var(--Input-paddingInline)]',
            'rounded-r-[calc(var(--Input-radius)-var(--variant-borderWidth,0px))]',
          ],
        ]),
        '[&:-webkit-autofill]:',
      ),
      addPrefix(
        clsx([
          'text-[color:var(--Input-placeholderColor)]',
          'opacity-[var(--Input-placeholderOpacity)]',
        ]),
        '[&::-webkit-input-placeholder]:',
      ),
      addPrefix(
        clsx([
          'text-[color:var(--Input-placeholderColor)]',
          'opacity-[var(--Input-placeholderOpacity)]',
        ]),
        '[&::-moz-placeholder]:',
      ),
      addPrefix(
        clsx([
          'text-[color:var(--Input-placeholderColor)]',
          'opacity-[var(--Input-placeholderOpacity)]',
        ]),
        '[&:-ms-input-placeholder]:',
      ),
      addPrefix(
        clsx([
          'text-[color:var(--Input-placeholderColor)]',
          'opacity-[var(--Input-placeholderOpacity)]',
        ]),
        '[&::-ms-input-placeholder]:',
      ),
    ]),
  );
}

function inputRootVariants(
  props?: BaseVariants & {
    fullWidth?: boolean;
    instanceColor?: BaseVariants['color'];
  },
) {
  const {
    color = 'neutral',
    size = 'md',
    variant = 'outlined',
    fullWidth = false,
    instanceColor,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-input-root group/tj-input',
      '[--Input-radius:6px]',
      '[--Input-gap:0.5rem]',
      '[--Input-placeholderColor:inherit]',
      '[--Input-placeholderOpacity:0.64]',
      toVariableClass(baseTokens.text.icon, 'Input-decoratorColor'),
      '[--Input-focused:0]',
      '[--Input-focusedThickness:2px]',
      color === 'neutral'
        ? '[--Input-focusedHighlight:var(--color-joy-primary-500)]'
        : `[--Input-focusedHighlight:var(--color-joy-${color}-500)]`,
      addPrefix(
        clsx([
          instanceColor &&
            (instanceColor === 'neutral'
              ? '[--_Input-focusedHighlight:var(--color-joy-primary-500)]'
              : `[--_Input-focusedHighlight:var(--color-joy-${instanceColor}-500)]`),
          r`[--Input-focusedHighlight:var(--\_Input-focusedHighlight,var(--color-joy-primary-500))]`,
        ]),
        '[&:not([data-skip-inverted-colors])]:',
      ),
      size === 'sm' && [
        '[--Input-minHeight:2rem]',
        '[--Input-paddingInline:0.5rem]',
        '[--Input-decoratorChildHeight:min(1.5rem,var(--Input-minHeight))]',
        '[--Icon-fontSize:1.25rem]',
      ],
      size === 'md' && [
        '[--Input-minHeight:2.25rem]',
        '[--Input-paddingInline:0.75rem]',
        '[--Input-decoratorChildHeight:min(1.75rem,var(--Input-minHeight))]',
        '[--Icon-fontSize:1.5rem]',
      ],
      size === 'lg' && [
        '[--Input-minHeight:2.75rem]',
        '[--Input-paddingInline:1rem]',
        '[--Input-gap:0.75rem]',
        '[--Input-decoratorChildHeight:min(2.25rem,var(--Input-minHeight))]',
        '[--Icon-fontSize:1.5rem]',
      ],
      '[--Input-decoratorChildOffset:min(calc(var(--Input-paddingInline)-(var(--Input-minHeight)-2*var(--variant-borderWidth,0px)-var(--Input-decoratorChildHeight))/2),var(--Input-paddingInline))]',
      '[--_Input-paddingBlock:max((var(--Input-minHeight)-2*var(--variant-borderWidth,0px)-var(--Input-decoratorChildHeight))/2,0px)]',
      r`[--Input-decoratorChildRadius:max(var(--Input-radius)-var(--variant-borderWidth,0px)-var(--\_Input-paddingBlock),min(var(--\_Input-paddingBlock)+var(--variant-borderWidth,0px),var(--Input-radius)/2))]`,
      '[--Button-minHeight:var(--Input-decoratorChildHeight)]',
      '[--Button-paddingBlock:0px]',
      '[--IconButton-size:var(--Input-decoratorChildHeight)]',
      '[--Button-radius:var(--Input-decoratorChildRadius)]',
      '[--IconButton-radius:var(--Input-decoratorChildRadius)]',
      'box-border',
      variant !== 'plain' &&
        '[box-shadow:var(--joy-shadowRing,0_0_#000),0px_1px_2px_0px_rgba(var(--joy-shadowChannel,21_21_21)/var(--joy-shadowOpacity,0.08))]',
      'min-w-0',
      'min-h-[var(--Input-minHeight)]',
      fullWidth && 'w-full',
      'cursor-text',
      'relative',
      'flex',
      'ps-[var(--Input-paddingInline)] pe-[var(--Input-paddingInline)]',
      'rounded-[var(--Input-radius)]',
      size === 'sm' && [
        'text-[0.875rem]',
        'leading-normal',
        colorTokens.text.tertiary,
      ],
      size === 'md' && [
        'text-[1rem]',
        'leading-normal',
        colorTokens.text.secondary,
      ],
      size === 'lg' && [
        'text-[1.125rem]',
        'leading-normal',
        colorTokens.text.secondary,
      ],
      variant === 'outlined'
        ? '[--variant-borderWidth:1px] border-[length:var(--variant-borderWidth)] border-solid'
        : '[--variant-borderWidth:0px]',
      colorTokens[color][`${variant}Color`],
      colorTokens[color][`${variant}Bg`] || colorTokens.background.surface,
      colorTokens[color][`${variant}Border`],
      addPrefix(
        clsx([
          'box-border',
          'content-[""]',
          'block',
          'absolute',
          'pointer-events-none',
          'inset-0',
          'z-[1]',
          'rounded-[inherit]',
          'm-[calc(var(--variant-borderWidth,0px)*-1)]',
          '[box-shadow:var(--Input-focusedInset,inset)_0_0_0_calc(var(--Input-focused)*var(--Input-focusedThickness))_var(--Input-focusedHighlight)]',
        ]),
        'before:',
      ),
      colorTokens[color][`${variant}HoverColor`],
      addPrefix(
        clsx([
          'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          textColor(baseTokens[color][`${variant}DisabledColor`]),
          backgroundColor(baseTokens[color][`${variant}DisabledBg`]),
          borderColor(baseTokens[color][`${variant}DisabledBorder`]),
        ]),
        'has-[:disabled]:',
      ),
      'focus-within:before:[--Input-focused:1]',
    ]),
  );
}

type InputRootVariants = BaseVariants & {
  className?: string;
  endDecorator?: ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  startDecorator?: ReactNode;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
    input?: ComponentProps<'input'>;
    startDecorator?: ComponentProps<'div'>;
    endDecorator?: ComponentProps<'div'>;
  };
} & PassingProps;

type InputRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  InputRootVariants
> &
  InputRootVariants;

function InputRoot<T extends ReactTags = 'div'>(
  {
    // ---- passing props ----
    autoComplete,
    autoFocus,
    defaultValue,
    disabled,
    id,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    required,
    type,
    value,
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color,
    size,
    variant,

    // non-base variants
    className,
    endDecorator,
    error = false,
    fullWidth = false,
    startDecorator,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: InputRootProps<T>,
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
      className: twMerge(
        inputRootVariants({
          color: color ?? (error ? 'danger' : 'neutral'),
          size,
          variant,
          fullWidth,
          instanceColor: error ? 'danger' : color,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    <>
      {startDecorator && (
        <div
          className={twMerge(
            inputStartDecoratorVariants({
              isTailwind4: isTailwindVersion4(),
            }),
            slotProps.startDecorator?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.startDecorator ?? {})}
        >
          {startDecorator}
        </div>
      )}
      <input
        className={twMerge(
          inputInputVariants({
            isTailwind4: isTailwindVersion4(),
            hasStartDecorator: Boolean(startDecorator),
            hasEndDecorator: Boolean(endDecorator),
          }),
          slotProps.input?.className ?? '',
        )}
        {...{
          autoComplete,
          autoFocus,
          defaultValue,
          disabled,
          id,
          name,
          onBlur,
          onChange,
          onClick,
          onFocus,
          onKeyDown,
          onKeyUp,
          placeholder,
          readOnly,
          required,
          type,
          value,
        }}
        {...(slotPropsWithoutClassName.input ?? {})}
      />
      {endDecorator && (
        <div
          className={twMerge(
            inputEndDecoratorVariants(),
            slotProps.endDecorator?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.endDecorator ?? {})}
        >
          {endDecorator}
        </div>
      )}
    </>,
  );
}

export const Input = forwardRef(InputRoot) as <T extends ReactTags = 'div'>(
  props: InputRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: inputStartDecoratorVariants,
    variants: {
      isTailwind4: [false, true],
    },
  },
  {
    generatorFn: inputEndDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: inputInputVariants,
    variants: {
      isTailwind4: [false, true],
      hasStartDecorator: [false, true],
      hasEndDecorator: [false, true],
    },
  },
  {
    generatorFn: inputRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      fullWidth: [false, true],
      instanceColor: [
        undefined,
        'primary',
        'neutral',
        'danger',
        'success',
        'warning',
      ],
    },
  },
];
