import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { GeneratorInput } from '@/base/types';
import { r } from '../base/alias';
import { join, addPrefix } from '../base/modifier';
import { colorTokens } from '../base/tokens';

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
            'text-[0.875rem]',
            'leading-normal',
            colorTokens.text.tertiary,
            addPrefix(
              join([
                'relative',
                join(
                  orientation === 'vertical'
                    ? [
                        '[inline-size:var(--Divider-thickness)]',
                        '[block-size:initial]',
                      ]
                    : [
                        '[inline-size:initial]',
                        '[block-size:var(--Divider-thickness)]',
                      ],
                ),
                'bg-[var(--Divider-lineColor)]',
                'content-[""]',
                join(
                  orientation === 'vertical'
                    ? [
                        '[margin-inline-end:initial]',
                        '[margin-block-end:min(var(--Divider-childPosition)*999,var(--Divider-gap))]',
                      ]
                    : [
                        '[margin-inline-end:min(var(--Divider-childPosition)*999,var(--Divider-gap))]',
                        '[margin-block-end:initial]',
                      ],
                ),
                'basis-[var(--Divider-childPosition)]',
              ]),
              'before:',
            ),
            addPrefix(
              join([
                'relative',
                join(
                  orientation === 'vertical'
                    ? [
                        '[inline-size:var(--Divider-thickness)]',
                        '[block-size:initial]',
                      ]
                    : [
                        '[inline-size:initial]',
                        '[block-size:var(--Divider-thickness)]',
                      ],
                ),
                'bg-[var(--Divider-lineColor)]',
                'content-[""]',
                join(
                  orientation === 'vertical'
                    ? [
                        '[margin-inline-start:initial]',
                        '[margin-block-start:min((100%-var(--Divider-childPosition))*999,var(--Divider-gap))]',
                      ]
                    : [
                        '[margin-inline-start:min((100%-var(--Divider-childPosition))*999,var(--Divider-gap))]',
                        '[margin-block-start:initial]',
                      ],
                ),
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

interface DividerRootVariants {
  inset?: 'none' | 'context';
  orientation?: 'horizontal' | 'vertical';
}

type DividerRootProps = Omit<ComponentProps<'hr'>, keyof DividerRootVariants> &
  DividerRootVariants;

export const Divider = forwardRef<
  HTMLDivElement | HTMLHRElement,
  DividerRootProps
>(function DividerRoot(
  {
    children,
    className,
    inset = 'none',
    orientation = 'horizontal',
    ...otherProps
  },
  ref,
) {
  const hasChildren = children !== undefined && children !== null;

  return hasChildren ? (
    <div
      ref={ref}
      className={twMerge(
        dividerRootVariants({
          hasChildren,
          inset,
          orientation,
        }),
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  ) : (
    <hr
      // @ts-expect-error
      ref={ref}
      className={twMerge(
        dividerRootVariants({
          hasChildren,
          inset,
          orientation,
        }),
        className,
      )}
      {...otherProps}
    >
      {children}
    </hr>
  );
});

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
