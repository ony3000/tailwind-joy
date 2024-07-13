export type BaseVariants = {
  color?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'soft' | 'outlined' | 'plain';
};

export type GeneratorInput = {
  generatorFn: (props?: Record<string, any>) => string;
  variants: Record<string, (string | boolean | undefined)[]>;
};
