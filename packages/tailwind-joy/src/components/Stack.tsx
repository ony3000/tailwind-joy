import { clsx } from 'clsx';
import type { ForwardedRef, ReactNode } from 'react';
import { forwardRef, createElement, cloneElement, Children } from 'react';
import { twMerge } from '../base/alias';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '../base/types';

function stackRootVariants(props?: {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  useFlexGap?: boolean;
}) {
  const { direction = 'column', useFlexGap = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-stack-root group/tj-stack',
      'flex',
      direction === 'row' && 'flex-row',
      direction === 'row-reverse' && 'flex-row-reverse',
      direction === 'column' && 'flex-col',
      direction === 'column-reverse' && 'flex-col-reverse',
      useFlexGap
        ? 'gap-[var(--tj-Stack-spacing)]'
        : [
            '[&>:not(style):not(style)]:m-0',
            direction === 'row' &&
              '[&>:not(style)~:not(style)]:ml-[var(--tj-Stack-spacing)]',
            direction === 'row-reverse' &&
              '[&>:not(style)~:not(style)]:mr-[var(--tj-Stack-spacing)]',
            direction === 'column' &&
              '[&>:not(style)~:not(style)]:mt-[var(--tj-Stack-spacing)]',
            direction === 'column-reverse' &&
              '[&>:not(style)~:not(style)]:mb-[var(--tj-Stack-spacing)]',
          ],
    ]),
  );
}

type StackRootVariants = BaseVariants & {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  divider?: ReactNode;
  spacing?: string;
  useFlexGap?: boolean;
};

type StackRootProps<T> = GenericComponentPropsWithVariants<
  'div',
  StackRootVariants,
  T
>;

function StackRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- non-passing props ----
    // non-base variants
    className,
    direction = 'column',
    divider,
    spacing = '0',
    style,
    useFlexGap = false,

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: StackRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  return createElement(
    component,
    {
      ref,
      className: twMerge(
        stackRootVariants({
          direction,
          useFlexGap,
        }),
        className,
      ),
      style: {
        ...style,
        '--tj-Stack-spacing': spacing,
      },
      ...otherProps,
    },
    divider
      ? Children.toArray(children)
          .filter(Boolean)
          .flatMap((child, index) => {
            const output: ReactNode[] = [];

            if (index > 0) {
              output.push(
                cloneElement(divider as JSX.Element, {
                  key: `separator-${index - 1}`,
                }),
              );
            }
            output.push(child);

            return output;
          })
      : children,
  );
}

export const Stack = forwardRef(StackRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: StackRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: stackRootVariants,
    variants: {
      direction: ['row', 'row-reverse', 'column', 'column-reverse'],
      useFlexGap: [false, true],
    },
  },
];
