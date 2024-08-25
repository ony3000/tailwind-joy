import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import {
  addPrefix,
  hover,
  focus,
  active,
  disabled,
  toColorClass,
  backgroundColor,
  borderColor,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';

function radioGroupRootVariants(
  props?: BaseVariants & {
    //
  },
) {
  const {
    color,
    size,
    variant,
    //
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-radio-group-root group/tj-radio-group',
      //
    ]),
  );
}

interface RadioGroupRootVariants extends BaseVariants {}

type RadioGroupRootProps = Omit<
  ComponentProps<'input'>,
  keyof RadioGroupRootVariants
> &
  RadioGroupRootVariants;

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupRootProps>(
  function RadioGroupRoot(
    { children, className, color, size, variant, ...otherProps },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={twMerge(radioGroupRootVariants(), className)}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: radioGroupRootVariants,
    variants: {},
  },
];
