import SettingsIcon from '@mui/icons-material/Settings';
import { MdSettings } from 'react-icons/md';
import {
  ButtonGroup as JoyButtonGroup,
  Button as JoyButton,
  IconButton as JoyIconButton,
} from '@mui/joy';
import {
  ButtonGroup as TJButtonGroup,
  Button as TJButton,
  IconButton as TJIconButton,
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
        <JoyButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <JoyButton>One</JoyButton>
          <JoyButton>Two</JoyButton>
          <JoyButton>Three</JoyButton>
          <JoyIconButton>
            <SettingsIcon />
          </JoyIconButton>
        </JoyButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <TJButton>One</TJButton>
          <TJButton>Two</TJButton>
          <TJButton>Three</TJButton>
          <TJIconButton>
            <MdSettings className={iconClassName} />
          </TJIconButton>
        </TJButtonGroup>
      );
    },
  },
  {
    title: 'disabled',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled
        >
          <JoyButton>One</JoyButton>
          <JoyButton>Two</JoyButton>
          <JoyButton>Three</JoyButton>
          <JoyIconButton>
            <SettingsIcon />
          </JoyIconButton>
        </JoyButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled
        >
          <TJButton>One</TJButton>
          <TJButton>Two</TJButton>
          <TJButton>Three</TJButton>
          <TJIconButton>
            <MdSettings className={iconClassName} />
          </TJIconButton>
        </TJButtonGroup>
      );
    },
  },
  {
    title: 'disabled (override by children)',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled
        >
          <JoyButton>One</JoyButton>
          <JoyButton>Two</JoyButton>
          <JoyButton>Three</JoyButton>
          <JoyIconButton disabled={false}>
            <SettingsIcon />
          </JoyIconButton>
        </JoyButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          disabled
        >
          <TJButton>One</TJButton>
          <TJButton>Two</TJButton>
          <TJButton>Three</TJButton>
          <TJIconButton disabled={false}>
            <MdSettings className={iconClassName} />
          </TJIconButton>
        </TJButtonGroup>
      );
    },
  },
  {
    title: 'spacing',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          spacing="0.5rem"
        >
          <JoyButton>One</JoyButton>
          <JoyButton>Two</JoyButton>
          <JoyButton>Three</JoyButton>
          <JoyIconButton>
            <SettingsIcon />
          </JoyIconButton>
        </JoyButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          spacing="0.5rem"
        >
          <TJButton>One</TJButton>
          <TJButton>Two</TJButton>
          <TJButton>Three</TJButton>
          <TJIconButton>
            <MdSettings className={iconClassName} />
          </TJIconButton>
        </TJButtonGroup>
      );
    },
  },
  {
    title: 'vertical group',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          orientation="vertical"
        >
          <JoyButton>One</JoyButton>
          <JoyButton disabled>Two</JoyButton>
          <JoyButton>Three</JoyButton>
        </JoyButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          orientation="vertical"
        >
          <TJButton>One</TJButton>
          <TJButton disabled>Two</TJButton>
          <TJButton>Three</TJButton>
        </TJButtonGroup>
      );
    },
  },
  {
    title: 'buttonFlex: 1',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          buttonFlex={1}
        >
          <JoyButton>One</JoyButton>
          <JoyButton>Two</JoyButton>
          <JoyButton>Three</JoyButton>
          <JoyIconButton>
            <SettingsIcon />
          </JoyIconButton>
        </JoyButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          buttonFlex={1}
        >
          <TJButton>One</TJButton>
          <TJButton>Two</TJButton>
          <TJButton>Three</TJButton>
          <TJIconButton>
            <MdSettings className={iconClassName} />
          </TJIconButton>
        </TJButtonGroup>
      );
    },
  },
  {
    title: 'buttonFlex: 0 1 80px',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          buttonFlex="0 1 80px"
        >
          <JoyButton>One</JoyButton>
          <JoyButton>Two</JoyButton>
          <JoyButton>Three</JoyButton>
          <JoyIconButton>
            <SettingsIcon />
          </JoyIconButton>
        </JoyButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          buttonFlex="0 1 80px"
        >
          <TJButton>One</TJButton>
          <TJButton>Two</TJButton>
          <TJButton>Three</TJButton>
          <TJIconButton>
            <MdSettings className={iconClassName} />
          </TJIconButton>
        </TJButtonGroup>
      );
    },
  },
  {
    title: 'separator color',
    alterVariants: ['solid', 'soft', 'plain'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          sx={{ '--ButtonGroup-separatorColor': '#4f46e5' }}
        >
          <JoyButton>One</JoyButton>
          <JoyButton>Two</JoyButton>
          <JoyButton>Three</JoyButton>
          <JoyIconButton>
            <SettingsIcon />
          </JoyIconButton>
        </JoyButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          style={{
            // @ts-ignore
            '--ButtonGroup-separatorColor': '#4f46e5',
          }}
        >
          <TJButton>One</TJButton>
          <TJButton>Two</TJButton>
          <TJButton>Three</TJButton>
          <TJIconButton>
            <MdSettings className={iconClassName} />
          </TJIconButton>
        </TJButtonGroup>
      );
    },
  },
  {
    title: 'pill button group',
    alterVariants: ['outlined'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          sx={{ '--ButtonGroup-radius': '40px' }}
        >
          <JoyButton>One</JoyButton>
          <JoyButton>Two</JoyButton>
          <JoyButton>Three</JoyButton>
          <JoyIconButton>
            <SettingsIcon />
          </JoyIconButton>
        </JoyButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          style={{
            // @ts-ignore
            '--ButtonGroup-radius': '40px',
          }}
        >
          <TJButton>One</TJButton>
          <TJButton>Two</TJButton>
          <TJButton>Three</TJButton>
          <TJIconButton>
            <MdSettings className={iconClassName} />
          </TJIconButton>
        </TJButtonGroup>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
