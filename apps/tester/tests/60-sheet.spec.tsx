import {
  Sheet as JoySheet,
  Checkbox as JoyCheckbox,
  Radio as JoyRadio,
} from '@mui/joy';
import {
  Sheet as TJSheet,
  Checkbox as TJCheckbox,
  Radio as TJRadio,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[200px] w-[400px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterSizes: ['md'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoySheet
          data-testid={testId}
          variant={variant}
          color={color}
          sx={{ p: 2 }}
        >
          Hello world!
        </JoySheet>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJSheet
          data-testid={testId}
          variant={variant}
          color={color}
          className="p-4"
        >
          Hello world!
        </TJSheet>
      );
    },
  },
  {
    title: 'combine with checkbox',
    alterSizes: ['md'],
    alterStates: ['default', 'focus-visible'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoySheet
          data-testid={testId}
          variant={variant}
          color={color}
          sx={{ p: 2, borderRadius: 'md', display: 'flex' }}
        >
          <JoyCheckbox label="Focus on me" overlay />
        </JoySheet>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJSheet
          data-testid={testId}
          variant={variant}
          color={color}
          className="flex rounded-[8px] p-4"
        >
          <TJCheckbox label="Focus on me" overlay />
        </TJSheet>
      );
    },
  },
  {
    title: 'combine with radio',
    alterSizes: ['md'],
    alterStates: ['default', 'focus-visible'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoySheet
          data-testid={testId}
          variant={variant}
          color={color}
          sx={{ p: 2, borderRadius: 'md', display: 'flex' }}
        >
          <JoyRadio label="Focus on me" overlay />
        </JoySheet>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJSheet
          data-testid={testId}
          variant={variant}
          color={color}
          className="flex rounded-[8px] p-4"
        >
          <TJRadio label="Focus on me" overlay />
        </TJSheet>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
