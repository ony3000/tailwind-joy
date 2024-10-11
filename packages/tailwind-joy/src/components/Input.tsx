import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import { forwardRef, createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { r } from '../base/alias';
import {
  join,
  addPrefix,
  backgroundColor,
  borderColor,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';

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

function inputStartDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-input-start-decorator',
      '[--Button-margin:0_0_0_calc(var(--Input-decoratorChildOffset)*-1)]',
      '[--IconButton-margin:0_0_0_calc(var(--Input-decoratorChildOffset)*-1)]',
      '[--Icon-margin:0_0_0_calc(var(--Input-paddingInline)/-4)]',
      '[display:inherit]',
      'items-center',
      r`[padding-block:var(--unstable\_InputPaddingBlock)]`,
      'flex-wrap',
      'me-[var(--Input-gap)]',
      '[color:var(--Input-decoratorColor)]',
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
      '[color:var(--Input-decoratorColor)]',
      '[cursor:initial]',
    ]),
  );
}

function inputInputVariants(props?: {
  hasStartDecorator?: boolean;
  hasEndDecorator?: boolean;
}) {
  const { hasStartDecorator = false, hasEndDecorator = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-input-input',
      'border-none',
      'min-w-0',
      'outline-0',
      'p-0',
      'flex-1',
      '[color:inherit]',
      'bg-transparent',
      '[font-family:inherit]',
      '[font-size:inherit]',
      '[font-style:inherit]',
      '[font-weight:inherit]',
      'leading-[inherit]',
      'text-ellipsis',
      addPrefix(
        join([
          '[padding-inline:var(--Input-paddingInline)]',
          !hasStartDecorator &&
            join([
              'ms-[calc(-1*var(--Input-paddingInline))]',
              'ps-[var(--Input-paddingInline)]',
              'rounded-l-[calc(var(--Input-radius)-var(--variant-borderWidth,0px))]',
            ]),
          !hasEndDecorator &&
            join([
              'me-[calc(-1*var(--Input-paddingInline))]',
              'pe-[var(--Input-paddingInline)]',
              'rounded-r-[calc(var(--Input-radius)-var(--variant-borderWidth,0px))]',
            ]),
        ]),
        '[&:-webkit-autofill]:',
      ),
      addPrefix(
        join([
          '[color:var(--Input-placeholderColor)]',
          '[opacity:var(--Input-placeholderOpacity)]',
        ]),
        '[&::-webkit-input-placeholder]:',
      ),
      addPrefix(
        join([
          '[color:var(--Input-placeholderColor)]',
          '[opacity:var(--Input-placeholderOpacity)]',
        ]),
        '[&::-moz-placeholder]:',
      ),
      addPrefix(
        join([
          '[color:var(--Input-placeholderColor)]',
          '[opacity:var(--Input-placeholderOpacity)]',
        ]),
        '[&:-ms-input-placeholder]:',
      ),
      addPrefix(
        join([
          '[color:var(--Input-placeholderColor)]',
          '[opacity:var(--Input-placeholderOpacity)]',
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
        ? '[--Input-focusedHighlight:var(--joy-primary-500)]'
        : `[--Input-focusedHighlight:var(--joy-${color}-500)]`,
      addPrefix(
        join([
          instanceColor &&
            (instanceColor === 'neutral'
              ? '[--_Input-focusedHighlight:var(--joy-primary-500)]'
              : `[--_Input-focusedHighlight:var(--joy-${instanceColor}-500)]`),
          r`[--Input-focusedHighlight:var(--\_Input-focusedHighlight,var(--joy-primary-500))]`,
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
      '[padding-inline:var(--Input-paddingInline)]',
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
        ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
        : '[--variant-borderWidth:0px]',
      colorTokens[color][`${variant}Color`],
      colorTokens[color][`${variant}Bg`] || colorTokens.background.surface,
      colorTokens[color][`${variant}Border`],
      addPrefix(
        join([
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
        join([
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

type InputRootProps<T> = GenericComponentPropsWithVariants<
  'div',
  InputRootVariants,
  T
>;

function InputRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
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
  const slotRootPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.root ?? {}).filter(([key]) => key !== 'className'),
  );
  const slotInputPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.input ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );
  const slotStartDecoratorPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.startDecorator ?? {}).filter(
      ([key]) => key !== 'className',
    ),
  );
  const slotEndDecoratorPropsWithoutClassName = Object.fromEntries(
    Object.entries(slotProps.endDecorator ?? {}).filter(
      ([key]) => key !== 'className',
    ),
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
      ...slotRootPropsWithoutClassName,
    },
    <>
      {startDecorator && (
        <div
          className={twMerge(
            inputStartDecoratorVariants(),
            slotProps.startDecorator?.className ?? '',
          )}
          {...slotStartDecoratorPropsWithoutClassName}
        >
          {startDecorator}
        </div>
      )}
      <input
        className={twMerge(
          inputInputVariants({
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
        {...slotInputPropsWithoutClassName}
      />
      {endDecorator && (
        <div
          className={twMerge(
            inputEndDecoratorVariants(),
            slotProps.endDecorator?.className ?? '',
          )}
          {...slotEndDecoratorPropsWithoutClassName}
        >
          {endDecorator}
        </div>
      )}
    </>,
  );
}

export const Input = forwardRef(InputRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: InputRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: inputStartDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: inputEndDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: inputInputVariants,
    variants: {
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
