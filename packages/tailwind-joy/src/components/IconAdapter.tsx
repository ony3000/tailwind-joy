import type { ComponentProps } from 'react';
import { isValidElement } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';

const childrenPlaceholderVariants = cva('contents');

const iconAdapterRootVariants = cva(
  [
    'tj-icon-adapter-root',
    'm-[var(--Icon-margin)] inline-block h-[1em] w-[1em] shrink-0 select-none',
  ],
  {
    variants: {
      color: {
        primary:
          '[color:var(--Icon-color,var(--joy-primary-500))] dark:[color:var(--Icon-color,var(--joy-primary-400))]',
        neutral:
          '[color:var(--Icon-color,var(--joy-neutral-500))] dark:[color:var(--Icon-color,var(--joy-neutral-400))]',
        danger:
          '[color:var(--Icon-color,var(--joy-danger-500))] dark:[color:var(--Icon-color,var(--joy-danger-400))]',
        success:
          '[color:var(--Icon-color,var(--joy-success-500))] dark:[color:var(--Icon-color,var(--joy-success-400))]',
        warning:
          '[color:var(--Icon-color,var(--joy-warning-500))] dark:[color:var(--Icon-color,var(--joy-warning-400))]',
      },
      size: {
        sm: '[font-size:var(--Icon-fontSize,1.25rem)]',
        md: '[font-size:var(--Icon-fontSize,1.5rem)]',
        lg: '[font-size:var(--Icon-fontSize,1.875rem)]',
      },
    },
    defaultVariants: {
      color: 'neutral',
      size: 'md',
    },
  },
);

interface IconAdapterRootVariants extends Omit<BaseVariants, 'variant'> {}

type IconAdapterRootProps = Pick<ComponentProps<'svg'>, 'children'> &
  IconAdapterRootVariants;

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
    // @ts-ignore
    children.type.toString() === 'Symbol(react.fragment)'
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
