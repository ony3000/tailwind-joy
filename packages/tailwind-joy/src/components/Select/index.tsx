import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import { forwardRef, createElement, useMemo } from 'react';
import { r, twMerge } from '../../base/alias';
import { paddingBlock, paddingInline } from '../../base/conditional';
import {
  addPrefix,
  backgroundColor,
  borderColor,
  textColor,
  toVariableClass,
} from '../../base/modifier';
import { theme } from '../../base/theme';
import { baseTokens, colorTokens } from '../../base/tokens';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
} from '../../base/types';
import { isTailwindVersion4, excludeClassName } from '../../base/utils';
import { SlotButton } from './SlotButton';
import { SlotEndDecorator } from './SlotEndDecorator';
import { SlotIndicator } from './SlotIndicator';
import { SlotStartDecorator } from './SlotStartDecorator';

type RequiredProps = {
  //
};

type OptionalProps = {
  // autoFocus?: boolean;
  color?: BaseVariants['color'];
  defaultListboxOpen?: boolean;
  defaultValue?: any;
  disabled?: boolean;
  endDecorator?: ReactNode;
  // getSerializedValue?: () => void;
  indicator?: ReactNode;
  listboxId?: string;
  listboxOpen?: boolean;
  multiple?: boolean;
  name?: string;
  // onChange?: () => void;
  // onClose?: () => void;
  // onListboxOpenChange?: () => void;
  placeholder?: ReactNode;
  // renderValue?: () => void;
  required?: boolean;
  size?: BaseVariants['size'];
  slotProps?: {
    root?: ComponentProps<'div'>;
    button?: ComponentProps<'button'>;
    startDecorator?: ComponentProps<'span'>;
    endDecorator?: ComponentProps<'span'>;
    indicator?: ComponentProps<'span'>;
    listbox?: ComponentProps<'ul'>;
  };
  startDecorator?: ReactNode;
  value?: any;
  variant?: BaseVariants['variant'];
};

/**
 * Properties that are always defined, regardless of the value of `component`.
 */
type StaticProps = RequiredProps & OptionalProps;

type SelectRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  StaticProps
> &
  StaticProps;

export function selectRootVariants(
  props?: Pick<StaticProps, 'color' | 'size' | 'variant'> & {
    instanceColor?: BaseVariants['color'];
    isTailwind4?: boolean;
    rounded?: boolean;
  },
) {
  const {
    color = 'neutral',
    instanceColor,
    isTailwind4 = false,
    rounded = false,
    size = 'md',
    variant = 'outlined',
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-select-root group/tj-select',
      '[--Select-radius:6px]',
      '[--Select-gap:0.5rem]',
      '[--Select-placeholderOpacity:0.64]',
      toVariableClass(baseTokens.text.icon, 'Select-decoratorColor'),
      '[--Select-focusedThickness:2px]',
      color === 'neutral'
        ? '[--Select-focusedHighlight:var(--color-joy-primary-500)]'
        : `[--Select-focusedHighlight:var(--color-joy-${color}-500)]`,
      addPrefix(
        clsx([
          instanceColor &&
            (instanceColor === 'neutral'
              ? '[--_Select-focusedHighlight:var(--color-joy-primary-500)]'
              : `[--_Select-focusedHighlight:var(--color-joy-${instanceColor}-500)]`),
          '[--Select-focusedHighlight:var(--color-joy-primary-500)]',
        ]),
        '[&:not([data-inverted-colors="false"])]:',
      ),
      toVariableClass(
        theme.variants[variant][color].tokens.backgroundColor
          ? theme.variants[variant][color].tokens.color
          : baseTokens.text.tertiary,
        'Select-indicatorColor',
      ),
      size === 'sm' && [
        '[--Select-minHeight:2rem]',
        '[--Select-paddingInline:0.5rem]',
        '[--Select-decoratorChildHeight:min(1.5rem,var(--Select-minHeight))]',
        '[--Icon-fontSize:1.25rem]',
      ],
      size === 'md' && [
        '[--Select-minHeight:2.25rem]',
        '[--Select-paddingInline:0.75rem]',
        '[--Select-decoratorChildHeight:min(1.75rem,var(--Select-minHeight))]',
        '[--Icon-fontSize:1.5rem]',
      ],
      size === 'lg' && [
        '[--Select-minHeight:2.75rem]',
        '[--Select-paddingInline:1rem]',
        '[--Select-decoratorChildHeight:min(2.375rem,var(--Select-minHeight))]',
        '[--Icon-fontSize:1.5rem]',
      ],
      '[--Select-decoratorChildOffset:min(calc(var(--Select-paddingInline)-(var(--Select-minHeight)-2*var(--variant-borderWidth,0px)-var(--Select-decoratorChildHeight))/2),var(--Select-paddingInline))]',
      '[--_Select-paddingBlock:max((var(--Select-minHeight)-2*var(--variant-borderWidth,0px)-var(--Select-decoratorChildHeight))/2,0px)]',
      r`[--Select-decoratorChildRadius:max(var(--Select-radius)-var(--variant-borderWidth,0px)-var(--\_Select-paddingBlock),min(var(--\_Select-paddingBlock)+var(--variant-borderWidth,0px),var(--Select-radius)/2))]`,
      '[--Button-minHeight:var(--Select-decoratorChildHeight)]',
      '[--Button-paddingBlock:0px]',
      '[--IconButton-size:var(--Select-decoratorChildHeight)]',
      '[--Button-radius:var(--Select-decoratorChildRadius)]',
      '[--IconButton-radius:var(--Select-decoratorChildRadius)]',
      'box-border',
      variant !== 'plain' &&
        '[box-shadow:var(--joy-shadowRing,0_0_#000),0px_1px_2px_0px_rgba(var(--joy-shadowChannel,21_21_21)/var(--joy-shadowOpacity,0.08))]',
      'min-w-0',
      'min-h-[var(--Select-minHeight)]',
      'relative',
      'flex',
      'items-center',
      'rounded-[var(--Select-radius)]',
      'cursor-pointer',
      colorTokens[color][`${variant}Bg`] || colorTokens.background.surface,
      size === 'sm' && paddingBlock(isTailwind4, '2px'),
      size === 'md' && paddingBlock(isTailwind4, '3px'),
      size === 'lg' && paddingBlock(isTailwind4, '4px'),
      paddingInline(isTailwind4, 'var(--Select-paddingInline)'),
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
        ]),
        'before:',
      ),
      addPrefix(
        clsx([
          toVariableClass(
            theme.variants[variant][color].tokens.color,
            'Select-indicatorColor',
          ),
          'before:[box-shadow:inset_0_0_0_var(--Select-focusedThickness)_var(--Select-focusedHighlight)]',
        ]),
        'has-[:focus-visible]:',
      ),
      'has-[:disabled]:[--Select-indicatorColor:inherit]',
      theme.variants[`${variant}Hover`][color].className,
      addPrefix(
        clsx([
          'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          textColor(baseTokens[color][`${variant}DisabledColor`]),
          backgroundColor(baseTokens[color][`${variant}DisabledBg`]),
          borderColor(baseTokens[color][`${variant}DisabledBorder`]),
        ]),
        'has-[:disabled]:',
      ),
      rounded && '[--Select-radius:var(--tj-Select-borderRadius)]',
    ]),
  );
}

