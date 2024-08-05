import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import { baseTokens, colorTokens } from '../base/tokens';
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

const radioRootVariants = (
  props?: BaseVariants & {
    //
  },
) => {
  const {
    color,
    size,
    variant,
    //
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-radio-root',
      //
    ]),
  );
};

interface RadioRootVariants extends BaseVariants {}

type RadioRootProps = Omit<ComponentProps<'input'>, keyof RadioRootVariants> &
  RadioRootVariants;

export const Radio = forwardRef<HTMLSpanElement, RadioRootProps>(
  function RadioRoot(
    { children, className, color, size, variant, ...otherProps },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={twMerge(radioRootVariants(), className)}
        {...otherProps}
      >
        {children}
      </span>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: radioRootVariants,
    variants: {},
  },
];
