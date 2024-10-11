import type { ComponentProps } from 'react';

export type ComponentPropsWithVariants<
  T extends keyof JSX.IntrinsicElements,
  V extends {},
> = Omit<ComponentProps<T>, keyof V> & V;

export type GenericComponentPropsWithVariants<
  D extends keyof JSX.IntrinsicElements,
  V extends {},
  T,
> = {
  component?: T;
} & (T extends undefined
  ? ComponentPropsWithVariants<D, V>
  : T extends keyof JSX.IntrinsicElements
    ? ComponentPropsWithVariants<T, V>
    : ComponentPropsWithVariants<D, V>);

export type BaseVariants = {
  color?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'soft' | 'outlined' | 'plain';
};

export type GeneratorInput = {
  generatorFn: (props?: Record<string, any>) => string;
  variants: Record<string, (string | boolean | undefined)[]>;
};
