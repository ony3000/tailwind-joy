import { clsx } from 'clsx';
import type {
  ComponentProps,
  ForwardedRef,
  RefObject,
  MutableRefObject,
  ReactNode,
} from 'react';
import { forwardRef, createElement, useRef, useMemo, useEffect } from 'react';
import { r, twMerge } from '../base/alias';
import {
  addPrefix,
  hover,
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

type PassingProps = Pick<
  ComponentProps<'textarea'>,
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
  | 'value'
>;

function textareaRootVariants(
  props?: BaseVariants & {
    instanceColor?: BaseVariants['color'];
  },
) {
  const {
    color = 'neutral',
    size = 'md',
    variant = 'outlined',
    instanceColor,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-textarea-root group/tj-textarea',
      '[--Textarea-radius:6px]',
      '[--Textarea-gap:0.5rem]',
      '[--Textarea-placeholderColor:inherit]',
      '[--Textarea-placeholderOpacity:0.64]',
      toVariableClass(baseTokens.text.icon, 'Textarea-decoratorColor'),
      '[--Textarea-focused:0]',
      '[--Textarea-focusedThickness:2px]',
      color === 'neutral'
        ? '[--Textarea-focusedHighlight:var(--color-joy-primary-500)]'
        : `[--Textarea-focusedHighlight:var(--color-joy-${color}-500)]`,
      addPrefix(
        clsx([
          instanceColor &&
            (instanceColor === 'neutral'
              ? '[--_Textarea-focusedHighlight:var(--color-joy-primary-500)]'
              : `[--_Textarea-focusedHighlight:var(--color-joy-${instanceColor}-500)]`),
          r`[--Textarea-focusedHighlight:var(--\_Textarea-focusedHighlight,var(--color-joy-primary-500))]`,
        ]),
        '[&:not([data-inverted-colors="false"])]:',
      ),
      size === 'sm' && [
        '[--Textarea-minHeight:2rem]',
        '[--Textarea-paddingBlock:calc(0.375rem-0.5px-var(--variant-borderWidth,0px))]',
        '[--Textarea-paddingInline:0.5rem]',
        '[--Textarea-decoratorChildHeight:min(1.5rem,var(--Textarea-minHeight))]',
        '[--Icon-fontSize:1.25rem]',
      ],
      size === 'md' && [
        '[--Textarea-minHeight:2.25rem]',
        '[--Textarea-paddingBlock:calc(0.375rem-var(--variant-borderWidth,0px))]',
        '[--Textarea-paddingInline:0.75rem]',
        '[--Textarea-decoratorChildHeight:min(1.75rem,var(--Textarea-minHeight))]',
        '[--Icon-fontSize:1.5rem]',
      ],
      size === 'lg' && [
        '[--Textarea-minHeight:3rem]',
        '[--Textarea-paddingBlock:calc(0.75rem-var(--variant-borderWidth,0px))]',
        '[--Textarea-paddingInline:1rem]',
        '[--Textarea-gap:0.75rem]',
        '[--Textarea-decoratorChildHeight:min(2.375rem,var(--Textarea-minHeight))]',
        '[--Icon-fontSize:1.5rem]',
      ],
      '[--_Textarea-paddingBlock:max((var(--Textarea-minHeight)-2*var(--variant-borderWidth,0px)-var(--Textarea-decoratorChildHeight))/2,0px)]',
      r`[--Textarea-decoratorChildRadius:max(var(--Textarea-radius)-var(--variant-borderWidth,0px)-var(--\_Textarea-paddingBlock),min(var(--\_Textarea-paddingBlock)+var(--variant-borderWidth,0px),var(--Textarea-radius)/2))]`,
      '[--Button-minHeight:var(--Textarea-decoratorChildHeight)]',
      '[--Button-paddingBlock:0px]',
      '[--IconButton-size:var(--Textarea-decoratorChildHeight)]',
      '[--Button-radius:var(--Textarea-decoratorChildRadius)]',
      '[--IconButton-radius:var(--Textarea-decoratorChildRadius)]',
      'box-border',
      variant !== 'plain' &&
        '[box-shadow:var(--joy-shadowRing,0_0_#000),0px_1px_2px_0px_rgba(var(--joy-shadowChannel,21_21_21)/var(--joy-shadowOpacity,0.08))]',
      'min-w-0',
      'min-h-[var(--Textarea-minHeight)]',
      'cursor-text',
      'relative',
      'flex',
      'flex-col',
      'ps-[var(--Textarea-paddingInline)]',
      '[padding-block:var(--Textarea-paddingBlock)]',
      'rounded-[var(--Textarea-radius)]',
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
      theme.variants[variant][color].className,
      backgroundColor(
        theme.variants[variant][color].tokens.backgroundColor ||
          baseTokens.background.surface,
      ),
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
          '[box-shadow:var(--Textarea-focusedInset,inset)_0_0_0_calc(var(--Textarea-focused)*var(--Textarea-focusedThickness))_var(--Textarea-focusedHighlight)]',
        ]),
        'before:',
      ),
      hover(textColor(theme.variants[`${variant}Hover`][color].tokens.color)),
      hover(
        borderColor(
          theme.variants[`${variant}Hover`][color].tokens.borderColor,
        ),
      ),
      addPrefix(
        clsx([
          'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          textColor(baseTokens[color][`${variant}DisabledColor`]),
          backgroundColor(baseTokens[color][`${variant}DisabledBg`]),
          borderColor(baseTokens[color][`${variant}DisabledBorder`]),
        ]),
        'has-[:disabled]:',
      ),
      'focus-within:before:[--Textarea-focused:1]',
    ]),
  );
}

