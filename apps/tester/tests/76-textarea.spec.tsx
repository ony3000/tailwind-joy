import {
  Textarea as JoyTextarea,
  Box as JoyBox,
  Button as JoyButton,
  IconButton as JoyIconButton,
  Typography as JoyTypography,
} from '@mui/joy';
import {
  Textarea as TJTextarea,
  Box as TJBox,
  Button as TJButton,
  IconButton as TJIconButton,
  Typography as TJTypography,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[300px] w-[400px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterStates: ['default', 'hover', 'focus-visible', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJTextarea
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
        <JoyTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          sx={{
            '--Textarea-focusedInset': 'var(--any,)',
            '--Textarea-focusedThickness': '0.25rem',
            '--Textarea-focusedHighlight': 'rgba(13,110,253,0.25)',
            '&::before': {
              transition: 'box-shadow 0.15s ease-in-out',
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
        <TJTextarea
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
            [&.tj-textarea-root]:[--Textarea-focusedHighlight:rgba(13,110,253,0.25)]
            [&.tj-textarea-root]:[--Textarea-focusedInset:var(--any,)]
            [&.tj-textarea-root]:[--Textarea-focusedThickness:0.25rem]
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
        <JoyTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          error
          defaultValue="Oh no! Something is definitely wrong."
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          error
          defaultValue="Oh no! Something is definitely wrong."
        />
      );
    },
  },
  {
    title: 'minRows',
    alterStates: ['default', 'hover', 'focus-visible', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          minRows={3}
          defaultValue="Lorem ipsum dolor sit amet"
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          minRows={3}
          defaultValue="Lorem ipsum dolor sit amet"
        />
      );
    },
  },
  {
    title: 'maxRows',
    alterStates: ['default', 'hover', 'focus-visible', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          maxRows={3}
          defaultValue={'Lorem\nipsum\ndolor\nsit\namet'}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          maxRows={3}
          defaultValue={'Lorem\nipsum\ndolor\nsit\namet'}
        />
      );
    },
  },
  {
    title: 'decorators',
    alterStates: ['default', 'hover', 'focus-visible', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          startDecorator={
            <JoyBox sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
              <JoyIconButton variant="outlined">👍</JoyIconButton>
              <JoyIconButton variant="outlined">🏖</JoyIconButton>
              <JoyIconButton variant="outlined">😍</JoyIconButton>
              <JoyButton variant="outlined" color="neutral" className="ml-auto">
                See all
              </JoyButton>
            </JoyBox>
          }
          endDecorator={
            <JoyTypography level="body-xs" sx={{ ml: 'auto' }}>
              0 character(s)
            </JoyTypography>
          }
          sx={{ width: 300 }}
        />
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJTextarea
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled={state === 'disabled'}
          placeholder="Type in here..."
          startDecorator={
            <TJBox className="flex flex-1 gap-1">
              <TJIconButton variant="outlined">👍</TJIconButton>
              <TJIconButton variant="outlined">🏖</TJIconButton>
              <TJIconButton variant="outlined">😍</TJIconButton>
              <TJButton variant="outlined" color="neutral" className="ml-auto">
                See all
              </TJButton>
            </TJBox>
          }
          endDecorator={
            <TJTypography level="body-xs" className="ml-auto">
              0 character(s)
            </TJTypography>
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
