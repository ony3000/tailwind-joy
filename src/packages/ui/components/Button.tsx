import type { ComponentProps } from 'react';

export function Button({ children }: ComponentProps<'button'>) {
  return <button type="button">{children}</button>;
}
