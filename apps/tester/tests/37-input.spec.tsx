import { Fragment } from 'react';
import {
  Input as JoyInput,
  Divider as JoyDivider,
  Typography as JoyTypography,
} from '@mui/joy';
import {
  Input as TJInput,
  Divider as TJDivider,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[100px] w-[400px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterStates: ['default', 'hover', 'focus-visible', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyInput
          placeholder="Type in here..."
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJInput
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
        />
      );
    },
  },
  {
    title: 'focused ring',
    alterStates: ['default', 'hover', 'focus-visible', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyInput
          placeholder="Type in here..."
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          sx={{
            '--Input-focusedInset': 'var(--any,)',
            '--Input-focusedThickness': '0.25rem',
            '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
            '&::before': {
              transition: 'box-shadow .15s ease-in-out',
            },
            '&:focus-within': {
              borderColor: '#86b7fe',
            },
          }}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJInput
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          className="
            before:transition-shadow
            before:ease-[ease-in-out]
            focus-within:border-[#86b7fe]
            [&.tj-input-root]:[--Input-focusedHighlight:rgba(13,110,253,.25)]
            [&.tj-input-root]:[--Input-focusedInset:var(--any,)]
            [&.tj-input-root]:[--Input-focusedThickness:0.25rem]
          "
        />
      );
    },
  },
  {
    title: 'validation',
    alterStates: ['default', 'hover', 'focus-visible', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyInput
          placeholder="Type in here..."
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          error
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJInput
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          error
        />
      );
    },
  },
  {
    title: 'decorators',
    alterStates: ['default', 'hover', 'focus-visible', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyInput
          placeholder="Type in here..."
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          startDecorator="$"
          endDecorator={
            <Fragment>
              <JoyDivider orientation="vertical" />
              <JoyTypography sx={{ ml: 1.5 }}>US dollar</JoyTypography>
            </Fragment>
          }
          sx={{ width: 300 }}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJInput
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          startDecorator="$"
          endDecorator={
            <Fragment>
              <TJDivider orientation="vertical" />
              <p className="text-joy-neutral-700 dark:text-joy-neutral-300 ml-3 text-[1rem]">
                US dollar
              </p>
            </Fragment>
          }
          className="w-[300px]"
        />
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
