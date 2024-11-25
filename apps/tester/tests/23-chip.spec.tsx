import SunIcon from '@mui/icons-material/LightMode';
import { MdLightMode } from 'react-icons/md';
import { Chip as JoyChip } from '@mui/joy';
import { Chip as TJChip } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[100px] w-[200px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyChip
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          This is a chip
        </JoyChip>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJChip
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          This is a chip
        </TJChip>
      );
    },
  },
  {
    title: 'decorators',
    maxDiffPixels: 2,
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyChip
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          startDecorator={<SunIcon />}
        >
          This is a chip
        </JoyChip>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJChip
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          startDecorator={<MdLightMode className={iconClassName} />}
        >
          This is a chip
        </TJChip>
      );
    },
  },
  {
    title: 'clickable',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyChip
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          onClick={() => {}}
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
          onClick={() => {}}
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
