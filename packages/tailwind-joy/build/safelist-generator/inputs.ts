import type { GeneratorInput } from '../../src/base/types';
import { optionRootVariants } from '../../src/components/Option/OptionRoot';
import { selectButtonVariants } from '../../src/components/Select/SlotButton';
import { selectEndDecoratorVariants } from '../../src/components/Select/SlotEndDecorator';
import { selectIndicatorVariants } from '../../src/components/Select/SlotIndicator';
import { selectListboxVariants } from '../../src/components/Select/SlotListbox';
import { selectStartDecoratorVariants } from '../../src/components/Select/SlotStartDecorator';
import { selectRootVariants } from '../../src/components/Select/index';

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

const selectButtonVariantCase: VariantCase<typeof selectButtonVariants> = {
  value: [null],
};

const selectEndDecoratorVariantCase: VariantCase<
  typeof selectEndDecoratorVariants
> = {};

const selectIndicatorVariantCase: VariantCase<typeof selectIndicatorVariants> =
  {
    // neutral, non-neutral
    color: ['primary', 'neutral'],
    expanded: [true],
    size: ['sm', 'md', 'lg'],
    // solid, non-solid
    variant: ['solid', 'soft'],
  };

const selectListboxVariantCase: VariantCase<typeof selectListboxVariants> = {
  color: ['primary', 'neutral', 'danger', 'success', 'warning'],
  variant: ['solid', 'soft', 'outlined', 'plain'],
};

const selectStartDecoratorVariantCase: VariantCase<
  typeof selectStartDecoratorVariants
> = {};

const selectRootVariantCase: VariantCase<typeof selectRootVariants> = {
  color: ['primary', 'neutral', 'danger', 'success', 'warning'],
  instanceColor: ['primary', 'neutral', 'danger', 'success', 'warning'],
  isTailwind4: [false, true],
  rounded: [true],
  size: ['sm', 'md', 'lg'],
  variant: ['solid', 'soft', 'outlined', 'plain'],
};

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: optionRootVariants,
    variants: optionRootVariantCase,
  },
  {
    generatorFn: selectButtonVariants,
    variants: selectButtonVariantCase,
  },
  {
    generatorFn: selectEndDecoratorVariants,
    variants: selectEndDecoratorVariantCase,
  },
  {
    generatorFn: selectIndicatorVariants,
    variants: selectIndicatorVariantCase,
  },
  {
    generatorFn: selectListboxVariants,
    variants: selectListboxVariantCase,
  },
  {
    generatorFn: selectStartDecoratorVariants,
    variants: selectStartDecoratorVariantCase,
  },
  {
    generatorFn: selectRootVariants,
    variants: selectRootVariantCase,
  },
];
