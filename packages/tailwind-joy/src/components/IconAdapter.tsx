import type { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import type { GeneratorInput } from '@/base/types';

const iconAdapterRootVariants = cva(
  'contents [&_svg]:m-[var(--Icon-margin)] [&_svg]:h-[1em] [&_svg]:w-[1em] [&_svg]:[color:var(--Icon-color)] [&_svg]:[font-size:var(--Icon-fontSize,20px)]',
);

type IconAdapterRootProps = {
  children?: ReactNode;
};

export function IconAdapter({ children }: IconAdapterRootProps) {
  return <span className={iconAdapterRootVariants()}>{children}</span>;
}

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: iconAdapterRootVariants,
    variants: {},
  },
];