function textareaInputVariants() {
  return twMerge(
    clsx([
      'tj-textarea-input',
      'resize-none',
      'border-0',
      'min-w-0',
      'outline-none',
      'p-0',
      'pe-[var(--Textarea-paddingInline)]',
      'flex-auto',
      'self-stretch',
      'text-inherit',
      'bg-transparent',
      'font-[family-name:inherit]',
      'text-[length:inherit]',
      '[font-style:inherit]',
      'font-[number:inherit]',
      'leading-[inherit]',
      addPrefix(
        clsx([
          'text-[color:var(--Textarea-placeholderColor)]',
          'opacity-[var(--Textarea-placeholderOpacity)]',
        ]),
        '[&::-webkit-input-placeholder]:',
      ),
      addPrefix(
        clsx([
          'text-[color:var(--Textarea-placeholderColor)]',
          'opacity-[var(--Textarea-placeholderOpacity)]',
        ]),
        '[&::-moz-placeholder]:',
      ),
      addPrefix(
        clsx([
          'text-[color:var(--Textarea-placeholderColor)]',
          'opacity-[var(--Textarea-placeholderOpacity)]',
        ]),
        '[&:-ms-input-placeholder]:',
      ),
      addPrefix(
        clsx([
          'text-[color:var(--Textarea-placeholderColor)]',
          'opacity-[var(--Textarea-placeholderOpacity)]',
        ]),
        '[&::-ms-input-placeholder]:',
      ),
    ]),
  );
}

function textareaStartDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-textarea-start-decorator',
      'flex',
      'ms-[calc(var(--Textarea-paddingBlock)-var(--Textarea-paddingInline))]',
      'me-[var(--Textarea-paddingBlock)]',
      '[margin-block-end:var(--Textarea-gap)]',
      'text-[color:var(--Textarea-decoratorColor)]',
      '[cursor:initial]',
    ]),
  );
}

function textareaEndDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-textarea-end-decorator',
      'flex',
      'ms-[calc(var(--Textarea-paddingBlock)-var(--Textarea-paddingInline))]',
      'me-[var(--Textarea-paddingBlock)]',
      '[margin-block-start:var(--Textarea-gap)]',
      'text-[color:var(--Textarea-decoratorColor)]',
      '[cursor:initial]',
    ]),
  );
}

