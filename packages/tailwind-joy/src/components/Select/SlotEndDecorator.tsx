import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { twMerge } from '../../base/alias';
import type { Difference } from '../../base/types';

type RequiredProps = {
  //
};

type OptionalProps = {
  //
};

/**
 * Properties that are always defined, regardless of the value of `component`.
 */
type StaticProps = RequiredProps & OptionalProps;

type SlotEndDecoratorProps = Difference<ComponentProps<'span'>, StaticProps> &
  StaticProps;

export function selectEndDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-select-end-decorator',
      '[--Button-margin:0_calc(var(--Select-decoratorChildOffset)*-1)_0_0]',
      '[--IconButton-margin:0_calc(var(--Select-decoratorChildOffset)*-1)_0_0]',
      '[--Icon-margin:0_calc(var(--Select-paddingInline)/-4)_0_0]',
      '[display:inherit]',
      'items-center',
      'text-[color:var(--Select-decoratorColor)]',
      'ms-[var(--Select-gap)]',
    ]),
  );
}

export function SlotEndDecorator({
  // others
  children,
  className,
  ...otherProps
  // ---------------------------
}: SlotEndDecoratorProps) {
  return (
    <span
      className={twMerge(selectEndDecoratorVariants(), className)}
      {...otherProps}
    >
      {children}
    </span>
  );
}
