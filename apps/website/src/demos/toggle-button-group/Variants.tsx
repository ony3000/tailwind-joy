import {
  Button as JoyButton,
  ToggleButtonGroup as JoyToggleButtonGroup,
} from '@mui/joy';
import { useState } from 'react';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

type Variant = 'solid' | 'soft' | 'outlined' | 'plain';

export function ToggleButtonGroupVariants() {
  const [value, setValue] = useState<Variant | null>('outlined');

  return (
    <DisplayStand>
      <JoyToggleButtonGroup
        variant={value || undefined}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <JoyButton value="solid">Solid</JoyButton>
        <JoyButton value="soft">Soft</JoyButton>
        <JoyButton value="outlined">Outlined</JoyButton>
        <JoyButton value="plain">Plain</JoyButton>
      </JoyToggleButtonGroup>
    </DisplayStand>
  );
}