function syncTextareaHeight(
  shadowRef: RefObject<HTMLTextAreaElement>,
  heightRef: MutableRefObject<number | null>,
  placeholder?: string,
  minRows?: number,
  maxRows?: number,
) {
  const shadowInput = shadowRef.current;

  if (!shadowInput) {
    return;
  }

  const visibleInput =
    shadowInput.previousElementSibling as HTMLTextAreaElement | null;

  if (!visibleInput) {
    return;
  }

  const computedStyle = window.getComputedStyle(visibleInput);

  if (computedStyle.width === '0px') {
    return;
  }

  shadowInput.style.width = computedStyle.width;
  shadowInput.value = visibleInput.value || placeholder || 'x';
  if (shadowInput.value.slice(-1) === '\n') {
    shadowInput.value += ' ';
  }

  const boxSizing = computedStyle.boxSizing;
  const padding =
    Number.parseInt(computedStyle.paddingBottom) +
    Number.parseInt(computedStyle.paddingTop);
  const border =
    Number.parseInt(computedStyle.borderBottomWidth) +
    Number.parseInt(computedStyle.borderTopWidth);

  const innerHeight = shadowInput.scrollHeight;

  shadowInput.value = 'x';
  const singleRowHeight = shadowInput.scrollHeight;

  let outerHeight = innerHeight;

  if (minRows) {
    outerHeight = Math.max(minRows * singleRowHeight, outerHeight);
  }
  if (maxRows) {
    outerHeight = Math.min(maxRows * singleRowHeight, outerHeight);
  }
  outerHeight = Math.max(outerHeight, singleRowHeight);

  const outerHeightStyle =
    outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
  const isOverflow = Math.abs(outerHeight - innerHeight) <= 1;

  if (heightRef.current !== outerHeightStyle) {
    heightRef.current = outerHeightStyle;
    visibleInput.style.height = `${outerHeightStyle}px`;
  }
  visibleInput.style.overflow = isOverflow ? 'hidden' : '';
}

type TextareaRootVariants = BaseVariants & {
  className?: string;
  endDecorator?: ReactNode;
  error?: boolean;
  maxRows?: number;
  minRows?: number;
  startDecorator?: ReactNode;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
    textarea?: ComponentProps<'textarea'>;
    startDecorator?: ComponentProps<'div'>;
    endDecorator?: ComponentProps<'div'>;
  };
} & PassingProps;

type TextareaRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  TextareaRootVariants
> &
  TextareaRootVariants;

function TextareaRoot<T extends ReactTags = 'div'>(
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
    value,
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color,
    size = 'md',
    variant = 'outlined',

    // non-base variants
    className,
    endDecorator,
    error = false,
    maxRows,
    minRows = 1,
    startDecorator,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: TextareaRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const shadowRef = useRef<HTMLTextAreaElement>(null);
  const heightRef = useRef<number | null>(null);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const isControlled = value !== undefined;

  useEffect(() => {
    syncTextareaHeight(shadowRef, heightRef, placeholder, minRows, maxRows);
  });

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        textareaRootVariants({
          color: color ?? (error ? 'danger' : 'neutral'),
          size,
          variant,
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
            textareaStartDecoratorVariants(),
            slotProps.startDecorator?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.startDecorator ?? {})}
        >
          {startDecorator}
        </div>
      )}
      <textarea
        className={twMerge(
          textareaInputVariants(),
          slotProps.textarea?.className ?? '',
        )}
        {...{
          autoComplete,
          autoFocus,
          defaultValue,
          disabled,
          id,
          name,
          onBlur,
          onChange: (e) => {
            if (!isControlled) {
              syncTextareaHeight(
                shadowRef,
                heightRef,
                placeholder,
                minRows,
                maxRows,
              );
            }

            if (onChange) {
              onChange(e);
            }
          },
          onClick,
          onFocus,
          onKeyDown,
          onKeyUp,
          placeholder,
          readOnly,
          required,
          value,
        }}
        rows={minRows}
        {...(slotPropsWithoutClassName.textarea ?? {})}
      />
      <textarea
        ref={shadowRef}
        className={twMerge(
          textareaInputVariants(),
          slotProps.textarea?.className ?? '',
        )}
        aria-hidden
        readOnly
        tabIndex={-1}
        style={{
          visibility: 'hidden',
          position: 'absolute',
          overflow: 'hidden',
          height: 0,
          top: 0,
          left: 0,
          transform: 'translateZ(0)',
          paddingTop: 0,
          paddingBottom: 0,
        }}
      />
      {endDecorator && (
        <div
          className={twMerge(
            textareaEndDecoratorVariants(),
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

export const Textarea = forwardRef(TextareaRoot) as <
  T extends ReactTags = 'div',
>(
  props: TextareaRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: textareaRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
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
  {
    generatorFn: textareaInputVariants,
    variants: {},
  },
  {
    generatorFn: textareaStartDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: textareaEndDecoratorVariants,
    variants: {},
  },
];
