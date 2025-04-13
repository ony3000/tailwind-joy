import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { twMerge } from '../../base/alias';
import { addPrefix, toVariableClass } from '../../base/modifier';
import { baseTokens } from '../../base/tokens';
import type { Difference, BaseVariants } from '../../base/types';

type RequiredProps = {
  //
};

type OptionalProps = {
  color?: BaseVariants['color'];
  expanded?: boolean;
  size?: BaseVariants['size'];
  variant?: BaseVariants['variant'];
};

/**
 * Properties that are always defined, regardless of the value of `component`.
 */
type StaticProps = RequiredProps & OptionalProps;

type SlotIndicatorProps = Difference<ComponentProps<'span'>, StaticProps> &
  StaticProps;

export function selectIndicatorVariants(
  props?: Pick<StaticProps, 'color' | 'expanded' | 'size' | 'variant'>,
) {
  const {
    color = 'neutral',
    expanded = false,
    size = 'md',
    variant = 'outlined',
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-select-indicator',
      size === 'sm' && '[--Icon-fontSize:1.125rem]',
      size === 'md' && '[--Icon-fontSize:1.25rem]',
      size === 'lg' && '[--Icon-fontSize:1.5rem]',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      '[display:inherit]',
      'items-center',
      'ms-[var(--Select-gap)]',
      'me-[calc(var(--Select-paddingInline)/-4)]',
      '[.tj-select-end-decorator+&]:ms-[calc(var(--Select-gap)/2)]',
      expanded &&
        '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
      addPrefix(
        '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
        '[.tj-select-button:disabled~&]:',
      ),
    ]),
  );
}

export function SlotIndicator({
  // ---- non-passing props ----
  color,
  expanded,
  size,
  variant,

  // others
  children,
  className,
  ...otherProps
  // ---------------------------
}: SlotIndicatorProps) {
  return (
    <span
      className={twMerge(
        selectIndicatorVariants({
          color,
          expanded,
          size,
          variant,
        }),
        className,
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
}
