import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import {
  forwardRef,
  createContext,
  createElement,
  useContext,
  useMemo,
} from 'react';
import { r, twMerge } from '../base/alias';
import { marginBlock, marginInline, paddingBlock } from '../base/conditional';
import {
  addPrefix,
  focus,
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
import { isTailwindVersion4, excludeClassName } from '../base/utils';
import { RowListContext } from './List';

export const ListItemButtonOrientationContext = createContext<
  'horizontal' | 'vertical'
>('horizontal');

function listItemButtonRootVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    isTailwind4?: boolean;
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
    row?: boolean;
    selected?: boolean;
  },
) {
  const {
    color = 'neutral',
    variant = 'plain',
    isTailwind4 = false,
    disabled = false,
    orientation = 'horizontal',
    row = false,
    selected = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-list-item-button-root group/tj-list-item-button',
      '[--Icon-margin:initial]',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      '[-webkit-tap-highlight-color:transparent]',
      'box-border',
      'relative',
      '[font:inherit]',
      'flex',
      'flex-row',
      'items-center',
      'self-stretch',
      'gap-[var(--ListItem-gap)]',
      orientation === 'vertical' && ['flex-col', 'justify-center'],
      '[text-align:initial]',
      '[text-decoration:initial]',
      'bg-[color:initial]',
      'cursor-pointer',
      marginInline(isTailwind4, 'var(--ListItemButton-marginInline)'),
      marginBlock(isTailwind4, 'var(--ListItemButton-marginBlock)'),
      addPrefix(
        row ? 'ms-[var(--List-gap)]' : '[margin-block-start:var(--List-gap)]',
        '[&:not([data-first-child])]:',
      ),
      paddingBlock(
        isTailwind4,
        'calc(var(--ListItem-paddingY)-var(--variant-borderWidth,0px))',
      ),
      r`ps-[calc(var(--ListItem-paddingLeft)+var(--ListItem-startActionWidth,var(--unstable\_startActionWidth,0px)))]`,
      r`pe-[calc(var(--ListItem-paddingRight)+var(--ListItem-endActionWidth,var(--unstable\_endActionWidth,0px)))]`,
      '[min-block-size:var(--ListItem-minHeight)]',
      'border',
      'border-solid',
      'border-transparent',
      'rounded-[var(--ListItem-radius)]',
      r`flex-[var(--unstable\_ListItem-flex,none)]`,
      'text-[length:inherit]',
      'leading-[inherit]',
      '[min-inline-size:0]',
      [
        focus('outline-2 outline outline-offset-2'),
        colorTokens.focusVisible,
        focus('z-[1]'),
      ],
      theme.variants[variant][color].className,
      theme.variants[`${variant}Active`][color].className,
      '[.tj-list-item-root>&]:[--unstable_ListItem-flex:1_0_0%]',
      selected
        ? [
            [
              textColor(theme.variants[`${variant}Active`][color].tokens.color),
              backgroundColor(
                theme.variants[`${variant}Active`][color].tokens
                  .backgroundColor,
              ),
              borderColor(
                theme.variants[`${variant}Active`][color].tokens.borderColor,
              ),
            ],
            '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
          ]
        : [
            theme.variants[`${variant}Hover`][color].className,
            theme.variants[`${variant}Active`][color].className,
          ],
      disabled && [
        'pointer-events-none cursor-default [--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
        textColor(theme.variants[`${variant}Disabled`][color].tokens.color),
        backgroundColor(
          theme.variants[`${variant}Disabled`][color].tokens.backgroundColor,
        ),
        borderColor(
          theme.variants[`${variant}Disabled`][color].tokens.borderColor,
        ),
      ],
      !row && selected && 'font-medium',
    ]),
  );
}

type ListItemButtonRootVariants = Pick<BaseVariants, 'color' | 'variant'> & {
  autoFocus?: boolean;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  selected?: boolean;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
};

type ListItemButtonRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ListItemButtonRootVariants
> &
  ListItemButtonRootVariants;

function ListItemButtonRoot<T extends ReactTags = 'div'>(
  {
    // ---- non-passing props ----
    // base variants
    color = 'neutral',
    variant = 'plain',

    // non-base variants
    autoFocus = false,
    className,
    disabled = false,
    orientation = 'horizontal',
    selected = false,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: ListItemButtonRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const row = useContext(RowListContext);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  return (
    <ListItemButtonOrientationContext.Provider value={orientation}>
      {createElement(
        component,
        {
          ref,
          className: twMerge(
            listItemButtonRootVariants({
              color,
              variant,
              isTailwind4: isTailwindVersion4(),
              disabled,
              orientation,
              row,
              selected,
            }),
            className,
            slotProps.root?.className ?? '',
          ),
          ...otherProps,
          ...(slotPropsWithoutClassName.root ?? {}),
        },
        children,
      )}
    </ListItemButtonOrientationContext.Provider>
  );
}

export const ListItemButton = forwardRef(ListItemButtonRoot) as <
  T extends ReactTags = 'div',
>(
  props: ListItemButtonRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: listItemButtonRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      isTailwind4: [false, true],
      disabled: [false, true],
      orientation: ['horizontal', 'vertical'],
      row: [false, true],
      selected: [false, true],
    },
  },
];
