import { Skeleton as JoySkeleton, Typography as JoyTypography } from '@mui/joy';
import {
  Skeleton as TJSkeleton,
  Typography as TJTypography,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[400px] w-[400px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'inline with typography',
    alterSizes: ['md'],
    alterVariants: ['solid'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <div data-testid={testId}>
          <JoyTypography level="h1">
            <JoySkeleton animation={false}>Lorem ipsum</JoySkeleton>
          </JoyTypography>
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <div data-testid={testId}>
          <TJTypography level="h1">
            <TJSkeleton animation={false}>Lorem ipsum</TJSkeleton>
          </TJTypography>
        </div>
      );
    },
  },
  {
    title: 'geometry',
    alterSizes: ['md'],
    alterVariants: ['solid'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <div data-testid={testId}>
          <div>
            <JoySkeleton
              animation={false}
              variant="circular"
              width={48}
              height={48}
            />
          </div>
          <div>
            <JoySkeleton animation={false} variant="inline">
              Lorem ipsum
            </JoySkeleton>
          </div>
          <div className="relative h-20 w-40">
            <JoySkeleton animation={false} variant="overlay">
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </JoySkeleton>
          </div>
          <div>
            <JoySkeleton
              animation={false}
              variant="rectangular"
              width={200}
              height="1em"
            />
          </div>
          <div>
            <JoySkeleton
              animation={false}
              variant="text"
              level="h1"
              width={100}
            />
          </div>
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <div data-testid={testId}>
          <div>
            <TJSkeleton
              animation={false}
              variant="circular"
              width={48}
              height={48}
            />
          </div>
          <div>
            <TJSkeleton animation={false} variant="inline">
              Lorem ipsum
            </TJSkeleton>
          </div>
          <div className="relative h-20 w-40">
            <TJSkeleton animation={false} variant="overlay">
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </TJSkeleton>
          </div>
          <div>
            <TJSkeleton
              animation={false}
              variant="rectangular"
              width={200}
              height="1em"
            />
          </div>
          <div>
            <TJSkeleton
              animation={false}
              variant="text"
              level="h1"
              width={100}
            />
          </div>
        </div>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
