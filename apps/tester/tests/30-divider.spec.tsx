import { Divider as JoyDivider, Button as JoyButton } from '@mui/joy';
import {
  Divider as TJDivider,
  Button as TJButton,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[200px] w-[400px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterSizes: ['md'],
    alterVariants: ['solid'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <JoyDivider />
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <JoyDivider>Visual indicator</JoyDivider>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <TJDivider />
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <TJDivider>Visual indicator</TJDivider>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      );
    },
  },
  {
    title: 'orientation: vertical',
    alterSizes: ['md'],
    alterVariants: ['solid'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <div className="flex gap-4 text-[12px]">
          <div>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </div>
          <JoyDivider orientation="vertical" />
          <div>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </div>
          <JoyDivider orientation="vertical">Visual indicator</JoyDivider>
          <div>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </div>
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <div className="flex gap-4 text-[12px]">
          <div>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </div>
          <TJDivider orientation="vertical" />
          <div>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </div>
          <TJDivider orientation="vertical">Visual indicator</TJDivider>
          <div>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </div>
        </div>
      );
    },
  },
  {
    title: 'inset: context',
    alterSizes: ['md'],
    alterVariants: ['solid'],
    alterColors: ['primary'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <div className="flex flex-col rounded-lg border border-solid p-5 [--Divider-inset:-1.25rem]">
          <div>Title</div>
          <JoyDivider inset="none" />
          <div>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </div>
          <div>
            <JoyDivider inset="context" />
            <JoyButton sx={{ mt: 1.5 }}>Button</JoyButton>
          </div>
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <div className="flex flex-col rounded-lg border border-solid p-5 [--Divider-inset:-1.25rem]">
          <div>Title</div>
          <TJDivider inset="none" />
          <div>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </div>
          <div>
            <TJDivider inset="context" />
            <TJButton className="mt-3">Button</TJButton>
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
