import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { MdClose, MdDone } from 'react-icons/md';
import { Radio as JoyRadio } from '@mui/joy';
import { Radio as TJRadio } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[100px] w-[200px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
        />
      );
    },
  },
  {
    title: 'checked',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked
        />
      );
    },
  },
  {
    title: 'uncheckedIcon',
    alterStates: ['default', 'hover', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          uncheckedIcon={<CloseIcon />}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state, iconClassName }) {
      return (
        <TJRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          uncheckedIcon={<MdClose className={iconClassName} />}
        />
      );
    },
  },
  {
    title: 'uncheckedIcon (as a preview)',
    alterStates: ['hover'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          uncheckedIcon={<DoneIcon />}
          slotProps={{
            root: ({ checked, focusVisible }) => ({
              sx: !checked
                ? {
                    '& svg': { opacity: focusVisible ? 1 : 0 },
                    '&:hover svg': {
                      opacity: 1,
                    },
                  }
                : undefined,
            }),
          }}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state, iconClassName }) {
      return (
        <TJRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          uncheckedIcon={<MdDone className={iconClassName} />}
          className="[&:has(:checked)_svg]:opacity-100 [&:has(:focus-visible)_svg]:opacity-100 [&:hover_svg]:opacity-100 [&_svg]:opacity-0"
        />
      );
    },
  },
  {
    title: 'disableIcon',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          disableIcon
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          disableIcon
        />
      );
    },
  },
  {
    title: 'focus outline only wraps the input',
    alterStates: ['focus-visible'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          sx={{
            '& > .MuiRadio-radio': { position: 'relative' },
          }}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJRadio
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          className="[&>.tj-radio-radio]:relative"
        />
      );
    },
  },
  {
    title: 'overlay',
    alterStates: ['focus-visible'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4">
          <JoyRadio
            data-testid={testId}
            size={size}
            variant={variant}
            color={color}
            disabled={state === 'disabled'}
            label="Label"
            checked={false}
            overlay
          />
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <div className="border-joy-neutral-300 dark:border-joy-neutral-700 bg-joy-neutral-50 dark:bg-joy-neutral-900 relative flex rounded-lg border border-solid p-4">
          <TJRadio
            data-testid={testId}
            size={size}
            variant={variant}
            color={color}
            disabled={state === 'disabled'}
            label="Label"
            checked={false}
            overlay
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
