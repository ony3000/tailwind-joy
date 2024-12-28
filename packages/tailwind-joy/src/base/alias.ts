import { useId } from 'react';
import { extendTailwindMerge } from 'tailwind-merge';

export const r = String.raw;

export const twMerge = extendTailwindMerge({
  override: {
    conflictingClassGroups: {
      'font-size': [],
    },
  },
});

export function useUniqueId() {
  const id = useId();

  return `tj-${id}`;
}
