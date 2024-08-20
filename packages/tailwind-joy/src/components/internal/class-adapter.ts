import type { ReactNode } from 'react';
import { cloneElement, isValidElement } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { baseTokens } from '../../base/tokens';

export function adaptClassName(node: ReactNode, className: string): ReactNode {
  if (!isValidElement(node) || 'children' in node) {
    return node;
  }

  return cloneElement(node, {
    // @ts-expect-error
    className: twMerge(
      // @ts-expect-error
      node.props.className ?? '',
      className,
    ),
  });
}

const iconClassVariants = (props?: Pick<BaseVariants, 'color' | 'size'>) => {
  const { color = 'neutral', size = 'md' } = props ?? {};

  return twMerge(
    clsx([
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

/**
 * A shortcut for the `adaptClassName` function.
 */
export function adaptAsIcon(
  node: ReactNode,
  props?: Pick<BaseVariants, 'color' | 'size'>,
): ReactNode {
  return adaptClassName(node, iconClassVariants(props));
}

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: iconClassVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
    },
  },
];
