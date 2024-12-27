import type { ComponentProps } from 'react';

export type ReactTags = keyof JSX.IntrinsicElements;

export type DynamicComponentProps<T extends ReactTags> = {
  component?: T;
} & ComponentProps<T>;

export type Difference<T extends {}, U extends {}> = Omit<T, keyof U>;

export type BaseVariants = {
  color?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'soft' | 'outlined' | 'plain';
};

export type GeneratorInput = {
  generatorFn: (props?: Record<string, unknown>) => string;
  variants: Record<string, (string | boolean | undefined)[]>;
};
