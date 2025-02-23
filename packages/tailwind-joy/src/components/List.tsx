import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import {
  forwardRef,
  createContext,
  createElement,
  cloneElement,
  isValidElement,
  Children,
  useContext,
  useMemo,
} from 'react';
import { r, twMerge } from '../base/alias';
import { paddingBlock, paddingInline } from '../base/conditional';
import { theme } from '../base/theme';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { isTailwindVersion4, excludeClassName } from '../base/utils';
import { RadioGroupContext } from './RadioGroup';

export const RowListContext = createContext(false);

const WrapListContext = createContext(false);

const NestedListContext = createContext<boolean | string>(false);

const GroupListContext = createContext<undefined | 'menu' | 'select'>(
  undefined,
);

export const ComponentListContext = createContext<string | undefined>(
  undefined,
);

type ListProviderProps = {
  children?: ReactNode;
  nested?: boolean;
  row?: boolean;
  wrap?: boolean;
};

function ListProvider({
  children,
  nested,
  row = false,
  wrap = false,
}: ListProviderProps) {
  const baseProviders = (
    <RowListContext.Provider value={row}>
      <WrapListContext.Provider value={wrap}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) {
            return child;
          }

          const extraProps: Record<string, any> = {
            'data-first-child': index === 0 ? '' : undefined,
            'data-last-child':
              index === Children.count(children) - 1 ? '' : undefined,
          };

          return cloneElement(child, extraProps);
        })}
      </WrapListContext.Provider>
    </RowListContext.Provider>
  );

  return nested === undefined ? (
    baseProviders
  ) : (
    <NestedListContext.Provider value={nested}>
      {baseProviders}
    </NestedListContext.Provider>
  );
}

