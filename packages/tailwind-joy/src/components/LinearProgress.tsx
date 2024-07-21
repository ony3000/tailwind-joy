import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';

const linearProgressRootVariants = cva();

interface LinearProgressRootVariants extends BaseVariants {}

type LinearProgressRootProps = Omit<
  ComponentProps<'div'>,
  keyof LinearProgressRootVariants
> &
  LinearProgressRootVariants;

export const LinearProgress = forwardRef<
  HTMLDivElement,
  LinearProgressRootProps
>(function LinearProgressRoot(
  { children, className, color, size, variant, ...otherProps },
  ref,
) {
  return (
    <div
      ref={ref}
      role="progressbar"
      className={twMerge(linearProgressRootVariants(), className)}
      {...otherProps}
    >
      {children}
    </div>
  );
});

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: linearProgressRootVariants,
    variants: {},
  },
];
