import { clsx } from 'clsx';
import { forwardRef, createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';

function boxRootVariants(props?: BaseVariants) {
  return twMerge(clsx(['tj-box-root group/tj-box']));
}

interface BoxRootVariants {}

type BoxRootProps = GenericComponentPropsWithVariants<'div', BoxRootVariants>;

export const Box = forwardRef(function BoxRoot(
  { children, className, component = 'div', ...otherProps }: BoxRootProps,
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
