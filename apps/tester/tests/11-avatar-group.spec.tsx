import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MdMoreVert } from 'react-icons/md';
import {
  AvatarGroup as JoyAvatarGroup,
  Avatar as JoyAvatar,
  IconButton as JoyIconButton,
} from '@mui/joy';
import {
  AvatarGroup as TJAvatarGroup,
  Avatar as TJAvatar,
  IconButton as TJIconButton,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

// @ts-expect-error
import avatar1 from '../../website/static/img/avatar/1.jpg';
// @ts-expect-error
import avatar2 from '../../website/static/img/avatar/2.jpg';
// @ts-expect-error
import avatar3 from '../../website/static/img/avatar/3.jpg';

const containerClassName =
  'flex h-[200px] w-[200px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <JoyAvatar />
          <JoyAvatar>AB</JoyAvatar>
          <JoyAvatar src={avatar1} />
        </JoyAvatarGroup>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <TJAvatar />
          <TJAvatar>AB</TJAvatar>
          <TJAvatar src={avatar1} />
        </TJAvatarGroup>
      );
    },
  },
  {
    title: 'quantity within a group',
    alterSizes: ['md'],
    alterVariants: ['soft'],
    alterColors: ['neutral'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <JoyAvatar src={avatar1} />
          <JoyAvatar src={avatar2} />
          <JoyAvatar src={avatar3} />
          <JoyAvatar>+3</JoyAvatar>
        </JoyAvatarGroup>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <TJAvatar src={avatar1} />
          <TJAvatar src={avatar2} />
          <TJAvatar src={avatar3} />
          <TJAvatar>+3</TJAvatar>
        </TJAvatarGroup>
      );
    },
  },
  {
    title: 'consistent appearance',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <JoyAvatar src={avatar1} />
          <JoyAvatar src={avatar2} />
          <JoyAvatar src={avatar3} />
          <JoyIconButton
            variant={variant}
            color={color}
            sx={{
              borderRadius: '50%',
              marginInlineStart: 'var(--Avatar-marginInlineStart)',
              boxShadow: 'var(--Avatar-ring)',
            }}
          >
            <MoreVertIcon />
          </JoyIconButton>
        </JoyAvatarGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <TJAvatar src={avatar1} />
          <TJAvatar src={avatar2} />
          <TJAvatar src={avatar3} />
          <TJIconButton
            variant={variant}
            color={color}
            className="ms-[var(--Avatar-marginInlineStart)] rounded-[50%] [box-shadow:var(--Avatar-ring)]"
          >
            <MdMoreVert className={iconClassName} />
          </TJIconButton>
        </TJAvatarGroup>
      );
    },
  },
  {
    title: 'overlapping order',
    alterSizes: ['md'],
    alterVariants: ['soft'],
    alterColors: ['neutral'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          sx={{ flexDirection: 'row-reverse' }}
        >
          <JoyAvatar>+3</JoyAvatar>
          <JoyAvatar src={avatar3} />
          <JoyAvatar src={avatar2} />
          <JoyAvatar src={avatar1} />
        </JoyAvatarGroup>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          className="flex-row-reverse"
        >
          <TJAvatar>+3</TJAvatar>
          <TJAvatar src={avatar3} />
          <TJAvatar src={avatar2} />
          <TJAvatar src={avatar1} />
        </TJAvatarGroup>
      );
    },
  },
  {
    title: 'vertical stacking',
    alterSizes: ['md'],
    alterVariants: ['soft'],
    alterColors: ['neutral'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          sx={{ writingMode: 'vertical-rl' }}
        >
          <JoyAvatar src={avatar1} />
          <JoyAvatar src={avatar2} />
          <JoyAvatar src={avatar3} />
          <JoyAvatar sx={{ transform: 'rotate(-90deg)' }}>+3</JoyAvatar>
        </JoyAvatarGroup>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAvatarGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          className="[writing-mode:vertical-rl]"
        >
          <TJAvatar src={avatar1} />
          <TJAvatar src={avatar2} />
          <TJAvatar src={avatar3} />
          <TJAvatar className="-rotate-90">+3</TJAvatar>
        </TJAvatarGroup>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
