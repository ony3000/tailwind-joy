import type { ComponentProps, ReactHTML } from 'react';

type ElementNamesThatHaveTheirOwnProps =
  | 'a'
  | 'area'
  | 'audio'
  | 'base'
  | 'blockquote'
  | 'button'
  | 'canvas'
  | 'col'
  | 'colgroup'
  | 'data'
  | 'del'
  | 'details'
  | 'dialog'
  | 'embed'
  | 'fieldset'
  | 'form'
  | 'html'
  | 'iframe'
  | 'img'
  | 'input'
  | 'ins'
  | 'keygen'
  | 'label'
  | 'li'
  | 'link'
  | 'map'
  | 'menu'
  | 'meta'
  | 'meter'
  | 'object'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'param'
  | 'progress'
  | 'q'
  | 'slot'
  | 'script'
  | 'select'
  | 'source'
  | 'style'
  | 'table'
  | 'td'
  | 'textarea'
  | 'th'
  | 'time'
  | 'track'
  | 'video'
  | 'webview';

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
  T extends ElementNamesThatHaveTheirOwnProps,
  V extends {},
> = T extends unknown ? NamedComponentPropsWithVariants<T, V> : never;

export type GenericComponentPropsWithVariants<
  T extends keyof JSX.IntrinsicElements,
  V extends {},
> =
  | ({ component?: never } & ComponentPropsWithVariants<T, V>)
  | DistributeWithVariants<ElementNamesThatHaveTheirOwnProps, V>
  | ({
      component?: Exclude<
        keyof JSX.IntrinsicElements,
        ElementNamesThatHaveTheirOwnProps
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
