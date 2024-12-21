import type { ReactNode } from 'react';
import {
  Stack as JoyStack,
  Box as JoyBox,
  Divider as JoyDivider,
} from '@mui/joy';
import {
  Stack as TJStack,
  Box as TJBox,
  Divider as TJDivider,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[300px] w-[400px] items-center justify-center p-2';

function Item({ children }: { children?: ReactNode }) {
  return (
    <div
      className="
        text-joy-neutral-700 border-joy-neutral-500/20 dark:border-joy-neutral-500/[.16]
        dark:text-joy-neutral-300 rounded-[8px] border border-solid p-2 text-center
        text-[length:var(--joy-fontSize-sm,0.875rem)] font-medium leading-[var(--joy-lineHeight-md,1.5)]
      "
    >
      {children}
    </div>
  );
}

function GrowItem({ children }: { children?: ReactNode }) {
  return (
    <div
      className="
        text-joy-neutral-700 border-joy-neutral-500/20 dark:border-joy-neutral-500/[.16]
        dark:text-joy-neutral-300 grow rounded-[8px] border border-solid p-2 text-center
        text-[length:var(--joy-fontSize-sm,0.875rem)] font-medium leading-[var(--joy-lineHeight-md,1.5)]
      "
    >
      {children}
    </div>
  );
}

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterSizes: ['md'],
    renderJoyElement({ testId }) {
      return (
        <JoyBox data-testid={testId} className="w-full">
          <JoyStack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </JoyStack>
        </JoyBox>
      );
    },
    renderTjElement({ testId }) {
      return (
        <TJBox data-testid={testId} className="w-full">
          <TJStack spacing="1rem">
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </TJStack>
        </TJBox>
      );
    },
  },
  {
    title: 'direction: row',
    alterSizes: ['md'],
    renderJoyElement({ testId }) {
      return (
        <JoyBox data-testid={testId} className="w-full">
          <JoyStack direction="row" spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </JoyStack>
        </JoyBox>
      );
    },
    renderTjElement({ testId }) {
      return (
        <TJBox data-testid={testId} className="w-full">
          <TJStack direction="row" spacing="1rem">
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </TJStack>
        </TJBox>
      );
    },
  },
  {
    title: 'dividers',
    alterSizes: ['md'],
    renderJoyElement({ testId }) {
      return (
        <JoyBox data-testid={testId} className="w-full">
          <JoyStack
            direction="row"
            spacing={2}
            divider={<JoyDivider orientation="vertical" />}
            sx={{ justifyContent: 'center' }}
          >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </JoyStack>
        </JoyBox>
      );
    },
    renderTjElement({ testId }) {
      return (
        <TJBox data-testid={testId} className="w-full">
          <TJStack
            direction="row"
            spacing="1rem"
            divider={<TJDivider orientation="vertical" />}
            className="justify-center"
          >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </TJStack>
        </TJBox>
      );
    },
  },
  {
    title: 'useFlexGap',
    alterSizes: ['md'],
    renderJoyElement({ testId }) {
      return (
        <JoyBox data-testid={testId} className="w-[200px]">
          <JoyStack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ flexWrap: 'wrap' }}
          >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </JoyStack>
        </JoyBox>
      );
    },
    renderTjElement({ testId }) {
      return (
        <TJBox data-testid={testId} className="w-[200px]">
          <TJStack
            direction="row"
            spacing="1rem"
            useFlexGap
            className="flex-wrap"
          >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </TJStack>
        </TJBox>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
