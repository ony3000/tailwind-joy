import { ChipDelete as JoyChipDelete, Chip as JoyChip } from '@mui/joy';
import {
  ChipDelete as TJChipDelete,
  Chip as TJChip,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[100px] w-[200px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyChip
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          endDecorator={<JoyChipDelete onDelete={() => {}} />}
        >
          This is a chip
        </JoyChip>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJChip
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          endDecorator={<TJChipDelete onDelete={() => {}} />}
        >
          This is a chip
        </TJChip>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
