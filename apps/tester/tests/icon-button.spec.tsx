import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { MdFavoriteBorder, MdOutlinePending } from 'react-icons/md';
import { IconButton as JoyIconButton } from '@mui/joy';
import {
  IconButton as TJIconButton,
  IconAdapter,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const basename = sep === '/' ? pathPosix.basename : pathWin32.basename;
const filename = basename(__filename);
const screenshotPath = resolve(__dirname, `../__screenshots__/${filename}`);

const containerClassName =
  'flex h-[100px] w-[100px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyIconButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
        >
          <FavoriteBorderIcon />
        </JoyIconButton>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJIconButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
        >
          <IconAdapter color={color}>
            <MdFavoriteBorder />
          </IconAdapter>
        </TJIconButton>
      );
    },
  },
  {
    title: 'loading',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyIconButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
        >
          <FavoriteBorderIcon />
        </JoyIconButton>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJIconButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
        >
          <IconAdapter color={color}>
            <MdFavoriteBorder />
          </IconAdapter>
        </TJIconButton>
      );
    },
  },
  {
    title: 'loadingIndicator',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyIconButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
          loadingIndicator={<PendingOutlinedIcon />}
        >
          <FavoriteBorderIcon />
        </JoyIconButton>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJIconButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
          loadingIndicator={
            <IconAdapter color={color}>
              <MdOutlinePending />
            </IconAdapter>
          }
        >
          <IconAdapter color={color}>
            <MdFavoriteBorder />
          </IconAdapter>
        </TJIconButton>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  screenshotPath,
  viewport: { width: 500, height: 500 },
});
