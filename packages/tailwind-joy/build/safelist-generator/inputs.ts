import type { GeneratorInput } from '../../src/base/types';
import { optionRootVariants } from '../../src/components/Option/OptionRoot';

type VariantCase<T> = T extends (props: infer P) => string
  ? {
      [K in keyof NonNullable<P>]-?: Array<NonNullable<P>[K]>;
    }
  : never;

const optionRootVariantCase: VariantCase<typeof optionRootVariants> = {
  color: ['primary', 'neutral', 'danger', 'success', 'warning'],
  highlighted: [true],
  variant: ['solid', 'soft', 'outlined', 'plain'],
};

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: optionRootVariants,
    variants: optionRootVariantCase,
  },
];
