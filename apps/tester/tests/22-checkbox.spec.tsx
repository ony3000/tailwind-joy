import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { MdClose, MdDone } from 'react-icons/md';
import { Checkbox as JoyCheckbox, checkboxClasses } from '@mui/joy';
import { Checkbox as TJCheckbox, IconAdapter } from 'tailwind-joy/components';

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
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
        />
      );
    },
  },
  {
    title: 'defaultChecked',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          defaultChecked
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          defaultChecked
        />
      );
    },
  },
  {
    title: 'uncheckedIcon',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          uncheckedIcon={<CloseIcon />}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          uncheckedIcon={
            <IconAdapter color={color}>
              <MdClose />
            </IconAdapter>
          }
        />
      );
    },
  },
  {
    title: 'uncheckedIcon (as a preview)',
    alterStates: ['hover', 'focus-visible', 'active'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
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
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          uncheckedIcon={
            <IconAdapter color={color}>
              <MdDone />
            </IconAdapter>
          }
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
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          disableIcon
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          disableIcon
        />
      );
    },
  },
  {
    title: 'focus outline only wraps the input',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          sx={{
            [`& > .${checkboxClasses.checkbox}`]: { position: 'relative' },
          }}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          className="[&>.tj-checkbox-checkbox]:relative"
        />
      );
    },
  },
  {
    title: 'overlay',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <div
          data-testid={testId}
          className="border-joy-neutral-300 flex rounded-lg border border-solid p-4"
        >
          <JoyCheckbox
            size={size}
            variant={variant}
            color={color}
            disabled={state === 'disabled'}
            label="Label"
            overlay
          />
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <div
          data-testid={testId}
          className="border-joy-neutral-300 flex rounded-lg border border-solid p-4"
        >
          <TJCheckbox
            size={size}
            variant={variant}
            color={color}
            disabled={state === 'disabled'}
            label="Label"
            overlay
          />
        </div>
      );
    },
  },
  {
    title: 'indeterminate',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          indeterminate
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          indeterminate
        />
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