function listRootVariants(
  props?: BaseVariants & {
    isTailwind4?: boolean;
    borderRadius?: boolean;
    hasMarker?: boolean;
    instanceSize?: BaseVariants['size'];
    nesting?: boolean;
    orientation?: 'horizontal' | 'vertical';
    padding?: boolean;
    wrap?: boolean;
  },
) {
  const {
    color = 'neutral',
    size = 'md',
    variant = 'plain',
    isTailwind4 = false,
    borderRadius = false,
    hasMarker = false,
    instanceSize,
    nesting = false,
    orientation = 'vertical',
    padding = false,
    wrap = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-list-root group/tj-list',
      nesting
        ? [
            instanceSize === 'sm' && [
              '[--ListDivider-gap:0.25rem]',
              '[--ListItem-minHeight:2rem]',
              '[--ListItem-paddingY:3px]',
              hasMarker
                ? '[--ListItem-paddingX:3px]'
                : '[--ListItem-paddingX:0.5rem]',
              '[--ListItem-gap:0.5rem]',
              orientation === 'horizontal'
                ? '[--ListItemDecorator-size:1.5rem]'
                : '[--ListItemDecorator-size:2rem]',
              '[--Icon-fontSize:1.125rem]',
            ],
            instanceSize === 'md' && [
              '[--ListDivider-gap:0.375rem]',
              '[--ListItem-minHeight:2.25rem]',
              '[--ListItem-paddingY:0.25rem]',
              hasMarker
                ? '[--ListItem-paddingX:0.25rem]'
                : '[--ListItem-paddingX:0.75rem]',
              '[--ListItem-gap:0.625rem]',
              orientation === 'horizontal'
                ? '[--ListItemDecorator-size:1.75rem]'
                : '[--ListItemDecorator-size:2.5rem]',
              '[--Icon-fontSize:1.25rem]',
            ],
            instanceSize === 'lg' && [
              '[--ListDivider-gap:0.5rem]',
              '[--ListItem-minHeight:2.75rem]',
              '[--ListItem-paddingY:0.375rem]',
              hasMarker
                ? '[--ListItem-paddingX:0.5rem]'
                : '[--ListItem-paddingX:1rem]',
              '[--ListItem-gap:0.75rem]',
              orientation === 'horizontal'
                ? '[--ListItemDecorator-size:2.25rem]'
                : '[--ListItemDecorator-size:3rem]',
              '[--Icon-fontSize:1.5rem]',
            ],
            '[--ListItem-paddingRight:var(--ListItem-paddingX)]',
            '[--ListItem-paddingLeft:var(--NestedListItem-paddingLeft)]',
            '[--ListItemButton-marginBlock:0px]',
            '[--ListItemButton-marginInline:0px]',
            '[--ListItem-marginBlock:0px]',
            '[--ListItem-marginInline:0px]',
            'p-0',
            hasMarker && r`ps-[calc(3ch-var(--\_List-markerDeduct,0px))]`,
            'ms-[var(--NestedList-marginLeft)]',
            'me-[var(--NestedList-marginRight)]',
            '[margin-block-start:var(--List-gap)]',
            '[margin-block-end:initial]',
          ]
        : [
            size === 'sm' && [
              '[--ListDivider-gap:0.25rem]',
              '[--ListItem-minHeight:2rem]',
              '[--ListItem-paddingY:3px]',
              hasMarker
                ? '[--ListItem-paddingX:3px]'
                : '[--ListItem-paddingX:0.5rem]',
              '[--ListItem-gap:0.5rem]',
              orientation === 'horizontal'
                ? '[--ListItemDecorator-size:1.5rem]'
                : '[--ListItemDecorator-size:2rem]',
              '[--Icon-fontSize:1.125rem]',
            ],
            size === 'md' && [
              '[--ListDivider-gap:0.375rem]',
              '[--ListItem-minHeight:2.25rem]',
              '[--ListItem-paddingY:0.25rem]',
              hasMarker
                ? '[--ListItem-paddingX:0.25rem]'
                : '[--ListItem-paddingX:0.75rem]',
              '[--ListItem-gap:0.625rem]',
              orientation === 'horizontal'
                ? '[--ListItemDecorator-size:1.75rem]'
                : '[--ListItemDecorator-size:2.5rem]',
              '[--Icon-fontSize:1.25rem]',
            ],
            size === 'lg' && [
              '[--ListDivider-gap:0.5rem]',
              '[--ListItem-minHeight:2.75rem]',
              '[--ListItem-paddingY:0.375rem]',
              hasMarker
                ? '[--ListItem-paddingX:0.5rem]'
                : '[--ListItem-paddingX:1rem]',
              '[--ListItem-gap:0.75rem]',
              orientation === 'horizontal'
                ? '[--ListItemDecorator-size:2.25rem]'
                : '[--ListItemDecorator-size:3rem]',
              '[--Icon-fontSize:1.5rem]',
            ],
            '[--List-gap:0px]',
            '[--List-nestedInsetStart:0px]',
            '[--ListItem-paddingLeft:var(--ListItem-paddingX)]',
            '[--ListItem-paddingRight:var(--ListItem-paddingX)]',
            hasMarker && '[--_List-markerDeduct:1ch]',
            '[--unstable_List-childRadius:calc(max(var(--List-radius)-var(--List-padding),min(var(--List-padding)/2,var(--List-radius)/2))-var(--variant-borderWidth,0px))]',
            r`[--ListItem-radius:var(--unstable\_List-childRadius)]`,
            '[--ListItem-startActionTranslateX:calc(0.5*var(--ListItem-paddingLeft))]',
            '[--ListItem-endActionTranslateX:calc(-0.5*var(--ListItem-paddingRight))]',
            'm-[initial]',
            theme.typography[`body-${size}`].className,
            orientation === 'horizontal'
              ? [
                  wrap
                    ? [
                        'p-[var(--List-padding)]',
                        'ms-[calc(-1*var(--List-gap))]',
                        '[margin-block-start:calc(-1*var(--List-gap))]',
                      ]
                    : [
                        paddingInline(
                          isTailwind4,
                          'var(--List-padding,var(--ListDivider-gap))',
                        ),
                        paddingBlock(isTailwind4, 'var(--List-padding)'),
                      ],
                ]
              : [
                  paddingBlock(
                    isTailwind4,
                    'var(--List-padding,var(--ListDivider-gap))',
                  ),
                  paddingInline(isTailwind4, 'var(--List-padding)'),
                ],
            hasMarker && 'ps-[3ch]',
          ],
      'box-border',
      'rounded-[var(--List-radius)]',
      'list-none',
      'flex',
      orientation === 'horizontal' ? 'flex-row' : 'flex-col',
      wrap && 'flex-wrap',
      hasMarker && [
        '[--_List-markerDisplay:list-item]',
        '[--_List-markerType:var(--tj-List-marker)]',
        'leading-[calc(var(--ListItem-minHeight)-2*var(--ListItem-paddingY))]',
      ],
      'grow',
      'relative',
      theme.variants[variant][color].className,
      '[--unstable_List-borderWidth:var(--variant-borderWidth,0px)]',
      borderRadius && '[--List-radius:var(--tj-List-borderRadius)]',
      padding && '[--List-padding:var(--tj-List-padding)]',
    ]),
  );
}

