import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, createElement, useMemo } from 'react';
import { twMerge } from '../base/alias';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  GeneratorInput,
} from '../base/types';
import { excludeClassName } from '../base/utils';

function listItemContentRootVariants() {
  return twMerge(
    clsx([
      'tj-list-item-content-root group/tj-list-item-content',
      'flex-auto',
      'min-w-0',
    ]),
  );
}

type ListItemContentRootVariants = {
  // NOTE: There are no non-base variants yet.
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
};

type ListItemContentRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ListItemContentRootVariants
> &
  ListItemContentRootVariants;

function ListItemContentRoot<T extends ReactTags = 'div'>(
  {
    // ---- non-passing props ----
    // non-base variants
    className,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: ListItemContentRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        listItemContentRootVariants(),
        className,
        slotProps.root?.className ?? '',
      ),
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    children,
  );
}

export const ListItemContent = forwardRef(ListItemContentRoot) as <
  T extends ReactTags = 'div',
>(
  props: ListItemContentRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: listItemContentRootVariants,
    variants: {},
  },
];
