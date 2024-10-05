import type { ComponentProps, ReactHTML } from 'react';

type ElementNamesThatHaveTheirOwnPropsAndIsNotSelfClosingElement =
  | 'a'
  | 'audio'
  | 'blockquote'
  | 'button'
  | 'canvas'
  | 'colgroup'
  | 'data'
  | 'del'
  | 'details'
  | 'dialog'
  | 'fieldset'
  | 'form'
  | 'html'
  | 'ins'
  | 'label'
  | 'li'
  | 'map'
  | 'menu'
  | 'meter'
  | 'object'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'progress'
  | 'q'
  | 'slot'
  | 'script'
  | 'select'
  | 'style'
  | 'table'
  | 'td'
  | 'textarea'
  | 'th'
  | 'time'
  | 'video';

export type ComponentPropsWithVariants<
  T extends keyof JSX.IntrinsicElements,
  V extends {},
> = Omit<ComponentProps<T>, keyof V> & V;

type NamedComponentPropsWithVariants<
  T extends keyof ReactHTML,
  V extends {},
> = {
  component: T;
} & ComponentPropsWithVariants<T, V>;

type DistributeWithVariants<
  T extends ElementNamesThatHaveTheirOwnPropsAndIsNotSelfClosingElement,
  V extends {},
> = T extends unknown ? NamedComponentPropsWithVariants<T, V> : never;

export type GenericComponentPropsWithVariants<
  T extends keyof JSX.IntrinsicElements,
  V extends {},
> =
  | ({ component?: never } & ComponentPropsWithVariants<T, V>)
  | DistributeWithVariants<
      ElementNamesThatHaveTheirOwnPropsAndIsNotSelfClosingElement,
      V
    >
  | ({
      component?: Exclude<
        keyof JSX.IntrinsicElements,
        ElementNamesThatHaveTheirOwnPropsAndIsNotSelfClosingElement
      >;
    } & ComponentPropsWithVariants<'div', V>);

export type BaseVariants = {
  color?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'soft' | 'outlined' | 'plain';
};

export type GeneratorInput = {
  generatorFn: (props?: Record<string, any>) => string;
  variants: Record<string, (string | boolean | undefined)[]>;
};
