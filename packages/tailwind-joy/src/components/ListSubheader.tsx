import { clsx } from 'clsx';
import type {
  ComponentProps,
  ForwardedRef,
  Dispatch,
  SetStateAction,
} from 'react';
import {
  forwardRef,
  createContext,
  createElement,
  useContext,
  useMemo,
  useEffect,
} from 'react';
import { r, twMerge, useUniqueId } from '../base/alias';
import { marginInline, paddingBlock } from '../base/conditional';
import { addPrefix, toVariableClass } from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens, colorTokens } from '../base/tokens';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { isTailwindVersion4, excludeClassName } from '../base/utils';

export const ListSubheaderContext = createContext<
  undefined | Dispatch<SetStateAction<string>>
>(undefined);

function listSubheaderRootVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    isTailwind4?: boolean;
    instanceColor?: BaseVariants['color'];
    sticky?: boolean;
  },
) {
  const {
    color,
    variant,
    isTailwind4 = false,
    instanceColor,
    sticky = false,
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-list-subheader-root group/tj-list-subheader',
      'box-border',
      'flex',
      'items-center',
      marginInline(isTailwind4, 'var(--ListItem-marginInline)'),
      paddingBlock(isTailwind4, 'var(--ListItem-paddingY)'),
      'ps-[var(--ListItem-paddingLeft)]',
      'pe-[var(--ListItem-paddingRight)]',
      '[min-block-size:var(--ListItem-minHeight)]',
      theme.typography['body-xs'].className,
      'text-[length:max(0.75em,0.625rem)]',
      'uppercase',
      'tracking-[0.1em]',
      sticky && [
        'sticky',
        'top-[var(--ListItem-stickyTop,0px)]',
        'z-[1]',
        'bg-[color:var(--ListItem-stickyBackground)]',
      ],
      color
        ? baseTokens[color].mainChannel.replace(
            /(joy-[a-z0-9]+-[a-z0-9]+)/g,
            r`text-[color:var(--\_Link-color,var(--$1))]`,
          )
        : colorTokens.text.tertiary,
      instanceColor &&
        addPrefix(
          toVariableClass(baseTokens.text.secondary, '_Link-color'),
          '[&:not([data-skip-inverted-colors])]:',
        ),
      variant && color && theme.variants[variant][color].className,
    ]),
  );
}

type ListSubheaderRootVariants = Pick<BaseVariants, 'color' | 'variant'> & {
  sticky?: boolean;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
};

type ListSubheaderRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ListSubheaderRootVariants
> &
  ListSubheaderRootVariants;

function ListSubheaderRoot<T extends ReactTags = 'div'>(
  {
    // ---- non-passing props ----
    // base variants
    color,
    variant,

    // non-base variants
    className,
    id,
    sticky = false,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: ListSubheaderRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const instanceId = useUniqueId();
  const setSubheaderId = useContext(ListSubheaderContext);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const refinedId = id ?? instanceId;
  const refinedColor = variant ? (color ?? 'neutral') : color;

  useEffect(() => {
    if (setSubheaderId) {
      setSubheaderId(refinedId);
    }
  }, [setSubheaderId, refinedId]);

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        listSubheaderRootVariants({
          color: refinedColor,
          variant,
          isTailwind4: isTailwindVersion4(),
          instanceColor: color,
          sticky,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      id: refinedId,
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    children,
  );
}

export const ListSubheader = forwardRef(ListSubheaderRoot) as <
  T extends ReactTags = 'div',
>(
  props: ListSubheaderRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: listSubheaderRootVariants,
    variants: {
      color: [undefined, 'primary', 'neutral', 'danger', 'success', 'warning'],
      variant: [undefined, 'solid', 'soft', 'outlined', 'plain'],
      isTailwind4: [false, true],
      instanceColor: [
        undefined,
        'primary',
        'neutral',
        'danger',
        'success',
        'warning',
      ],
      sticky: [false, true],
    },
  },
];