type ListRootVariants = BaseVariants & {
  marker?: string;
  orientation?: 'horizontal' | 'vertical';
  wrap?: boolean;
} & {
  slotProps?: {
    root?: ComponentProps<'ul'>;
  };
};

type ListRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ListRootVariants
> &
  ListRootVariants;

function ListRoot<T extends ReactTags = 'ul'>(
  {
    // ---- non-passing props ----
    // base variants
    color = 'neutral',
    size,
    variant = 'plain',

    // non-base variants
    className,
    marker,
    orientation = 'vertical',
    style,
    wrap = false,

    // slot props
    slotProps = {},

    // others
    component = 'ul',
    children,
    ...otherProps
    // ---------------------------
  }: ListRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const nestedList = useContext(NestedListContext);
  const groupList = useContext(GroupListContext);
  const radioGroup = useContext(RadioGroupContext);
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
  const resolvedPaddingWithArbitraryValue = useMemo(() => {
    const regExp = /^p-\[([^\]]+)\]$/;

    return resolvedClassNames
      .filter((text) => regExp.test(text))
      .at(0)
      ?.replace(regExp, '$1');
  }, [resolvedClassNames]);
  const resolvedPaddingWithArbitraryProperty = useMemo(() => {
    const regExp = /^\[padding:([^\]]+)\]$/;

    return resolvedClassNames
      .filter((text) => regExp.test(text))
      .at(0)
      ?.replace(regExp, '$1');
  }, [resolvedClassNames]);

  const refinedSize = size ?? 'md';
  const refinedBorderRadius =
    resolvedBorderRadiusWithArbitraryProperty ||
    resolvedBorderRadiusWithArbitraryValue;
  const refinedPadding =
    resolvedPaddingWithArbitraryProperty || resolvedPaddingWithArbitraryValue;
  let refinedRole = '';

  if (groupList) {
    refinedRole = 'group';
  }
  if (radioGroup) {
    refinedRole = 'presentation';
  }
  if (otherProps.role) {
    refinedRole = otherProps.role;
  }

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        listRootVariants({
          color,
          size: refinedSize,
          variant,
          isTailwind4: isTailwindVersion4(),
          borderRadius: refinedBorderRadius !== undefined,
          hasMarker: Boolean(marker),
          instanceSize: size,
          nesting: Boolean(nestedList),
          orientation,
          padding: refinedPadding !== undefined,
          wrap,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      style: {
        ...style,
        '--tj-List-marker': marker,
        '--tj-List-borderRadius': refinedBorderRadius,
        '--tj-List-padding': refinedPadding,
      },
      role: refinedRole,
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    <ComponentListContext.Provider value={`${component}:${refinedRole}`}>
      <ListProvider row={orientation === 'horizontal'} wrap={wrap}>
        {children}
      </ListProvider>
    </ComponentListContext.Provider>,
  );
}

export const List = forwardRef(ListRoot) as <T extends ReactTags = 'ul'>(
  props: ListRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: listRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      isTailwind4: [false, true],
      borderRadius: [false, true],
      hasMarker: [false, true],
      instanceSize: [undefined, 'sm', 'md', 'lg'],
      nesting: [false, true],
      orientation: ['horizontal', 'vertical'],
      padding: [false, true],
      wrap: [false, true],
    },
  },
];
