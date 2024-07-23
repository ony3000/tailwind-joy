import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';

const buttonGroupRootVariants = cva();

interface ButtonGroupRootVariants extends BaseVariants {}

type ButtonGroupRootProps = Omit<
  ComponentProps<'div'>,
  keyof ButtonGroupRootVariants
> &
  ButtonGroupRootVariants;

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupRootProps>(
  function ButtonGroupRoot(
    { children, className, color, size, variant, ...otherProps },
    ref,
  ) {
    return (
      <div
        ref={ref}
        role="group"
        className={twMerge(buttonGroupRootVariants(), className)}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: buttonGroupRootVariants,
    variants: {},
  },
];
