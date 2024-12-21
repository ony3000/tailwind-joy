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

export function ToggleButtonGroupSpacing() {
  const [value, setValue] = useState(['default']);

  return (
    <DisplayStand>
      <JoyToggleButtonGroup
        spacing={2}
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
