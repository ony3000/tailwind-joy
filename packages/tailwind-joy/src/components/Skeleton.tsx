import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef } from 'react';
import {
  forwardRef,
  createElement,
  cloneElement,
  isValidElement,
  Children,
  useMemo,
} from 'react';
import type {
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { r, twMerge } from '../base/alias';
import { addPrefix, toVariableClass } from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens, colorTokens } from '../base/tokens';
import { excludeClassName } from '../base/utils';
import type { TypographyLevel } from './Typography';

function skeletonRootVariants(props?: {
  animation?: 'pulse' | 'wave' | false;
  hasHeight?: boolean;
  hasWidth?: boolean;
  level?: TypographyLevel;
  variant?: 'circular' | 'inline' | 'overlay' | 'rectangular' | 'text';
}) {
  const {
    animation = 'pulse',
    hasHeight = false,
    hasWidth = false,
    level = props?.variant === 'text' ? 'body-md' : 'inherit',
    variant = 'overlay',
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-skeleton-root group/tj-skeleton',
      animation === 'pulse' &&
        variant !== 'inline' && [
          addPrefix(
            clsx(['animate-joy-pulse', colorTokens.background.level3]),
            'before:',
          ),
        ],
      animation === 'pulse' &&
        variant === 'inline' && [
          addPrefix(
            clsx(['animate-joy-pulse', colorTokens.background.level3]),
            'after:',
          ),
        ],
      animation === 'wave' && [
        '[-webkit-mask-image:-webkit-radial-gradient(white,black)]',
        colorTokens.background.level3,
        addPrefix(
          clsx([
            'content-["_"]',
            'absolute',
            'inset-0',
            r`z-[var(--unstable\_pseudo-zIndex)]`,
            'animate-joy-wave',
            [
              'bg-gradient-to-r',
              'from-transparent',
              r`via-[var(--unstable\_wave-bg,rgba(0_0_0/0.08))]`,
              'to-transparent',
            ],
            '-translate-x-full',
          ]),
          'after:',
        ),
      ],
      'block',
      'relative',
      '[--unstable_pseudo-zIndex:9]',
      toVariableClass(baseTokens.background.level1, 'unstable_pulse-bg'),
      'overflow-hidden',
      'cursor-default',
      'text-transparent',
      '[&_*]:invisible',
      addPrefix(
        clsx([
          'block',
          'content-["_"]',
          'inset-0',
          r`z-[var(--unstable\_pseudo-zIndex)]`,
          'rounded-[inherit]',
        ]),
        'before:',
      ),
      'dark:[--unstable_wave-bg:rgba(255_255_255/0.1)]',
      variant === 'rectangular' && [
        'rounded-[min(0.15em,6px)]',
        'h-auto',
        'w-full',
        'before:absolute',
        !animation && colorTokens.background.level3,
        level !== 'inherit' && theme.typography[level].className,
      ],
      variant === 'circular' && [
        'rounded-full',
        'w-full',
        'h-full',
        'before:absolute',
        !animation && colorTokens.background.level3,
        level !== 'inherit' && theme.typography[level].className,
      ],
      variant === 'text' && [
        'rounded-[min(0.15em,6px)]',
        'bg-transparent',
        'w-full',
        level !== 'inherit' && [
          theme.typography[level].className,
          `[padding-block-start:calc((${theme.typography[level].values.lineHeight}-1)*0.56em)]`,
          `[padding-block-end:calc((${theme.typography[level].values.lineHeight}-1)*0.44em)]`,
          addPrefix(
            clsx([
              'h-[1em]',
              theme.typography[level].className,
              animation === 'wave' && colorTokens.background.level3,
              !animation && colorTokens.background.level3,
            ]),
            'before:',
          ),
          addPrefix(
            clsx([
              'h-[1em]',
              `top-[calc((${theme.typography[level].values.lineHeight}-1)*0.56em)]`,
              theme.typography[level].className,
            ]),
            'after:',
          ),
        ],
      ],
      variant === 'inline' && [
        'inline',
        '[position:initial]',
        'rounded-[min(0.15em,6px)]',
        !animation && colorTokens.background.level3,
        level !== 'inherit' && theme.typography[level].className,
        '[-webkit-mask-image:-webkit-radial-gradient(white,black)]',
        addPrefix(
          clsx([
            'absolute',
            r`z-[var(--unstable\_pseudo-zIndex)]`,
            colorTokens.background.level3,
          ]),
          'before:',
        ),
        animation === 'pulse' && [
          addPrefix(
            clsx([
              'content-[""]',
              'absolute',
              'inset-0',
              r`z-[var(--unstable\_pseudo-zIndex)]`,
              colorTokens.background.level3,
            ]),
            'after:',
          ),
        ],
      ],
      variant === 'overlay' && [
        'rounded-[2px]',
        'absolute',
        'w-full',
        'h-full',
        r`z-[var(--unstable\_pseudo-zIndex)]`,
        animation === 'pulse' && colorTokens.background.surface,
        level !== 'inherit' && theme.typography[level].className,
        'before:absolute',
      ],
      hasWidth && 'w-[var(--tj-Skeleton-width)]',
      hasHeight && 'h-[var(--tj-Skeleton-height)]',
    ]),
  );
}

type SkeletonRootVariants = {
  animation?: 'pulse' | 'wave' | false;
  height?: number | string;
  level?: TypographyLevel;
  loading?: boolean;
  variant?: 'circular' | 'inline' | 'overlay' | 'rectangular' | 'text';
  width?: number | string;
} & {
  slotProps?: {
    root?: ComponentProps<'span'>;
  };
};

type SkeletonRootProps<T> = GenericComponentPropsWithVariants<
  'span',
  SkeletonRootVariants,
  T
>;

function SkeletonRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- non-passing props ----
    // non-base variants
    animation = 'pulse',
    className,
    height,
    level,
    loading = true,
    style,
    variant = 'overlay',
    width,

    // slot props
    slotProps = {},

    // others
    component = 'span',
    children,
    ...otherProps
    // ---------------------------
  }: SkeletonRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const instanceLevel = level ?? (variant === 'text' ? 'body-md' : 'inherit');

  return loading ? (
    createElement(
      component,
      {
        ref,
        className: twMerge(
          skeletonRootVariants({
            animation,
            hasHeight: height !== undefined,
            hasWidth: width !== undefined,
            level: instanceLevel,
            variant,
          }),
          className,
          slotProps.root?.className ?? '',
        ),
        style: {
          ...style,
          ...(height === undefined
            ? {}
            : {
                '--tj-Skeleton-height':
                  typeof height === 'number' ? `${height}px` : height,
              }),
          ...(width === undefined
            ? {}
            : {
                '--tj-Skeleton-width':
                  typeof width === 'number' ? `${width}px` : width,
              }),
        },
        ...otherProps,
        ...(slotPropsWithoutClassName.root ?? {}),
      },
      children,
    )
  ) : (
    <>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        return cloneElement(child, {
          // @ts-expect-error
          'data-first-child': index === 0 ? '' : undefined,
        });
      })}
    </>
  );
}

export const Skeleton = forwardRef(SkeletonRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: SkeletonRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: skeletonRootVariants,
    variants: {
      animation: ['pulse', 'wave', false],
      hasHeight: [false, true],
      hasWidth: [false, true],
      level: [
        'h1',
        'h2',
        'h3',
        'h4',
        'title-lg',
        'title-md',
        'title-sm',
        'body-lg',
        'body-md',
        'body-sm',
        'body-xs',
        'inherit',
      ],
      variant: ['circular', 'inline', 'overlay', 'rectangular', 'text'],
    },
  },
];
