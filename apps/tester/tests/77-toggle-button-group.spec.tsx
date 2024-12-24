import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
} from 'react-icons/md';
import {
  ToggleButtonGroup as JoyToggleButtonGroup,
  Button as JoyButton,
  IconButton as JoyIconButton,
} from '@mui/joy';
import {
  ToggleButtonGroup as TJToggleButtonGroup,
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
        <JoyToggleButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          value={['default', 'bold']}
        >
          <JoyButton value="default">Default</JoyButton>
          <JoyIconButton value="bold">
            <FormatBoldIcon />
          </JoyIconButton>
          <JoyIconButton value="italic">
            <FormatItalicIcon />
          </JoyIconButton>
          <JoyIconButton value="underlined">
            <FormatUnderlinedIcon />
          </JoyIconButton>
        </JoyToggleButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJToggleButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          value={['default', 'bold']}
        >
          <TJButton value="default">Default</TJButton>
          <TJIconButton value="bold">
            <MdFormatBold className={iconClassName} />
          </TJIconButton>
          <TJIconButton value="italic">
            <MdFormatItalic className={iconClassName} />
          </TJIconButton>
          <TJIconButton value="underlined">
            <MdFormatUnderlined className={iconClassName} />
          </TJIconButton>
        </TJToggleButtonGroup>
      );
    },
  },
  {
    title: 'disabled',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyToggleButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          value={['default', 'bold']}
          disabled
        >
          <JoyButton value="default">Default</JoyButton>
          <JoyIconButton value="bold">
            <FormatBoldIcon />
          </JoyIconButton>
          <JoyIconButton value="italic">
            <FormatItalicIcon />
          </JoyIconButton>
          <JoyIconButton value="underlined">
            <FormatUnderlinedIcon />
          </JoyIconButton>
        </JoyToggleButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJToggleButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          value={['default', 'bold']}
          disabled
        >
          <TJButton value="default">Default</TJButton>
          <TJIconButton value="bold">
            <MdFormatBold className={iconClassName} />
          </TJIconButton>
          <TJIconButton value="italic">
            <MdFormatItalic className={iconClassName} />
          </TJIconButton>
          <TJIconButton value="underlined">
            <MdFormatUnderlined className={iconClassName} />
          </TJIconButton>
        </TJToggleButtonGroup>
      );
    },
  },
  {
    title: 'spacing',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyToggleButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          value={['default', 'bold']}
          spacing={2}
        >
          <JoyButton value="default">Default</JoyButton>
          <JoyIconButton value="bold">
            <FormatBoldIcon />
          </JoyIconButton>
          <JoyIconButton value="italic">
            <FormatItalicIcon />
          </JoyIconButton>
          <JoyIconButton value="underlined">
            <FormatUnderlinedIcon />
          </JoyIconButton>
        </JoyToggleButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJToggleButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          value={['default', 'bold']}
          spacing="16px"
        >
          <TJButton value="default">Default</TJButton>
          <TJIconButton value="bold">
            <MdFormatBold className={iconClassName} />
          </TJIconButton>
          <TJIconButton value="italic">
            <MdFormatItalic className={iconClassName} />
          </TJIconButton>
          <TJIconButton value="underlined">
            <MdFormatUnderlined className={iconClassName} />
          </TJIconButton>
        </TJToggleButtonGroup>
      );
    },
  },
  {
    title: 'vertical group',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyToggleButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          value={['default', 'bold']}
          orientation="vertical"
        >
          <JoyButton value="default">Default</JoyButton>
          <JoyIconButton value="bold">
            <FormatBoldIcon />
          </JoyIconButton>
          <JoyIconButton value="italic">
            <FormatItalicIcon />
          </JoyIconButton>
          <JoyIconButton value="underlined">
            <FormatUnderlinedIcon />
          </JoyIconButton>
        </JoyToggleButtonGroup>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <TJToggleButtonGroup
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          value={['default', 'bold']}
          orientation="vertical"
        >
          <TJButton value="default">Default</TJButton>
          <TJIconButton value="bold">
            <MdFormatBold className={iconClassName} />
          </TJIconButton>
          <TJIconButton value="italic">
            <MdFormatItalic className={iconClassName} />
          </TJIconButton>
          <TJIconButton value="underlined">
            <MdFormatUnderlined className={iconClassName} />
          </TJIconButton>
        </TJToggleButtonGroup>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
