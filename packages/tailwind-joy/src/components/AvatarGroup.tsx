import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, createContext, createElement, useMemo } from 'react';
import { twMerge } from '../base/alias';
import { toVariableClass } from '../base/modifier';
import { baseTokens } from '../base/tokens';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { excludeClassName } from '../base/utils';

export const AvatarGroupContext = createContext<Partial<BaseVariants>>({});

function avatarGroupRootVariants(props?: Pick<BaseVariants, 'size'>) {
  const { size = 'md' } = props ?? {};

  return twMerge(
    clsx([
      'tj-avatar-group-root group/tj-avatar-group',
      size === 'sm' && [
        '[--AvatarGroup-gap:-0.375rem]',
        '[--Avatar-ringSize:2px]',
      ],
      size === 'md' && [
        '[--AvatarGroup-gap:-0.5rem]',
        '[--Avatar-ringSize:2px]',
      ],
      size === 'lg' && [
        '[--AvatarGroup-gap:-0.625rem]',
        '[--Avatar-ringSize:4px]',
      ],
      toVariableClass(baseTokens.background.surface, 'tj-Avatar-ringColor'),
      '[--Avatar-ring:0_0_0_var(--Avatar-ringSize)_var(--Avatar-ringColor,var(--tj-Avatar-ringColor))]',
      '[--Avatar-marginInlineStart:var(--AvatarGroup-gap)]',
      'flex',
      'ms-[calc(-1*var(--AvatarGroup-gap))]',
    ]),
  );
}

type AvatarGroupRootVariants = BaseVariants & {
  // NOTE: There are no non-base variants yet.
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
};

type AvatarGroupRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  AvatarGroupRootVariants
> &
  AvatarGroupRootVariants;

function AvatarGroupRoot<T extends ReactTags = 'div'>(
  {
    // ---- non-passing props ----
    // base variants
    color = 'neutral',
    size = 'md',
    variant = 'soft',

    // non-base variants
    className,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: AvatarGroupRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  return (
    <AvatarGroupContext.Provider value={{ color, size, variant }}>
      {createElement(
        component,
        {
          ref,
          className: twMerge(
            avatarGroupRootVariants({
              size,
            }),
            className,
            slotProps.root?.className ?? '',
          ),
          ...otherProps,
          ...(slotPropsWithoutClassName.root ?? {}),
        },
        children,
      )}
    </AvatarGroupContext.Provider>
  );
}

export const AvatarGroup = forwardRef(AvatarGroupRoot) as <
  T extends ReactTags = 'div',
>(
  props: AvatarGroupRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: avatarGroupRootVariants,
    variants: {
      size: ['sm', 'md', 'lg'],
    },
  },
];
