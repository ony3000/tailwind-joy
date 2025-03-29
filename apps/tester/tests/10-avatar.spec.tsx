import { Avatar as JoyAvatar } from '@mui/joy';
import { Avatar as TJAvatar } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

// @ts-expect-error
import avatar1 from '../../website/static/img/avatar/1.jpg';

const containerClassName =
  'flex h-[100px] w-[200px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAvatar
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAvatar
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        />
      );
    },
  },
  {
    title: 'text avatar',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAvatar
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          AB
        </JoyAvatar>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAvatar
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          AB
        </TJAvatar>
      );
    },
  },
  {
    title: 'image avatar',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAvatar
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          src={avatar1}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAvatar
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          src={avatar1}
        />
      );
    },
  },
  {
    title: 'image fallback',
    alterSizes: ['md'],
    alterVariants: ['soft'],
    alterColors: ['neutral'],
    waitTime: 1000,
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <div data-testid={testId} className="flex gap-4">
          <JoyAvatar
            size={size}
            variant={variant}
            color={color}
            src="broken-image.jpg"
          >
            AB
          </JoyAvatar>
          <JoyAvatar
            size={size}
            variant={variant}
            color={color}
            src="broken-image.jpg"
            alt="Lorem ipsum"
          />
          <JoyAvatar
            size={size}
            variant={variant}
            color={color}
            src="broken-image.jpg"
          />
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <div data-testid={testId} className="flex gap-4">
          <TJAvatar
            size={size}
            variant={variant}
            color={color}
            src="broken-image.jpg"
          >
            AB
          </TJAvatar>
          <TJAvatar
            size={size}
            variant={variant}
            color={color}
            src="broken-image.jpg"
            alt="Lorem ipsum"
          />
          <TJAvatar
            size={size}
            variant={variant}
            color={color}
            src="broken-image.jpg"
          />
        </div>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
