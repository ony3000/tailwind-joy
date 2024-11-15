import { AspectRatio as JoyAspectRatio } from '@mui/joy';
import { AspectRatio as TJAspectRatio } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[200px] w-[400px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterSizes: ['md'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAspectRatio data-testid={testId} sx={{ width: 300 }}>
          <div>Lorem ipsum</div>
        </JoyAspectRatio>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAspectRatio data-testid={testId} className="w-[300px]">
          <div>Lorem ipsum</div>
        </TJAspectRatio>
      );
    },
  },
  {
    title: 'ratio',
    alterSizes: ['md'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAspectRatio data-testid={testId} ratio="3/2" sx={{ width: 300 }}>
          <div>Lorem ipsum</div>
        </JoyAspectRatio>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAspectRatio data-testid={testId} ratio="3/2" className="w-[300px]">
          <div>Lorem ipsum</div>
        </TJAspectRatio>
      );
    },
  },
  {
    title: 'objectFit',
    alterSizes: ['md'],
    alterColors: ['primary'],
    waitTime: 3000,
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyAspectRatio
          data-testid={testId}
          objectFit="contain"
          sx={{ width: 300 }}
        >
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            alt="A beautiful landscape."
          />
        </JoyAspectRatio>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJAspectRatio
          data-testid={testId}
          objectFit="contain"
          className="w-[300px]"
        >
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            alt="A beautiful landscape."
          />
        </TJAspectRatio>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
