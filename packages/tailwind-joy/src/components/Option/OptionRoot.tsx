import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { useRef, useContext, useMemo } from 'react';
import { twMerge } from '../../base/alias';
import { addPrefix, backgroundColor } from '../../base/modifier';
import { theme } from '../../base/theme';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
} from '../../base/types';
import { excludeClassName } from '../../base/utils';
// import { RowListContext } from '../List';
import { ListItemButton } from '../ListItemButton';
import { ListContext } from './ListContext';

const defaultTag = 'li';
export type DefaultTag = typeof defaultTag;

type RequiredProps = {
  value: any;
};

type OptionalProps = {
  color?: BaseVariants['color'];
  disabled?: boolean;
  label?: string | JSX.Element;
  slotProps?: {
    root?: ComponentProps<DefaultTag>;
  };
  variant?: BaseVariants['variant'];
};

/**
 * Properties that are always defined, regardless of the value of `component`.
 */
type StaticProps = RequiredProps & OptionalProps;

export type OptionRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  StaticProps
> &
  StaticProps;

export function optionRootVariants(
  props?: Pick<StaticProps, 'color' | 'variant'> & {
    highlighted?: boolean;
  },
) {
  const {
    color = 'neutral',
    highlighted = false,
    variant = 'plain',
  } = props ?? {};

  return twMerge(
    clsx([
      highlighted &&
        addPrefix(
          backgroundColor(
            theme.variants[`${variant}Hover`][color].tokens.backgroundColor,
          ),
          '[&:not([aria-selected="true"])]:',
        ),
    ]),
  );
}

export function OptionRoot<T extends ReactTags = DefaultTag>({
  // ---- non-passing props ----
  value,
  color = 'neutral',
  component = defaultTag,
  disabled = false,
  label,
  slotProps = {},
  variant = 'plain',

  // others
  children,
  className,
  ...otherProps
  // ---------------------------
}: OptionRootProps<T>) {
  const listContext = useContext(ListContext);
  // const row = useContext(RowListContext);
  const optionRef = useRef<HTMLLIElement>(null);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  // const computedLabel =
  //   label ??
  //   (typeof children === 'string' ? children : optionRef.current?.innerText);

  if (!listContext) {
    throw new Error('Option: ListContext was not found.');
  }

  const { getItemState, dispatch } = listContext;
  const { focusable, highlighted, selected } = getItemState(value);

  return (
    <ListContext.Provider
      value={{
        dispatch,
        getItemState: () => ({
          focusable,
          highlighted,
          selected,
        }),
      }}
    >
      {/* @ts-expect-error */}
      <ListItemButton
        component={component}
        ref={optionRef}
        className={twMerge(
          'tj-option-root group/tj-option',
          optionRootVariants({
            color,
            highlighted,
            variant,
          }),
          slotProps.root?.className ?? '',
        )}
        {...otherProps}
        {...(slotPropsWithoutClassName.root ?? {})}
      >
        {children}
      </ListItemButton>
    </ListContext.Provider>
  );
}
