import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';

import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MdAdd, MdKeyboardArrowRight } from 'react-icons/md';
import { Button as JoyButton } from '@mui/joy';
import { Button as TJButton } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const basename = sep === '/' ? pathPosix.basename : pathWin32.basename;
const filename = basename(__filename);
const screenshotPath = resolve(__dirname, `../__screenshots__/${filename}`);

const containerClassName =
  'flex h-[100px] w-[200px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
        >
          Button
        </JoyButton>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
        >
          Button
        </TJButton>
      );
    },
  },
  {
    title: 'startDecorator',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          startDecorator={<AddIcon />}
        >
          Button
        </JoyButton>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          startDecorator={<MdAdd />}
        >
          Button
        </TJButton>
      );
    },
  },
  {
    title: 'endDecorator',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Button
        </JoyButton>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          endDecorator={<MdKeyboardArrowRight />}
        >
          Button
        </TJButton>
      );
    },
  },
  {
    title: 'fullWidth',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          fullWidth
        >
          Button
        </JoyButton>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          fullWidth
        >
          Button
        </TJButton>
      );
    },
  },
  {
    title: 'loading',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
        >
          Button
        </JoyButton>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
        >
          Button
        </TJButton>
      );
    },
  },
  {
    title: 'loadingIndicator',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
          loadingIndicator="Loading..."
        >
          Button
        </JoyButton>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
          loadingIndicator="Loading..."
        >
          Button
        </TJButton>
      );
    },
  },
  {
    title: 'loadingPosition: start',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
          loadingPosition="start"
        >
          Button
        </JoyButton>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
          loadingPosition="start"
        >
          Button
        </TJButton>
      );
    },
  },
  {
    title: 'loadingPosition: end',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
          loadingPosition="end"
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Button
        </JoyButton>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
          loadingPosition="end"
          endDecorator={<MdKeyboardArrowRight />}
        >
          Button
        </TJButton>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  screenshotPath,
  viewport: { width: 500, height: 500 },
});
