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

type SlotStartDecoratorProps = Difference<ComponentProps<'span'>, StaticProps> &
  StaticProps;

export function selectStartDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-select-start-decorator',
      '[--Button-margin:0_0_0_calc(var(--Select-decoratorChildOffset)*-1)]',
      '[--IconButton-margin:0_0_0_calc(var(--Select-decoratorChildOffset)*-1)]',
      '[--Icon-margin:0_0_0_calc(var(--Select-paddingInline)/-4)]',
      '[display:inherit]',
      'items-center',
      'text-[color:var(--Select-decoratorColor)]',
      'me-[var(--Select-gap)]',
    ]),
  );
}

export function SlotStartDecorator({
  // others
  children,
  className,
  ...otherProps
  // ---------------------------
}: SlotStartDecoratorProps) {
  return (
    <span
      className={twMerge(selectStartDecoratorVariants(), className)}
      {...otherProps}
    >
      {children}
    </span>
  );
}
