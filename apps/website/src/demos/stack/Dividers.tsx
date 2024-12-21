import type { ReactNode } from 'react';
import { Box, Divider, Sheet, Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

function Item({ children }: { children?: ReactNode }) {
  return (
    <Sheet
      className="
        text-joy-neutral-700 border-joy-neutral-500/20 dark:border-joy-neutral-500/[.16]
        dark:text-joy-neutral-300 rounded-[8px] border border-solid p-2 text-center
        text-[length:var(--joy-fontSize-sm,0.875rem)] font-medium leading-[var(--joy-lineHeight-md,1.5)]
      "
    >
      {children}
    </Sheet>
  );
}

export function StackDividers() {
  return (
    <DisplayStand>
      <Box className="w-full">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" />}
          spacing="16px"
          className="justify-center"
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
    </DisplayStand>
  );
}
