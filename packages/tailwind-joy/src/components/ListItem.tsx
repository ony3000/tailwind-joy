import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import {
  forwardRef,
  createElement,
  cloneElement,
  isValidElement,
  Children,
  useContext,
  useState,
  useMemo,
} from 'react';
import { r, twMerge } from '../base/alias';
import { marginInline } from '../base/conditional';
import { addPrefix } from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens } from '../base/tokens';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { isTailwindVersion4, excludeClassName } from '../base/utils';
import {
  RowListContext,
  WrapListContext,
  NestedListContext,
  GroupListContext,
  ComponentListContext,
} from './List';
import { ListSubheaderContext } from './ListSubheader';

function listItemRootVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    isTailwind4?: boolean;
    endAction?: boolean;
    nested?: boolean;
    row?: boolean;
    startAction?: boolean;
    sticky?: boolean;
    wrap?: boolean;
  },
) {
  const {
    color = 'neutral',
    variant = 'plain',
    isTailwind4 = false,
    endAction = false,
    nested = false,
    row = false,
    startAction = false,
    sticky = false,
    wrap = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-list-item-root group/tj-list-item',
      nested && 'tj-list-item-nested',
      nested
        ? [
            '[--NestedList-marginRight:calc(-1*var(--ListItem-paddingRight))]',
            '[--NestedList-marginLeft:calc(-1*var(--ListItem-paddingLeft))]',
            '[--NestedListItem-paddingLeft:calc(var(--ListItem-paddingLeft)+var(--List-nestedInsetStart))]',
            '[--ListItemButton-marginBlock:0px]',
            '[--ListItemButton-marginInline:calc(-1*var(--ListItem-paddingLeft))_calc(-1*var(--ListItem-paddingRight))]',
            '[--ListItem-marginInline:calc(-1*var(--ListItem-paddingLeft))_calc(-1*var(--ListItem-paddingRight))]',
            'flex-col',
          ]
        : [
            '[--ListItemButton-marginInline:calc(-1*var(--ListItem-paddingLeft))_calc(-1*var(--ListItem-paddingRight))]',
            '[--ListItemButton-marginBlock:calc(-1*var(--ListItem-paddingY))]',
            'items-center',
            'gap-[var(--ListItem-gap)]',
            marginInline(isTailwind4, 'var(--ListItem-marginInline)'),
          ],
      '[--unstable_actionRadius:calc(var(--ListItem-radius)-var(--variant-borderWidth,0px))]',
      startAction && '[--unstable_startActionWidth:2rem]',
      endAction && '[--unstable_endActionWidth:2.5rem]',
      'box-border',
      'rounded-[var(--ListItem-radius)]',
      r`[display:var(--\_ListItem-display)]`,
      r`[&:not([hidden])]:[--_ListItem-display:var(--\_List-markerDisplay,flex)]`,
      'flex-none',
      r`list-[var(--\_List-markerType,disc)]`,
      'relative',
      nested
        ? ['[padding-block-start:0]', '[padding-block-end:0]']
        : [
            '[padding-block-start:var(--ListItem-paddingY)]',
            '[padding-block-end:var(--ListItem-paddingY)]',
          ],
      'ps-[var(--ListItem-paddingLeft)]',
      'pe-[var(--ListItem-paddingRight)]',
      addPrefix(
        row ? 'ms-[var(--List-gap)]' : '[margin-block-start:var(--List-gap)]',
        '[&:not([data-first-child])]:',
      ),
      row &&
        wrap && [
          'ms-[var(--List-gap)]',
          '[margin-block-start:var(--List-gap)]',
        ],
      '[min-block-size:var(--ListItem-minHeight)]',
      sticky && [
        'sticky',
        'top-[var(--ListItem-stickyTop,0px)]',
        'z-[1]',
        baseTokens.background.body.replace(
          /(joy-[a-z0-9]+-[a-z0-9]+)/g,
          'bg-[color:var(--ListItem-stickyBackground,var(--$1))]',
        ),
      ],
      '[.tj-list-item-nested>&]:[--_ListItem-display:flex]',
      theme.variants[variant][color].className,
    ]),
  );
}

function listItemStartActionVariants(props?: { nested?: boolean }) {
  const { nested = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-list-item-start-action',
      '[display:inherit]',
      'absolute',
      nested ? 'top-[calc(var(--ListItem-minHeight)/2)]' : 'top-1/2',
      'left-0',
      'translate-x-[var(--ListItem-startActionTranslateX)]',
      '-translate-y-1/2',
      'z-[1]',
    ]),
  );
}

