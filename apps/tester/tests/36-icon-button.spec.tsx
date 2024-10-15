import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { MdFavoriteBorder, MdOutlinePending } from 'react-icons/md';
import { IconButton as JoyIconButton } from '@mui/joy';
import { IconButton as TJIconButton } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

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
    renderTjElement({ testId, size, variant, color, state, iconClassName }) {
      return (
        <TJIconButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
        >
          <MdFavoriteBorder className={iconClassName} />
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
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJIconButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
        >
          <MdFavoriteBorder className={iconClassName} />
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
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJIconButton
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          loading
          loadingIndicator={<MdOutlinePending className={iconClassName} />}
        >
          <MdFavoriteBorder className={iconClassName} />
        </TJIconButton>
      );
    },
  },
  // NOTE: This test cannot pass until the issue `mui/material-ui#43245` is resolved.
  // {
  //   title: 'component: a (disabled)',
  //   alterStates: ['default', 'focus-visible'],
  //   renderJoyElement({ testId, size, variant, color }) {
  //     return (
  //       <JoyIconButton
  //         data-testid={testId}
  //         size={size}
  //         variant={variant}
  //         color={color}
  //         component="a"
  //         href="#"
  //         disabled
  //       >
  //         <FavoriteBorderIcon />
  //       </JoyIconButton>
  //     );
  //   },
  //   renderTjElement({ testId, size, variant, color, iconClassName }) {
  //     return (
  //       <TJIconButton
  //         data-testid={testId}
  //         size={size}
  //         variant={variant}
  //         color={color}
  //         component="a"
  //         href="#"
  //         disabled
  //       >
  //         <MdFavoriteBorder className={iconClassName} />
  //       </TJIconButton>
  //     );
  //   },
  // },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
