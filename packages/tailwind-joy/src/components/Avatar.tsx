import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import {
  forwardRef,
  createElement,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { MdPerson } from 'react-icons/md';
import { twMerge } from '../base/alias';
import { toVariableClass } from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens } from '../base/tokens';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { excludeClassName } from '../base/utils';
import { AvatarGroupContext } from './AvatarGroup';
import { iconClassVariants } from './internal/class-adapter';

type PassingProps = Pick<ComponentProps<'img'>, 'alt' | 'src' | 'srcSet'>;

function avatarRootVariants(props?: BaseVariants) {
  const { color = 'neutral', size = 'md', variant = 'soft' } = props ?? {};

  return twMerge(
    clsx([
      'tj-avatar-root group/tj-avatar',
      color !== 'neutral' || variant === 'solid'
        ? '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]'
        : toVariableClass(baseTokens.text.icon, 'Icon-color'),
      theme.typography[`title-${size}`].className,
      size === 'sm' && [
        'w-[var(--Avatar-size,2rem)]',
        'h-[var(--Avatar-size,2rem)]',
        'text-[length:calc(var(--Avatar-size,2rem)*0.4375)]',
      ],
      size === 'md' && [
        'w-[var(--Avatar-size,2.5rem)]',
        'h-[var(--Avatar-size,2.5rem)]',
        'text-[length:calc(var(--Avatar-size,2.5rem)*0.4)]',
      ],
      size === 'lg' && [
        'w-[var(--Avatar-size,3rem)]',
        'h-[var(--Avatar-size,3rem)]',
        'text-[length:calc(var(--Avatar-size,3rem)*0.375)]',
      ],
      'ms-[var(--Avatar-marginInlineStart)]',
      '[box-shadow:var(--Avatar-ring)]',
      'relative',
      'flex',
      'items-center',
      'justify-center',
      'shrink-0',
      'leading-none',
      'overflow-hidden',
      'rounded-[var(--Avatar-radius,50%)]',
      'select-none',
      theme.variants[variant][color].className,
    ]),
  );
}

function avatarImageVariants() {
  return twMerge(
    clsx([
      'tj-avatar-image',
      'w-full',
      'h-full',
      'text-center',
      'object-cover',
      'text-transparent',
      'indent-[10000px]',
    ]),
  );
}

function avatarFallbackVariants() {
  return twMerge(clsx(['tj-avatar-fallback', 'w-[64%]', 'h-[64%]']));
}

type UseLoadedProps = {
  src?: string;
  srcSet?: string;
};

function useLoaded({ src, srcSet }: UseLoadedProps): string | boolean {
  const [loaded, setLoaded] = useState<string | boolean>(false);

  useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);

    let isActive = true;
    const image = new Image();

    image.onload = () => {
      if (!isActive) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!isActive) {
        return;
      }
      setLoaded('error');
    };

    if (src) {
      image.src = src;
    }
    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      isActive = false;
    };
  }, [src, srcSet]);

  return loaded;
}

type AvatarRootVariants = BaseVariants & {
  // NOTE: There are no non-base variants yet.
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
    img?: ComponentProps<'img'>;
    fallback?: ComponentProps<'svg'>;
  };
} & PassingProps;

type AvatarRootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  AvatarRootVariants
> &
  AvatarRootVariants;

function AvatarRoot<T extends ReactTags = 'div'>(
  {
    // ---- passing props ----
    alt,
    src,
    srcSet,
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color,
    size,
    variant,

    // non-base variants
    className,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: AvatarRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const avatarGroup = useContext(AvatarGroupContext);
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const loaded = useLoaded({ src, srcSet });

  const refinedColor = color ?? avatarGroup.color ?? 'neutral';
  const refinedSize = size ?? avatarGroup.size ?? 'md';
  const refinedVariant = variant ?? avatarGroup.variant ?? 'soft';
  let refinedChildren: ReactNode = null;

  const hasImage = Boolean(src || srcSet);

  if (hasImage && loaded !== 'error') {
    refinedChildren = (
      <img
        className={twMerge(
          avatarImageVariants(),
          slotProps.img?.className ?? '',
        )}
        {...{
          alt,
          src,
          srcSet,
        }}
        {...(slotPropsWithoutClassName.img ?? {})}
      />
    );
  } else if (children !== null && children !== undefined) {
    refinedChildren = children;
  } else if (alt) {
    refinedChildren = alt[0];
  } else {
    refinedChildren = (
      <MdPerson
        className={twMerge(
          iconClassVariants({ color: refinedColor }),
          avatarFallbackVariants(),
          slotProps.fallback?.className ?? '',
        )}
        {...(slotPropsWithoutClassName.fallback ?? {})}
      />
    );
  }

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        avatarRootVariants({
          color: refinedColor,
          size: refinedSize,
          variant: refinedVariant,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    refinedChildren,
  );
}

export const Avatar = forwardRef(AvatarRoot) as <T extends ReactTags = 'div'>(
  props: AvatarRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: avatarRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
    },
  },
  {
    generatorFn: avatarImageVariants,
    variants: {},
  },
  {
    generatorFn: avatarFallbackVariants,
    variants: {},
  },
];
