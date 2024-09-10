import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { MdClose, MdDone } from 'react-icons/md';
import { Checkbox as JoyCheckbox } from '@mui/joy';
import { Checkbox as TJCheckbox } from 'tailwind-joy/components';

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
          checked={false}
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
        <JoyCheckbox
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
        <TJCheckbox
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
        <JoyCheckbox
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
        <TJCheckbox
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
    alterStates: ['default', 'hover', 'focus-visible'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          uncheckedIcon={<DoneIcon />}
          sx={{
            '&:not(:has(:checked)) svg': { opacity: 0 },
            '&:not(:has(:checked)):hover svg': { opacity: 1 },
            '&:not(:has(:checked)):has(:focus-visible) svg': { opacity: 1 },
          }}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state, iconClassName }) {
      return (
        <TJCheckbox
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
        <JoyCheckbox
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
        <TJCheckbox
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
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
          sx={{
            '& > .MuiCheckbox-checkbox': { position: 'relative' },
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
          checked={false}
          className="[&>.tj-checkbox-checkbox]:relative"
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
          <JoyCheckbox
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
          <TJCheckbox
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
  {
    title: 'indeterminate',
    alterStates: ['default', 'hover', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyCheckbox
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          label="Label"
          checked={false}
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
          checked={false}
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
