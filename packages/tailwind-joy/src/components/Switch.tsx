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

function switchRootVariants(
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
      'tj-switch-root group/tj-switch',
      //
    ]),
  );
}

interface SwitchRootVariants extends BaseVariants {}

type SwitchRootProps = Omit<ComponentProps<'div'>, keyof SwitchRootVariants> &
  SwitchRootVariants;

export const Switch = forwardRef<HTMLDivElement, SwitchRootProps>(
  function SwitchRoot(
    { children, className, color, size, variant, ...otherProps },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={twMerge(switchRootVariants(), className)}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: switchRootVariants,
    variants: {},
  },
];
