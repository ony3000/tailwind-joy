import { clsx } from 'clsx';
import type { ForwardedRef } from 'react';
import { forwardRef, createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import type {
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';

function boxRootVariants() {
  return twMerge(clsx(['tj-box-root group/tj-box']));
}

type BoxRootVariants = {};

type BoxRootProps<T> = GenericComponentPropsWithVariants<
  'div',
  BoxRootVariants,
  T
>;

function BoxRoot<T extends keyof JSX.IntrinsicElements | undefined = undefined>(
  {
    // ---- non-passing props ----
    // non-base variants
    className,

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: BoxRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  return createElement(
    component,
    {
      ref,
      className: twMerge(boxRootVariants(), className),
      ...otherProps,
    },
    children,
  );
}

export const Box = forwardRef(BoxRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: BoxRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: boxRootVariants,
    variants: {},
  },
];
