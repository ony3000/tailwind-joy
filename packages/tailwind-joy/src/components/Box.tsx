import { clsx } from 'clsx';
import type { ForwardedRef } from 'react';
import { forwardRef, createElement } from 'react';
import { twMerge } from '../base/alias';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  GeneratorInput,
} from '../base/types';

function boxRootVariants() {
  return twMerge(clsx(['tj-box-root group/tj-box']));
}

// biome-ignore lint/complexity/noBannedTypes:
type BoxRootVariants = {};

type BoxRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  BoxRootVariants
> &
  BoxRootVariants;

function BoxRoot<T extends ReactTags = 'div'>(
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

export const Box = forwardRef(BoxRoot) as <T extends ReactTags = 'div'>(
  props: BoxRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: boxRootVariants,
    variants: {},
  },
];