function SelectRoot<T extends ReactTags = 'div'>(
  {
    // ---- non-passing props ----
    // autoFocus = false,
    color,
    component = 'div',
    defaultListboxOpen = false,
    defaultValue,
    disabled = false,
    endDecorator,
    // getSerializedValue,
    indicator,
    listboxId,
    listboxOpen,
    multiple = false,
    name,
    // onChange,
    // onClose,
    // onListboxOpenChange,
    placeholder,
    // renderValue,
    required = false,
    size,
    slotProps = {},
    startDecorator,
    style,
    value,
    variant,

    // others
    children,
    className,
    ...otherProps
    // ---------------------------
  }: SelectRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const resolvedClassNames = twMerge(className).split(' ');
  const resolvedBorderRadiusWithArbitraryValue = useMemo(() => {
    const regExp = /^rounded-\[([^\]]+)\]$/;

    return resolvedClassNames
      .filter((text) => regExp.test(text))
      .at(0)
      ?.replace(regExp, '$1');
  }, [resolvedClassNames]);
  const resolvedBorderRadiusWithArbitraryProperty = useMemo(() => {
    const regExp = /^\[border-radius:([^\]]+)\]$/;

    return resolvedClassNames
      .filter((text) => regExp.test(text))
      .at(0)
      ?.replace(regExp, '$1');
  }, [resolvedClassNames]);

  const instanceBorderRadius =
    resolvedBorderRadiusWithArbitraryProperty ||
    resolvedBorderRadiusWithArbitraryValue;

  const rounded = instanceBorderRadius !== undefined;

  let displayValue = placeholder;

  return (
    <>
      {createElement(
        component,
        {
          ref,
          className: twMerge(
            selectRootVariants({
              color,
              instanceColor: color,
              isTailwind4: isTailwindVersion4(),
              rounded,
              size,
              variant,
            }),
            className,
            slotProps.root?.className ?? '',
          ),
          style: {
            ...style,
            '--tj-Select-borderRadius': instanceBorderRadius,
          },
          ...otherProps,
          ...(slotPropsWithoutClassName.root ?? {}),
        },
        <>
          {startDecorator && (
            <SlotStartDecorator
              {...(slotPropsWithoutClassName.startDecorator ?? {})}
            >
              {startDecorator}
            </SlotStartDecorator>
          )}
          <SlotButton
            // value={?}
            {...(slotPropsWithoutClassName.button ?? {})}
          >
            {displayValue}
          </SlotButton>
          {endDecorator && (
            <SlotEndDecorator
              {...(slotPropsWithoutClassName.endDecorator ?? {})}
            >
              {endDecorator}
            </SlotEndDecorator>
          )}
          {indicator && (
            <SlotIndicator
              // @ts-expect-error
              color={color}
              size={size}
              variant={variant}
              {...(slotPropsWithoutClassName.indicator ?? {})}
            >
              {indicator}
            </SlotIndicator>
          )}
          <input
            name={name}
            tabIndex={-1}
            aria-hidden={true}
            required={required}
            // value={?}
            style={{
              border: 0,
              clip: 'rect(0 0 0 0)',
              height: '1px',
              margin: '-1px',
              overflow: 'hidden',
              padding: 0,
              position: 'absolute',
              whiteSpace: 'nowrap',
              width: '1px',
            }}
            // onChange={?}
          />
        </>,
      )}
      {/* listbox */}
    </>
  );
}

export const Select = forwardRef(SelectRoot) as <T extends ReactTags = 'div'>(
  props: SelectRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;
