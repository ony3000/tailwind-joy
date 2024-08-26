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

function sheetRootVariants(
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
      'tj-sheet-root group/tj-sheet',
      //
    ]),
  );
}

interface SheetRootVariants extends BaseVariants {}

type SheetRootProps = Omit<ComponentProps<'div'>, keyof SheetRootVariants> &
  SheetRootVariants;

export const Sheet = forwardRef<HTMLDivElement, SheetRootProps>(
  function SheetRoot(
    { children, className, color, size, variant, ...otherProps },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={twMerge(sheetRootVariants(), className)}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: sheetRootVariants,
    variants: {},
  },
];
