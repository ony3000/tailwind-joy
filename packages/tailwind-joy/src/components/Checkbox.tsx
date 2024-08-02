import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
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

const { primary, neutral, danger, success, warning } = colorTokens;

const checkboxRootVariants = cva();

interface CheckboxRootVariants extends BaseVariants {}

type CheckboxRootProps = Omit<
  ComponentProps<'span'>,
  keyof CheckboxRootVariants
> &
  CheckboxRootVariants;

export const Checkbox = forwardRef<HTMLSpanElement, CheckboxRootProps>(
  function CheckboxRoot(
    { children, className, color, size, variant, ...otherProps },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={twMerge(checkboxRootVariants(), className)}
        {...otherProps}
      >
        {children}
      </span>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: checkboxRootVariants,
    variants: {},
  },
];
