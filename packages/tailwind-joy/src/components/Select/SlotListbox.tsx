import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { r, twMerge } from '../../base/alias';
import { toVariableClass } from '../../base/modifier';
import { theme } from '../../base/theme';
import { baseTokens, colorTokens } from '../../base/tokens';
import type { Difference, BaseVariants } from '../../base/types';
import { List } from '../List';

type RequiredProps = {
  //
};

type OptionalProps = {
  color?: BaseVariants['color'];
  variant?: BaseVariants['variant'];
};

/**
 * Properties that are always defined, regardless of the value of `component`.
 */
type StaticProps = RequiredProps & OptionalProps;

type SlotListboxProps = Difference<ComponentProps<'ul'>, StaticProps> &
  StaticProps;

export function selectListboxVariants(
  props?: Pick<StaticProps, 'color' | 'variant'>,
) {
  const { color = 'neutral', variant = 'outlined' } = props ?? {};

  return twMerge(
    clsx([
      'tj-select-listbox',
      '[--focus-outline-offset:calc(2px*-1)]',
      toVariableClass(
        theme.variants[variant][color].tokens.backgroundColor ||
          baseTokens.background.popup,
        'ListItem-stickyBackground',
      ),
      '[--ListItem-stickyTop:calc(var(--List-padding,var(--ListDivider-gap))*-1)]',
      [
        '[--NestedList-marginRight:0px]',
        '[--NestedList-marginLeft:0px]',
        '[--NestedListItem-paddingLeft:var(--ListItem-paddingX)]',
        '[--ListItemButton-marginBlock:0px]',
        '[--ListItemButton-marginInline:0px]',
        '[--ListItem-marginBlock:0px]',
        '[--ListItem-marginInline:0px]',
      ],
      'min-w-max',
      'max-h-[44vh]',
      'overflow-auto',
      'outline-0',
      '[box-shadow:var(--joy-shadowRing,0_0_#000),0px_2px_8px_-2px_rgba(var(--joy-shadowChannel,21_21_21)/var(--joy-shadowOpacity,0.08)),0px_6px_12px_-2px_rgba(var(--joy-shadowChannel,21_21_21)/var(--joy-shadowOpacity,0.08))]',
      'rounded-[var(--List-radius,6px)]',
      r`z-[var(--unstable\_popup-zIndex,1000)]`,
      !theme.variants[variant][color].tokens.backgroundColor &&
        colorTokens.background.popup,
    ]),
  );
}

export function SlotListbox({
  // ---- non-passing props ----
  color,
  variant,

  // others
  children,
  className,
  ...otherProps
  // ---------------------------
}: SlotListboxProps) {
  return (
    // @ts-expect-error
    <List
      className={twMerge(
        selectListboxVariants({
          color,
          variant,
        }),
        className,
      )}
      {...otherProps}
    >
      {children}
    </List>
  );
}
