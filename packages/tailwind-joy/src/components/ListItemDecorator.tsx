import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, createElement, useContext, useMemo } from 'react';
import { r, twMerge } from '../base/alias';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  GeneratorInput,
} from '../base/types';
import { excludeClassName } from '../base/utils';
import { ListItemButtonOrientationContext } from './ListItemButton';

function listItemDecoratorRootVariants(props?: {
  parentOrientation?: 'horizontal' | 'vertical';
}) {
  const { parentOrientation = 'horizontal' } = props ?? {};

  return twMerge(
    clsx([
      'tj-list-item-decorator-root group/tj-list-item-decorator',
      'box-border',
      'inline-flex',
      parentOrientation === 'horizontal'
        ? [
            r`[align-items:var(--unstable_ListItemDecorator-alignItems,center)]`,
            '[min-inline-size:var(--ListItemDecorator-size)]',
            'me-[calc(-1*var(--ListItem-gap))]',
          ]
        : [
            r`[align-items:var(--unstable_ListItemDecorator-alignItems,initial)]`,
            '[min-block-size:var(--ListItemDecorator-size)]',
            'justify-center',
            '[margin-block-end:calc(-1*var(--ListItem-gap))]',
          ],
    ]),
  );
}

type ListItemDecoratorRootVariants = {
  // NOTE: There are no non-base variants yet.
} & {
  slotProps?: {
    root?: ComponentProps<'span'>;
  };
};

type ListItemDecoratorRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ListItemDecoratorRootVariants
> &
  ListItemDecoratorRootVariants;

function ListItemDecoratorRoot<T extends ReactTags = 'span'>(
  {
    // ---- non-passing props ----
    // non-base variants
    className,

    // slot props
    slotProps = {},

    // others
    component = 'span',
    children,
    ...otherProps
    // ---------------------------
  }: ListItemDecoratorRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const parentOrientation = useContext(ListItemButtonOrientationContext);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        listItemDecoratorRootVariants({
          parentOrientation,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    children,
  );
}

export const ListItemDecorator = forwardRef(ListItemDecoratorRoot) as <
  T extends ReactTags = 'span',
>(
  props: ListItemDecoratorRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: listItemDecoratorRootVariants,
    variants: {
      parentOrientation: ['horizontal', 'vertical'],
    },
  },
];
