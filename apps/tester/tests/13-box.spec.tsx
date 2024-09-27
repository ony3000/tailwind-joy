import { Box as JoyBox } from '@mui/joy';
import { Box as TJBox } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[100px] w-[100px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterSizes: ['md'],
    alterVariants: ['solid'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyBox data-testid={testId} sx={{ p: 2, border: '1px dashed grey' }}>
          Lorem ipsum
        </JoyBox>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJBox
          data-testid={testId}
          className="border border-dashed border-[grey] p-4"
        >
          Lorem ipsum
        </TJBox>
      );
    },
  },
  {
    title: 'component: section',
    alterSizes: ['md'],
    alterVariants: ['solid'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyBox
          data-testid={testId}
          sx={{ p: 2, border: '1px dashed grey' }}
          component="section"
        >
          Lorem ipsum
        </JoyBox>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJBox
          data-testid={testId}
          className="border border-dashed border-[grey] p-4"
          component="section"
        >
          Lorem ipsum
        </TJBox>
      );
    },
  },
  {
    title: 'component: button',
    alterSizes: ['md'],
    alterVariants: ['solid'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyBox
          data-testid={testId}
          sx={{ p: 2, border: '1px dashed grey' }}
          component="button"
          type="button"
        >
          Lorem ipsum
        </JoyBox>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJBox
          data-testid={testId}
          className="border border-dashed border-[grey] p-4"
          component="button"
          type="button"
        >
          Lorem ipsum
        </TJBox>
      );
    },
  },
  {
    title: 'component: a',
    alterSizes: ['md'],
    alterVariants: ['solid'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyBox
          data-testid={testId}
          sx={{ p: 2, border: '1px dashed grey' }}
          component="a"
          href="https://tailwind-joy.vercel.app/"
        >
          Lorem ipsum
        </JoyBox>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJBox
          data-testid={testId}
          className="border border-dashed border-[grey] p-4"
          component="a"
          href="https://tailwind-joy.vercel.app/"
        >
          Lorem ipsum
        </TJBox>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
