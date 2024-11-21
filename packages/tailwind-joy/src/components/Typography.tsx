import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import {
  createContext,
  forwardRef,
  createElement,
  cloneElement,
  isValidElement,
  useContext,
  useMemo,
} from 'react';
import { twMerge } from '../base/alias';
import { theme } from '../base/theme';
import { baseTokens } from '../base/tokens';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '../base/types';
import { excludeClassName } from '../base/utils';

export type TypographyLevel =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'body-xs'
  | 'inherit';

export const TypographyNestedContext = createContext(false);

const defaultLevelMapping: Record<
  TypographyLevel,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'title-lg': 'p',
  'title-md': 'p',
  'title-sm': 'p',
  'body-lg': 'p',
  'body-md': 'p',
  'body-sm': 'p',
  'body-xs': 'span',
  inherit: 'p',
};

function typographyStartDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-typography-start-decorator',
      'inline-flex',
      'me-[clamp(4px,var(--Typography-gap,0.375em),0.75rem)]',
    ]),
  );
}

function typographyEndDecoratorVariants() {
  return twMerge(
    clsx([
      'tj-typography-end-decorator',
      'inline-flex',
      'ms-[clamp(4px,var(--Typography-gap,0.375em),0.75rem)]',
    ]),
  );
}

function typographyRootVariants(
  props?: Pick<BaseVariants, 'color' | 'variant'> & {
    gutterBottom?: boolean;
    hasEndDecorator?: boolean;
    hasSkeleton?: boolean;
    hasStartDecorator?: boolean;
    level?: TypographyLevel;
    nesting?: boolean;
    noWrap?: boolean;
  },
) {
  const {
    color,
    variant,
    gutterBottom = false,
    hasEndDecorator = false,
    hasSkeleton = false,
    hasStartDecorator = false,
    level = 'body-md',
    nesting = false,
    noWrap = false,
  } = props ?? {};
  const lineHeight =
    level !== 'inherit' ? theme.typography[level].values.lineHeight : '1';

  return twMerge(
    clsx([
      'tj-typography-root group/tj-typography',
      `[--Icon-fontSize:calc(1em*${lineHeight})]`,
      color && '[--Icon-color:currentColor]',
      'm-[var(--Typography-margin,0px)]',
      nesting ? 'inline' : ['block', hasSkeleton && 'relative'],
      (hasStartDecorator || hasEndDecorator) && [
        'flex',
        'items-center',
        nesting && ['inline-flex', hasStartDecorator && 'align-bottom'],
      ],
      level !== 'inherit' && theme.typography[level].className,
      level !== 'inherit'
        ? `text-[length:var(--Typography-fontSize,${theme.typography[level].values.fontSize})]`
        : 'text-[length:var(--Typography-fontSize,inherit)]',
      noWrap && 'truncate',
      gutterBottom && 'mb-[0.35em]',
      color &&
        baseTokens[color].mainChannel.replace(
          /(joy-[a-z0-9]+-[a-z0-9]+)/g,
          'text-[var(--variant-plainColor,var(--$1))]',
        ),
      variant && [
        'rounded-[2px]',
        '[padding-block:min(0.1em,4px)]',
        'ps-[0.25em] pe-[0.25em]',
        !nesting && 'ms-[-0.25em] me-[-0.25em]',
        color && theme.variants[variant][color].className,
      ],
    ]),
  );
}

type TypographyRootVariants = Pick<BaseVariants, 'color' | 'variant'> & {
  endDecorator?: ReactNode;
  gutterBottom?: boolean;
  level?: TypographyLevel;
  levelMapping?: Partial<Record<TypographyLevel, keyof JSX.IntrinsicElements>>;
  noWrap?: boolean;
  startDecorator?: ReactNode;
  textColor?: string;
} & {
  slotProps?: {
    root?: ComponentProps<'a'>;
    startDecorator?: ComponentProps<'span'>;
    endDecorator?: ComponentProps<'span'>;
  };
};

type TypographyRootProps<T> = GenericComponentPropsWithVariants<
  'span',
  TypographyRootVariants,
  T
>;

function TypographyRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- non-passing props ----
    // base variants
    color,
    variant,

    // non-base variants
    className,
    endDecorator,
    gutterBottom = false,
    level,
    levelMapping = defaultLevelMapping,
    noWrap = false,
    startDecorator,
    style,
    textColor,

    // slot props
    slotProps = {},

    // others
    component,
    children,
    ...otherProps
    // ---------------------------
  }: TypographyRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const nesting = useContext(TypographyNestedContext);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const instanceColor = variant ? (color ?? 'neutral') : color;

  const instanceLevel = nesting ? level || 'inherit' : level || 'body-md';

  const hasSkeleton =
    isValidElement(children) &&
    // @ts-expect-error
    children.type.internalName === 'TJSkeleton';

  const instanceComponent =
    component ||
    (nesting
      ? 'span'
      : levelMapping[instanceLevel] ||
        defaultLevelMapping[instanceLevel] ||
        'span');

  return (
    <TypographyNestedContext.Provider value>
      {createElement(
        instanceComponent,
        {
          ref,
          className: twMerge(
            typographyRootVariants({
              color: instanceColor,
              variant,
              gutterBottom,
              hasEndDecorator: Boolean(endDecorator),
              hasSkeleton,
              hasStartDecorator: Boolean(startDecorator),
              level: instanceLevel,
              nesting,
              noWrap,
            }),
            className,
            slotProps.root?.className ?? '',
          ),
          style: {
            ...style,
            ...(textColor === undefined
              ? {}
              : {
                  color: textColor,
                }),
          },
          ...otherProps,
          ...(slotPropsWithoutClassName.root ?? {}),
        },
        <>
          {startDecorator && (
            <span
              className={twMerge(
                typographyStartDecoratorVariants(),
                slotProps.startDecorator?.className ?? '',
              )}
              {...(slotPropsWithoutClassName.startDecorator ?? {})}
            >
              {startDecorator}
            </span>
          )}
          {hasSkeleton
            ? cloneElement(children as JSX.Element, {
                variant: (children as JSX.Element).props.variant || 'inline',
              })
            : children}
          {endDecorator && (
            <span
              className={twMerge(
                typographyEndDecoratorVariants(),
                slotProps.endDecorator?.className ?? '',
              )}
              {...(slotPropsWithoutClassName.endDecorator ?? {})}
            >
              {endDecorator}
            </span>
          )}
        </>,
      )}
    </TypographyNestedContext.Provider>
  );
}

export const Typography = forwardRef(TypographyRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: TypographyRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: typographyStartDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: typographyEndDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: typographyRootVariants,
    variants: {
      color: [undefined, 'primary', 'neutral', 'danger', 'success', 'warning'],
      variant: [undefined, 'solid', 'soft', 'outlined', 'plain'],
      gutterBottom: [false, true],
      hasEndDecorator: [false, true],
      hasSkeleton: [false, true],
      hasStartDecorator: [false, true],
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
      nesting: [false, true],
      noWrap: [false, true],
    },
  },
];
