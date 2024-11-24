import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, createElement, useContext, useMemo } from 'react';
import { MdClose } from 'react-icons/md';
import { twMerge } from '../base/alias';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '../base/types';
import { excludeClassName } from '../base/utils';
import { ChipContext } from './Chip';
import { iconButtonRootVariants } from './IconButton';
import { iconClassVariants } from './internal/class-adapter';

type PassingProps = Pick<ComponentProps<'button'>, 'onClick' | 'onKeyDown'>;

function chipDeleteRootVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'>,
) {
  const { color = 'neutral', variant = 'plain' } = props ?? {};

  return twMerge(
    clsx([
      'tj-chip-delete-root group/tj-chip-delete',
      iconButtonRootVariants({ color, variant }),
      '[--IconButton-size:var(--Chip-deleteSize,2rem)]',
      '[--Icon-fontSize:calc(var(--IconButton-size,2rem)/1.3)]',
      'min-w-[var(--IconButton-size,2rem)]',
      'min-h-[var(--IconButton-size,2rem)]',
      'text-[0.875rem]',
      'ps-[2px] pe-[2px]',
      '[pointer-events:visible]',
      'rounded-[var(--Chip-deleteRadius,50%)]',
      'z-[1]',
      'p-0',
    ]),
  );
}

type ChipDeleteRootVariants = Pick<BaseVariants, 'color' | 'variant'> & {
  disabled?: boolean;
  onDelete?: Function; // need more specific?
} & {
  slotProps?: {
    root?: ComponentProps<'button'>;
  };
} & PassingProps;

type ChipDeleteRootProps<T> = GenericComponentPropsWithVariants<
  'button',
  ChipDeleteRootVariants,
  T
>;

function ChipDeleteRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- passing props ----
    onClick,
    onKeyDown,
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color = 'neutral',
    variant = 'plain',

    // non-base variants
    className,
    disabled,
    onDelete,

    // slot props
    slotProps = {},

    // others
    component = 'button',
    children,
    ...otherProps
    // ---------------------------
  }: ChipDeleteRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const chip = useContext(ChipContext);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const instanceDisabled = disabled ?? chip.disabled;

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        chipDeleteRootVariants({ color, variant }),
        className,
        slotProps.root?.className ?? '',
      ),
      onClick: (e) => {
        if (!instanceDisabled && onDelete) {
          onDelete(e);
        }
        if (onClick) {
          onClick(
            // @ts-expect-error
            e,
          );
        }
      },
      onKeyDown: (e) => {
        if (['Backspace', 'Enter', 'Delete'].includes(e.key)) {
          e.preventDefault();
          if (!instanceDisabled && onDelete) {
            onDelete(e);
          }
        }
        if (onKeyDown) {
          onKeyDown(
            // @ts-expect-error
            e,
          );
        }
      },
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    children ?? <MdClose className={iconClassVariants({ color })} />,
  );
}

export const ChipDelete = forwardRef(ChipDeleteRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: ChipDeleteRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: chipDeleteRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
    },
  },
];
