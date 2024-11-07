import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, createElement, useMemo } from 'react';
import type {
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { r, twMerge } from '../base/alias';
import { addPrefix } from '../base/modifier';
import { colorTokens } from '../base/tokens';
import { excludeClassName } from '../base/utils';

function dividerRootVariants(props?: {
  hasChildren?: boolean;
  inset?: 'none' | 'context';
  orientation?: 'horizontal' | 'vertical';
}) {
  const {
    hasChildren = false,
    inset = 'none',
    orientation = 'horizontal',
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-divider-root group/tj-divider',
      '[--Divider-thickness:1px]',
      '[--Divider-lineColor:color-mix(in_srgb,var(--joy-neutral-500)_20%,transparent)]',
      'dark:[--Divider-lineColor:color-mix(in_srgb,var(--joy-neutral-500)_16%,transparent)]',
      inset === 'none'
        ? '[--_Divider-inset:0px]'
        : '[--_Divider-inset:var(--Divider-inset,0px)]',
      '[margin:initial]',
      orientation === 'vertical'
        ? ['[margin-inline:initial]', r`[margin-block:var(--\_Divider-inset)]`]
        : [r`[margin-inline:var(--\_Divider-inset)]`, '[margin-block:initial]'],
      'relative',
      'self-stretch',
      'shrink-0',
      hasChildren
        ? [
            '[--Divider-gap:8px]',
            '[--Divider-childPosition:50%]',
            'flex',
            orientation === 'vertical' ? 'flex-col' : 'flex-row',
            'items-center',
            'whitespace-nowrap',
            'text-center',
            'border-0',
            ['text-[0.875rem]', 'leading-normal', colorTokens.text.tertiary],
            addPrefix(
              clsx([
                'relative',
                orientation === 'vertical'
                  ? [
                      '[inline-size:var(--Divider-thickness)]',
                      '[block-size:initial]',
                    ]
                  : [
                      '[inline-size:initial]',
                      '[block-size:var(--Divider-thickness)]',
                    ],
                'bg-[var(--Divider-lineColor)]',
                'content-[""]',
                orientation === 'vertical'
                  ? [
                      '[margin-inline-end:initial]',
                      '[margin-block-end:min(var(--Divider-childPosition)*999,var(--Divider-gap))]',
                    ]
                  : [
                      '[margin-inline-end:min(var(--Divider-childPosition)*999,var(--Divider-gap))]',
                      '[margin-block-end:initial]',
                    ],
                'basis-[var(--Divider-childPosition)]',
              ]),
              'before:',
            ),
            addPrefix(
              clsx([
                'relative',
                orientation === 'vertical'
                  ? [
                      '[inline-size:var(--Divider-thickness)]',
                      '[block-size:initial]',
                    ]
                  : [
                      '[inline-size:initial]',
                      '[block-size:var(--Divider-thickness)]',
                    ],
                'bg-[var(--Divider-lineColor)]',
                'content-[""]',
                orientation === 'vertical'
                  ? [
                      '[margin-inline-start:initial]',
                      '[margin-block-start:min((100%-var(--Divider-childPosition))*999,var(--Divider-gap))]',
                    ]
                  : [
                      '[margin-inline-start:min((100%-var(--Divider-childPosition))*999,var(--Divider-gap))]',
                      '[margin-block-start:initial]',
                    ],
                'basis-[calc(100%-var(--Divider-childPosition))]',
              ]),
              'after:',
            ),
          ]
        : [
            'border-none',
            'list-none',
            'bg-[var(--Divider-lineColor)]',
            orientation === 'vertical'
              ? [
                  '[inline-size:var(--Divider-thickness)]',
                  '[block-size:initial]',
                ]
              : [
                  '[inline-size:initial]',
                  '[block-size:var(--Divider-thickness)]',
                ],
          ],
    ]),
  );
}

type DividerRootVariants = {
  inset?: 'none' | 'context';
  orientation?: 'horizontal' | 'vertical';
} & {
  slotProps?: {
    root?: ComponentProps<'hr'>;
  };
};

type DividerRootProps<T> = GenericComponentPropsWithVariants<
  'hr',
  DividerRootVariants,
  T
>;

function DividerRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- non-passing props ----
    // non-base variants
    className,
    inset = 'none',
    orientation = 'horizontal',

    // slot props
    slotProps = {},

    // others
    component,
    children,
    ...otherProps
    // ---------------------------
  }: DividerRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const hasChildren = children !== undefined && children !== null;

  return createElement(
    component ?? (hasChildren ? 'div' : 'hr'),
    {
      ref,
      className: twMerge(
        dividerRootVariants({
          hasChildren,
          inset,
          orientation,
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

export const Divider = forwardRef(DividerRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: DividerRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: dividerRootVariants,
    variants: {
      hasChildren: [false, true],
      inset: ['none', 'context'],
      orientation: ['horizontal', 'vertical'],
    },
  },
];
