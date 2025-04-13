import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { twMerge } from '../../base/alias';
import { addPrefix } from '../../base/modifier';
import type { Difference } from '../../base/types';

type RequiredProps = {
  //
};

type OptionalProps = {
  value?: any;
};

/**
 * Properties that are always defined, regardless of the value of `component`.
 */
type StaticProps = RequiredProps & OptionalProps;

type SlotButtonProps = Difference<ComponentProps<'button'>, StaticProps> &
  StaticProps;

export function selectButtonVariants(props?: Pick<StaticProps, 'value'>) {
  const { value } = props ?? {};

  return twMerge(
    clsx([
      'tj-select-button',
      'border-0',
      'outline-0',
      'bg-none',
      'p-0',
      'text-[length:inherit]',
      'text-inherit',
      'self-stretch',
      'flex',
      'items-center',
      'flex-1',
      'font-[family-name:inherit]',
      'cursor-pointer',
      'whitespace-nowrap',
      'overflow-hidden',
      (value === null || value === undefined) &&
        'opacity-[var(--Select-placeholderOpacity)]',
      addPrefix(
        clsx([
          'content-[""]',
          'block',
          'absolute',
          'inset-[calc(-1*var(--variant-borderWidth,0px))]',
          'rounded-[var(--Select-radius)]',
        ]),
        'before:',
      ),
    ]),
  );
}

export function SlotButton({
  // ---- non-passing props ----
  value,

  // others
  children,
  className,
  ...otherProps
  // ---------------------------
}: SlotButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        selectButtonVariants({
          value,
        }),
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
