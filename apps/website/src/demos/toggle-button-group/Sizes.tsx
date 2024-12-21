import {
  Button as JoyButton,
  ToggleButtonGroup as JoyToggleButtonGroup,
} from '@mui/joy';
import { useState } from 'react';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

type Size = 'sm' | 'md' | 'lg';

export function ToggleButtonGroupSizes() {
  const [value, setValue] = useState<Size | null>('md');

  return (
    <DisplayStand>
      <JoyToggleButtonGroup
        size={value || undefined}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <JoyButton value="sm">Small</JoyButton>
        <JoyButton value="md">Medium</JoyButton>
        <JoyButton value="lg">Large</JoyButton>
      </JoyToggleButtonGroup>
    </DisplayStand>
  );
}
