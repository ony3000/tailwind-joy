import { createContext } from 'react';
import type { BaseVariants } from '../../base/types';

export const VariantColorContext = createContext<
  Partial<Pick<BaseVariants, 'color' | 'variant'>>
>({});
