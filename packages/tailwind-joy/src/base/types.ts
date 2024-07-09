export type GeneratorInput = {
  generatorFn: (props?: Record<string, any>) => string;
  variants: Record<string, (string | boolean | undefined)[]>;
};
