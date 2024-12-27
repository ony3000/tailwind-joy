import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, createElement, useMemo } from 'react';
import { twMerge } from '../base/alias';
import { toVariableClass } from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens, colorTokens } from '../base/tokens';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { excludeClassName } from '../base/utils';

function sheetRootVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    childRadius?: boolean;
  },
) {
  const { color = 'neutral', variant = 'plain', childRadius } = props ?? {};
  const resolvedBgToken =
    theme.variants[variant][color].tokens.backgroundColor ||
    baseTokens.background.surface;

  return twMerge(
    clsx([
      'tj-sheet-root group/tj-sheet',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      toVariableClass(resolvedBgToken, 'ListItem-stickyBackground'),
      toVariableClass(resolvedBgToken, 'Sheet-background'),
      childRadius && [
        '[--List-radius:calc(var(--tj-Sheet-childRadius)-var(--variant-borderWidth,0px))]',
        '[--unstable_actionRadius:calc(var(--tj-Sheet-childRadius)-var(--variant-borderWidth,0px))]',
      ],
      colorTokens.background.surface,
      'relative',
      ['text-[1rem]', 'leading-normal', colorTokens.text.secondary],
      theme.variants[variant][color].className,
    ]),
  );
}

type SheetRootVariants = Pick<BaseVariants, 'color' | 'variant'> & {
  // NOTE: There are no non-base variants yet.
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
};

type SheetRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  SheetRootVariants
> &
  SheetRootVariants;

function SheetRoot<T extends ReactTags = 'div'>(
  {
    // ---- non-passing props ----
    // base variants
    color,
    variant,

    // non-base variants
    className,
    style,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: SheetRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

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

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        sheetRootVariants({
          color,
          variant,
          childRadius: instanceChildRadius !== undefined,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      style: {
        ...style,
        '--tj-Sheet-childRadius': instanceChildRadius,
      },
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    children,
  );
}

export const Sheet = forwardRef(SheetRoot) as <T extends ReactTags = 'div'>(
  props: SheetRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

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
