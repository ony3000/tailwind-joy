import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function DisplayStand({ children, className }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'border-joy-neutral-300 dark:border-joy-neutral-500 flex flex-wrap items-center justify-center gap-4 rounded-lg border border-solid p-4 dark:bg-slate-950 [&>button]:font-[inherit]',
        className,
      )}
    >
      {children}
    </div>
  );
}
