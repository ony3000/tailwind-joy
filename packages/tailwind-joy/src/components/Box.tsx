import { clsx } from 'clsx';
import type { ComponentProps, FunctionComponent, ComponentClass } from 'react';
import { forwardRef, createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';

function boxRootVariants(props?: BaseVariants) {
  return twMerge(clsx(['tj-box-root group/tj-box']));
}

interface BoxRootVariants {
  component?: string | FunctionComponent | ComponentClass;
}

type BoxRootProps = Omit<ComponentProps<'div'>, keyof BoxRootVariants> &
  BoxRootVariants;

export const Box = forwardRef<HTMLElement, BoxRootProps>(function BoxRoot(
  { children, className, component = 'div', ...otherProps },
  ref,
) {
  return typeof component === 'string'
    ? createElement(
        component,
        {
          ref,
          className: twMerge(boxRootVariants(), className),
          ...otherProps,
        },
        children,
      )
    : createElement(component, {
        // @ts-expect-error
        ref,
      });
});

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: boxRootVariants,
    variants: {},
  },
];
