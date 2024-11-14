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
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { twMerge } from '../base/alias';
import { addPrefix, toVariableClass } from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens } from '../base/tokens';
import { excludeClassName } from '../base/utils';

type AspectRatioObjectFit =
  | '-moz-initial'
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inherit'
  | 'initial'
  | 'none'
  | 'revert-layer'
  | 'revert'
  | 'scale-down'
  | 'unset';

function aspectRatioRootVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    flex?: boolean;
  },
) {
  const { color = 'neutral', variant = 'soft', flex = false } = props ?? {};

  return twMerge(
    clsx([
      'tj-aspect-ratio-root group/tj-aspect-ratio',
      '[--AspectRatio-paddingBottom:clamp(var(--AspectRatio-minHeight),calc(100%/(var(--tj-AspectRatio-ratio))),var(--AspectRatio-maxHeight))]',
      '[--AspectRatio-maxHeight:var(--tj-AspectRatio-maxHeight)]',
      '[--AspectRatio-minHeight:var(--tj-AspectRatio-minHeight)]',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      'rounded-[var(--AspectRatio-radius)]',
      flex ? 'flex' : 'block',
      flex ? 'flex-1' : 'flex-[initial]',
      'flex-col',
      'm-[var(--AspectRatio-margin)]',
    ]),
  );
}

function aspectRatioContentVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'>,
) {
  const { color = 'neutral', variant = 'soft' } = props ?? {};

  return twMerge(
    clsx([
      'tj-aspect-ratio-content',
      'flex-1',
      'relative',
      'rounded-[inherit]',
      'h-0',
      'pb-[calc(var(--AspectRatio-paddingBottom)-2*var(--variant-borderWidth,0px))]',
      'overflow-hidden',
      '[transition:inherit]',
      addPrefix(
        clsx([
          'flex',
          'justify-center',
          'items-center',
          'box-border',
          'absolute',
          'w-full',
          'h-full',
          '[object-fit:var(--tj-AspectRatio-objectFit)]',
          'm-0',
          'p-0',
          addPrefix(
            clsx([
              'w-full',
              'h-full',
              '[object-fit:var(--tj-AspectRatio-objectFit)]',
            ]),
            '[&>img]:',
          ),
        ]),
        '[&_[data-first-child]]:',
      ),
      theme.typography['body-md'].className,
      theme.variants[variant][color].className,
    ]),
  );
}

type AspectRatioRootVariants = Pick<BaseVariants, 'color' | 'variant'> & {
  flex?: boolean;
  maxHeight?: number | string;
  minHeight?: number | string;
  objectFit?: AspectRatioObjectFit;
  ratio?: number | string;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
    content?: ComponentProps<'div'>;
  };
};

type AspectRatioRootProps<T> = GenericComponentPropsWithVariants<
  'div',
  AspectRatioRootVariants,
  T
>;

function AspectRatioRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- non-passing props ----
    // base variants
    color = 'neutral',
    variant = 'soft',

    // non-base variants
    className,
    flex = false,
    maxHeight,
    minHeight,
    objectFit = 'cover',
    ratio = '16/9',
    style,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: AspectRatioRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        aspectRatioRootVariants({
          color,
          variant,
          flex,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      style: {
        ...style,
        ...(maxHeight === undefined
          ? {
              '--tj-AspectRatio-maxHeight': '9999px',
            }
          : {
              '--tj-AspectRatio-maxHeight':
                typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
            }),
        ...(minHeight === undefined
          ? {
              '--tj-AspectRatio-minHeight': '0px',
            }
          : {
              '--tj-AspectRatio-minHeight':
                typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
            }),
        '--tj-AspectRatio-objectFit': objectFit,
        '--tj-AspectRatio-ratio': ratio,
      },
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    <div
      className={twMerge(
        aspectRatioContentVariants({
          color,
          variant,
        }),
        slotProps.content?.className ?? '',
      )}
      {...(slotPropsWithoutClassName.content ?? {})}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        return cloneElement(child, {
          // @ts-expect-error
          'data-first-child': index === 0 ? '' : undefined,
        });
      })}
    </div>,
  );
}

export const AspectRatio = forwardRef(AspectRatioRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: AspectRatioRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: aspectRatioRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
      flex: [false, true],
    },
  },
  {
    generatorFn: aspectRatioContentVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
    },
  },
];
