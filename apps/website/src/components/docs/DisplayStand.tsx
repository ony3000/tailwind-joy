import type { ComponentProps } from 'react';

export function DisplayStand({ children }: ComponentProps<'div'>) {
  return (
    <div className="border-joy-neutral-300 dark:border-joy-neutral-500 flex flex-wrap items-center justify-center gap-4 rounded-lg border border-solid p-4 dark:bg-slate-950 [&>button]:font-[inherit]">
      {children}
    </div>
  );
}
