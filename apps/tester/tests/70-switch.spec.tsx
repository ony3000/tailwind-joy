import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import WavesRoundedIcon from '@mui/icons-material/WavesRounded';
import { MdLocalFireDepartment, MdWaves } from 'react-icons/md';
import { Switch as JoySwitch } from '@mui/joy';
import { Switch as TJSwitch } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[200px] w-[400px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoySwitch
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          checked={false}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJSwitch
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
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
        <JoySwitch
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          checked
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJSwitch
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          checked
        />
      );
    },
  },
  {
    title: 'decorators',
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    maxDiffPixels: 1,
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoySwitch
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          checked={false}
          startDecorator={
            <LocalFireDepartmentRoundedIcon
              // @ts-expect-error
              color={color}
            />
          }
          endDecorator={
            <WavesRoundedIcon
              // @ts-expect-error
              color={color}
            />
          }
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      const iconClassName = {
        primary:
          'select-none m-[var(--Icon-margin)] w-[1em] h-[1em] inline-block shrink-0 [font-size:var(--Icon-fontSize,1.5rem)] [color:var(--joy-primary-500)] dark:[color:var(--joy-primary-400)]',
        neutral:
          'select-none m-[var(--Icon-margin)] w-[1em] h-[1em] inline-block shrink-0 [font-size:var(--Icon-fontSize,1.5rem)] [color:var(--joy-neutral-500)] dark:[color:var(--joy-neutral-400)]',
        danger:
          'select-none m-[var(--Icon-margin)] w-[1em] h-[1em] inline-block shrink-0 [font-size:var(--Icon-fontSize,1.5rem)] [color:var(--joy-danger-500)] dark:[color:var(--joy-danger-400)]',
        success:
          'select-none m-[var(--Icon-margin)] w-[1em] h-[1em] inline-block shrink-0 [font-size:var(--Icon-fontSize,1.5rem)] [color:var(--joy-success-500)] dark:[color:var(--joy-success-400)]',
        warning:
          'select-none m-[var(--Icon-margin)] w-[1em] h-[1em] inline-block shrink-0 [font-size:var(--Icon-fontSize,1.5rem)] [color:var(--joy-warning-500)] dark:[color:var(--joy-warning-400)]',
      };

      return (
        <TJSwitch
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          checked={false}
          startDecorator={
            <MdLocalFireDepartment className={iconClassName[color]} />
          }
          endDecorator={<MdWaves className={iconClassName[color]} />}
        />
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
