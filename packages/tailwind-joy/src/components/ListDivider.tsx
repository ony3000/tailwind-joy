import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, useContext, useMemo } from 'react';
import { twMerge } from '../base/alias';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { isTailwindVersion4, excludeClassName } from '../base/utils';
import { Divider } from './Divider';
import { RowListContext, ComponentListContext } from './List';

function listDividerRootVariants(props?: {
  isTailwind4?: boolean;
  inset?: 'context' | 'gutter' | 'startDecorator' | 'startContent';
  row?: boolean;
}) {
  const { isTailwind4 = false, inset = 'context', row = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-list-divider-root group/tj-list-divider',
      inset === 'context' && '[--Divider-inset:calc(-1*var(--List-padding))]',
      row
        ? [
            isTailwind4
              ? 'mx-[var(--ListDivider-gap)]'
              : 'ms-[var(--ListDivider-gap)] me-[var(--ListDivider-gap)]',
            inset === 'gutter' && [
              isTailwind4
                ? 'my-[var(--ListItem-paddingY)]'
                : '[margin-block:var(--ListItem-paddingY)]',
            ],
            '[&:not([data-first-child])]:ms-[calc(var(--List-gap)+var(--ListDivider-gap))]',
          ]
        : [
            '[&:not([data-first-child])]:[margin-block-start:calc(var(--List-gap)+var(--ListDivider-gap))]',
            '[margin-block-end:var(--ListDivider-gap)]',
            inset === 'gutter' && [
              'ms-[var(--ListItem-paddingLeft)]',
              'me-[var(--ListItem-paddingRight)]',
            ],
            inset === 'startDecorator' && 'ms-[var(--ListItem-paddingLeft)]',
            inset === 'startContent' &&
              'ms-[calc(var(--ListItem-paddingLeft)+var(--ListItemDecorator-size))]',
          ],
    ]),
  );
}

type ListDividerRootVariants = BaseVariants & {
  inset?: 'context' | 'gutter' | 'startDecorator' | 'startContent';
  orientation?: 'horizontal' | 'vertical';
} & {
  slotProps?: {
    root?: ComponentProps<'li'>;
  };
};

type ListDividerRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ListDividerRootVariants
> &
  ListDividerRootVariants;

function ListDividerRoot<T extends ReactTags = 'li'>(
  {
    // ---- non-passing props ----
    // base variants
    color,
    size,
    variant,

    // non-base variants
    className,
    inset = 'context',
    orientation = 'horizontal',
    style,

    // slot props
    slotProps = {},

    // others
    component,
    children,
    ...otherProps
    // ---------------------------
  }: ListDividerRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const rowList = useContext(RowListContext);
  const componentList = useContext(ComponentListContext);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const [listElement] = componentList?.split(':') || ['', ''];

  const refinedComponent: ReactTags =
    component ||
    (listElement && !listElement.match(/^(ul|ol|menu)$/) ? 'div' : 'li');
  const refinedRole =
    otherProps.role || (refinedComponent === 'li' ? 'separator' : undefined);
  const refinedOrientation =
    orientation || (rowList ? 'vertical' : 'horizontal');

  return (
    // @ts-expect-error
    <Divider
      component={refinedComponent}
      ref={ref}
      className={twMerge(
        listDividerRootVariants({
          isTailwind4: isTailwindVersion4(),
          inset,
          row: Boolean(rowList),
        }),
        slotProps.root?.className ?? '',
      )}
      role={refinedRole}
      aria-orientation={
        refinedRole === 'separator' && refinedOrientation === 'vertical'
          ? 'vertical'
          : undefined
      }
      {...otherProps}
      {...(slotPropsWithoutClassName.root ?? {})}
    >
      {children}
    </Divider>
  );
}

export const ListDivider = forwardRef(ListDividerRoot) as <
  T extends ReactTags = 'li',
>(
  props: ListDividerRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: listDividerRootVariants,
    variants: {
      isTailwind4: [false, true],
      inset: ['context', 'gutter', 'startDecorator', 'startContent'],
      row: [false, true],
    },
  },
];
