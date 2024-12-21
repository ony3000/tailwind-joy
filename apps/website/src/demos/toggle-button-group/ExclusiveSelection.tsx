import {
  Button as JoyButton,
  IconButton as JoyIconButton,
  ToggleButtonGroup as JoyToggleButtonGroup,
} from '@mui/joy';
import { useState } from 'react';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
} from 'react-icons/md';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ToggleButtonGroupExclusiveSelection() {
  const [value, setValue] = useState<string | null>('default');

  return (
    <DisplayStand>
      <JoyToggleButtonGroup
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <JoyButton value="default">Default</JoyButton>
        <JoyIconButton value="bold">
          <MdFormatBold className={iconClass()} />
        </JoyIconButton>
        <JoyIconButton value="italic">
          <MdFormatItalic className={iconClass()} />
        </JoyIconButton>
        <JoyIconButton value="underlined">
          <MdFormatUnderlined className={iconClass()} />
        </JoyIconButton>
      </JoyToggleButtonGroup>
    </DisplayStand>
  );
}
