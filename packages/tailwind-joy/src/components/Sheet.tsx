import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { toVariableClass } from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';

function sheetRootVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    childRadius?: boolean;
  },
) {
  const { color = 'neutral', variant = 'plain', childRadius } = props ?? {};
  const resolvedBgToken =
    baseTokens[color][`${variant}Bg`] || baseTokens.background.surface;

  return twMerge(
    clsx([
      'tj-sheet-root group/tj-sheet',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      toVariableClass(resolvedBgToken, 'ListItem-stickyBackground'),
      toVariableClass(resolvedBgToken, 'Sheet-background'),
      childRadius && [
        '[--List-radius:calc(var(--tj-Sheet-childRadius)-var(--variant-borderWidth,0px))]',
        '[--unstable_actionRadius:calc(var(--tj-Sheet-childRadius)-var(--variant-borderWidth,0px))]',
      ],
      colorTokens.background.surface,
      'relative',
      'text-[1rem]',
      'leading-normal',
      colorTokens.text.secondary,
      [
        variant === 'outlined'
          ? '[--variant-borderWidth:1px] [border-width:var(--variant-borderWidth)] border-solid'
          : '[--variant-borderWidth:0px]',
        colorTokens[color][`${variant}Color`],
        colorTokens[color][`${variant}Bg`],
        colorTokens[color][`${variant}Border`],
      ],
    ]),
  );
}

interface SheetRootVariants extends Pick<BaseVariants, 'color' | 'variant'> {}

type SheetRootProps = Omit<ComponentProps<'div'>, keyof SheetRootVariants> &
  SheetRootVariants;

export const Sheet = forwardRef<HTMLDivElement, SheetRootProps>(
  function SheetRoot(
    { children, className, style, color, variant, ...otherProps },
    ref,
  ) {
    const resolvedClassNames = twMerge(className).split(' ');
    const resolvedBorderRadiusWithArbitraryValue = useMemo(() => {
      const regExp = /^rounded-\[([^\]]+)\]$/;

      return resolvedClassNames
        .filter((text) => regExp.test(text))
        .at(0)
        ?.replace(regExp, '$1');
    }, [resolvedClassNames]);
    const resolvedBorderRadiusWithArbitraryProperty = useMemo(() => {
      const regExp = /^\[border-radius:([^\]]+)\]$/;

      return resolvedClassNames
        .filter((text) => regExp.test(text))
        .at(0)
        ?.replace(regExp, '$1');
    }, [resolvedClassNames]);

    const instanceChildRadius =
      resolvedBorderRadiusWithArbitraryProperty ||
      resolvedBorderRadiusWithArbitraryValue;

    return (
      <div
        ref={ref}
        className={twMerge(
          sheetRootVariants({
            color,
            variant,
            childRadius: instanceChildRadius !== undefined,
          }),
          className,
        )}
        {...otherProps}
        style={{
          ...style,
          // @ts-expect-error
          '--tj-Sheet-childRadius': instanceChildRadius,
        }}
      >
        {children}
      </div>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: sheetRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      childRadius: [false, true],
    },
  },
];
