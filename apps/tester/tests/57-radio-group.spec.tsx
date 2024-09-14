import { RadioGroup as JoyRadioGroup, Radio as JoyRadio } from '@mui/joy';
import {
  RadioGroup as TJRadioGroup,
  Radio as TJRadio,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[200px] w-[400px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyRadioGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          name="joy-RadioGroup-basics"
          value="two"
        >
          <JoyRadio label="One" value="one" />
          <JoyRadio label="Two" value="two" />
          <JoyRadio label="Three" value="three" />
        </JoyRadioGroup>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJRadioGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          name="tj-RadioGroup-basics"
          value="two"
        >
          <TJRadio label="One" value="one" />
          <TJRadio label="Two" value="two" />
          <TJRadio label="Three" value="three" />
        </TJRadioGroup>
      );
    },
  },
  {
    title: 'orientation: horizontal',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyRadioGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          name="joy-RadioGroup-orientation"
          value="two"
          orientation="horizontal"
        >
          <JoyRadio label="One" value="one" />
          <JoyRadio label="Two" value="two" />
          <JoyRadio label="Three" value="three" />
        </JoyRadioGroup>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJRadioGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          name="tj-RadioGroup-orientation"
          value="two"
          orientation="horizontal"
        >
          <TJRadio label="One" value="one" />
          <TJRadio label="Two" value="two" />
          <TJRadio label="Three" value="three" />
        </TJRadioGroup>
      );
    },
  },
  {
    title: 'overlay',
    alterStates: ['default', 'focus-visible'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyRadioGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          name="joy-RadioGroup-basics"
          value="two"
          orientation="horizontal"
          overlay
          sx={{
            gap: 'var(--RadioGroup-gap)',
          }}
        >
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <JoyRadio label="One" value="one" />
          </div>
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <JoyRadio label="Two" value="two" />
          </div>
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <JoyRadio label="Three" value="three" />
          </div>
        </JoyRadioGroup>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJRadioGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          name="tj-RadioGroup-basics"
          value="two"
          orientation="horizontal"
          overlay
        >
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <TJRadio label="One" value="one" />
          </div>
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <TJRadio label="Two" value="two" />
          </div>
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <TJRadio label="Three" value="three" />
          </div>
        </TJRadioGroup>
      );
    },
  },
  {
    title: 'disableIcon',
    alterStates: ['default', 'focus-visible'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyRadioGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          name="joy-RadioGroup-basics"
          value="two"
          orientation="horizontal"
          overlay
          disableIcon
          sx={{
            gap: 'var(--RadioGroup-gap)',
          }}
        >
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <JoyRadio
              label="One"
              value="one"
              sx={{
                '& .MuiRadio-label': {
                  fontWeight: 'lg',
                },
                '&:has(:checked) .MuiRadio-action': {
                  '--variant-borderWidth': '2px',
                  borderColor: '#0b6bcb',
                },
              }}
            />
          </div>
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <JoyRadio
              label="Two"
              value="two"
              sx={{
                '& .MuiRadio-label': {
                  fontWeight: 'lg',
                },
                '&:has(:checked) .MuiRadio-action': {
                  '--variant-borderWidth': '2px',
                  borderColor: '#0b6bcb',
                },
              }}
            />
          </div>
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <JoyRadio
              label="Three"
              value="three"
              sx={{
                '& .MuiRadio-label': {
                  fontWeight: 'lg',
                },
                '&:has(:checked) .MuiRadio-action': {
                  '--variant-borderWidth': '2px',
                  borderColor: '#0b6bcb',
                },
              }}
            />
          </div>
        </JoyRadioGroup>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJRadioGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          name="tj-RadioGroup-basics"
          value="two"
          orientation="horizontal"
          overlay
          disableIcon
        >
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <TJRadio
              label="One"
              value="one"
              className="[&_.tj-radio-action:has(:checked)]:border-joy-primary-500 font-semibold [&_.tj-radio-action:has(:checked)]:[--variant-borderWidth:2px]"
            />
          </div>
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <TJRadio
              label="Two"
              value="two"
              className="[&_.tj-radio-action:has(:checked)]:border-joy-primary-500 font-semibold [&_.tj-radio-action:has(:checked)]:[--variant-borderWidth:2px]"
            />
          </div>
          <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4 [--unstable_actionRadius:calc(8px-var(--variant-borderWidth,0px))]">
            <TJRadio
              label="Three"
              value="three"
              className="[&_.tj-radio-action:has(:checked)]:border-joy-primary-500 font-semibold [&_.tj-radio-action:has(:checked)]:[--variant-borderWidth:2px]"
            />
          </div>
        </TJRadioGroup>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
