import type { ComponentProps } from 'react';
import { isValidElement } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { baseTokens } from '../base/tokens';

const childrenPlaceholderVariants = (props?: BaseVariants) => {
  return 'contents';
};

const iconAdapterRootVariants = (
  props?: Pick<BaseVariants, 'color' | 'size'>,
) => {
  const { color = 'neutral', size = 'md' } = props ?? {};

  return twMerge(
    clsx([
      'tj-icon-adapter-root',
      'select-none',
      'm-[var(--Icon-margin)]',
      'w-[1em]',
      'h-[1em]',
      'inline-block',
      'shrink-0',
      size === 'sm' && '[font-size:var(--Icon-fontSize,1.25rem)]',
      size === 'md' && '[font-size:var(--Icon-fontSize,1.5rem)]',
      size === 'lg' && '[font-size:var(--Icon-fontSize,1.875rem)]',
      baseTokens[color].mainChannel.replace(
        /(joy-[a-z0-9]+-[a-z0-9]+)/g,
        '[color:var(--Icon-color,var(--$1))]',
      ),
    ]),
  );
};

interface IconAdapterRootVariants
  extends Pick<BaseVariants, 'color' | 'size'> {}

type IconAdapterRootProps = Pick<ComponentProps<'svg'>, 'children'> &
  IconAdapterRootVariants;

/**
 * @deprecated
 */
export function IconAdapter({
  children,
  color = 'neutral',
  size = 'md',
}: IconAdapterRootProps) {
  if (!isValidElement(children)) {
    return <span className={childrenPlaceholderVariants()}>{children}</span>;
  }

  if (
    typeof children.type === 'symbol' &&
    String(children.type) === 'Symbol(react.fragment)'
  ) {
    if (!isValidElement(children.props.children)) {
      return <span className={childrenPlaceholderVariants()}>{children}</span>;
    }

    return (
      <IconAdapter color={color} size={size}>
        {children.props.children}
      </IconAdapter>
    );
  }

  return Object.assign({}, children, {
    props: {
      ...(children.props ?? {}),
      className: twMerge(
        iconAdapterRootVariants({ color, size }),
        children.props.className ?? '',
      ),
    },
  });
}

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: childrenPlaceholderVariants,
    variants: {},
  },
  {
    generatorFn: iconAdapterRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
    },
  },
];
