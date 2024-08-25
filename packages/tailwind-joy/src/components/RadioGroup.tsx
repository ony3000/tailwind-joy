import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { createContext, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import { colorTokens } from '../base/tokens';

export const RadioGroupContext = createContext<
  Partial<
    Pick<BaseVariants, 'size'> & {
      disableIcon?: boolean;
      overlay?: boolean;
    } & Pick<
        ComponentProps<'input'>,
        'defaultValue' | 'name' | 'value' | 'onChange'
      >
  >
>({});

function radioGroupRootVariants(
  props?: BaseVariants & {
    orientation?: 'horizontal' | 'vertical';
  },
) {
  const {
    color = 'neutral',
    size = 'md',
    variant = 'plain',
    orientation = 'vertical',
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-radio-group-root group/tj-radio-group',
      size === 'sm' && '[--RadioGroup-gap:0.625rem]',
      size === 'md' && '[--RadioGroup-gap:0.875rem]',
      size === 'lg' && '[--RadioGroup-gap:1.25rem]',
      'flex',
      r`m-[var(--unstable\_RadioGroup-margin)]`,
      orientation === 'horizontal' ? 'flex-row' : 'flex-col',
      'rounded-[6px]',
      [
        variant === 'outlined'
          ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
          : '[--variant-borderWidth:0px]',
        colorTokens[color][`${variant}Color`],
        colorTokens[color][`${variant}Bg`],
        colorTokens[color][`${variant}Border`],
      ],
      orientation === 'horizontal' && 'gap-x-[var(--RadioGroup-gap)]',
      orientation === 'vertical' && 'gap-y-[var(--RadioGroup-gap)]',
    ]),
  );
}

interface RadioGroupRootVariants extends BaseVariants {
  disableIcon?: boolean;
  orientation?: 'horizontal' | 'vertical';
  overlay?: boolean;
}

type RadioGroupRootProps = Omit<
  ComponentProps<'div'>,
  keyof RadioGroupRootVariants
> &
  RadioGroupRootVariants &
  Pick<ComponentProps<'input'>, 'defaultValue' | 'name' | 'value' | 'onChange'>;

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupRootProps>(
  function RadioGroupRoot(
    {
      children,
      className,
      color = 'neutral',
      size = 'md',
      variant = 'plain',
      defaultValue,
      disableIcon = false,
      orientation = 'vertical',
      overlay = false,
      name,
      value,
      onChange,
      ...otherProps
    },
    ref,
  ) {
    return (
      <RadioGroupContext.Provider
        value={{
          size,
          defaultValue,
          disableIcon,
          overlay,
          name,
          value,
          onChange,
        }}
      >
        <div
          ref={ref}
          role="radiogroup"
          className={twMerge(
            radioGroupRootVariants({
              color,
              size,
              variant,
              orientation,
            }),
            className,
          )}
          {...otherProps}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: radioGroupRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      orientation: ['horizontal', 'vertical'],
    },
  },
];
