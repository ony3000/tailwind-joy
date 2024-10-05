import { clsx } from 'clsx';
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

type BoxRootProps = GenericComponentPropsWithVariants<'div', BoxRootVariants>;

export const Box = forwardRef(function BoxRoot(
  {
    // ---- non-passing props ----
    // non-base variants
    className,

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: BoxRootProps,
  ref,
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
});

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: boxRootVariants,
    variants: {},
  },
];