function listItemEndActionVariants(props?: { nested?: boolean }) {
  const { nested = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-list-item-end-action',
      '[display:inherit]',
      'absolute',
      nested ? 'top-[calc(var(--ListItem-minHeight)/2)]' : 'top-1/2',
      'right-0',
      'translate-x-[var(--ListItem-endActionTranslateX)]',
      '-translate-y-1/2',
    ]),
  );
}

type ListItemRootVariants = Pick<BaseVariants, 'color' | 'variant'> & {
  endAction?: ReactNode;
  nested?: boolean;
  startAction?: ReactNode;
  sticky?: boolean;
} & {
  slotProps?: {
    root?: ComponentProps<'li'>;
    startAction?: ComponentProps<'div'>;
    endAction?: ComponentProps<'div'>;
  };
};

type ListItemRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ListItemRootVariants
> &
  ListItemRootVariants;

function ListItemRoot<T extends ReactTags = 'li'>(
  {
    // ---- passing props ----
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color = 'neutral',
    variant = 'plain',

    // non-base variants
    className,
    endAction,
    nested = false,
    role,
    startAction,
    sticky = false,
    // style,

    // slot props
    slotProps = {},

    // others
    component = 'li',
    children,
    ...otherProps
    // ---------------------------
  }: ListItemRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const group = useContext(GroupListContext);
  const listComponent = useContext(ComponentListContext);
  const row = useContext(RowListContext);
  const wrap = useContext(WrapListContext);
  const nesting = useContext(NestedListContext);
  const [subheaderId, setSubheaderId] = useState('');
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const [listElement, listRole] = listComponent?.split(':') || ['', ''];

  const refinedComponent: ReactTags =
    component ||
    (listElement && !listElement.match(/^(ul|ol|menu)$/) ? 'div' : undefined);
  let refinedRole = group === 'menu' ? 'none' : undefined;

  if (listComponent) {
    refinedRole = { menu: 'none', menubar: 'none', group: 'presentation' }[
      listRole
    ];
  }
  if (role) {
    refinedRole = role;
  }

  return (
    <ListSubheaderContext.Provider value={setSubheaderId}>
      <NestedListContext.Provider value={nested ? subheaderId || true : false}>
        {createElement(
          component,
          {
            ref,
            className: twMerge(
              listItemRootVariants({
                color,
                variant,
                isTailwind4: isTailwindVersion4(),
                endAction: Boolean(endAction),
                nested,
                row,
                startAction: Boolean(startAction),
                sticky,
                wrap,
              }),
              className,
              slotProps.root?.className ?? '',
            ),
            role: refinedRole,
            ...otherProps,
            ...(slotPropsWithoutClassName.root ?? {}),
          },
          <>
            {startAction && (
              <div
                className={twMerge(
                  listItemStartActionVariants({
                    nested,
                  }),
                  slotProps.startAction?.className ?? '',
                )}
                {...(slotPropsWithoutClassName.startAction ?? {})}
              >
                {startAction}
              </div>
            )}
            {Children.map(children, (child, index) => {
              if (!isValidElement(child)) {
                return child;
              }

              const extraProps: Record<string, any> = {
                'data-first-child': index === 0 ? '' : undefined,
                component:
                  // @ts-expect-error
                  child.type.internalName === 'TJListItem'
                    ? child.props.component || 'div'
                    : child.props.component,
              };

              return cloneElement(child, extraProps);
            })}
            {endAction && (
              <div
                className={twMerge(
                  listItemEndActionVariants({
                    nested,
                  }),
                  slotProps.endAction?.className ?? '',
                )}
                {...(slotPropsWithoutClassName.endAction ?? {})}
              >
                {endAction}
              </div>
            )}
          </>,
        )}
      </NestedListContext.Provider>
    </ListSubheaderContext.Provider>
  );
}

export const ListItem = forwardRef(ListItemRoot) as <
  T extends ReactTags = 'li',
>(
  props: ListItemRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

// @ts-expect-error
ListItem.internalName = 'TJListItem';

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: listItemRootVariants,
    variants: {},
  },
  {
    generatorFn: listItemStartActionVariants,
    variants: {
      nested: [false, true],
    },
  },
  {
    generatorFn: listItemEndActionVariants,
    variants: {
      nested: [false, true],
    },
  },
];
