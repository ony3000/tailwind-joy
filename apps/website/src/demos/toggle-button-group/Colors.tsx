import {
  Button as JoyButton,
  ToggleButtonGroup as JoyToggleButtonGroup,
} from '@mui/joy';
import { useState } from 'react';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

type Color = 'primary' | 'neutral' | 'danger' | 'success' | 'warning';

export function ToggleButtonGroupColors() {
  const [value, setValue] = useState<Color | null>('neutral');

  return (
    <DisplayStand>
      <JoyToggleButtonGroup
        color={value || undefined}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <JoyButton value="primary">Primary</JoyButton>
        <JoyButton value="neutral">Neutral</JoyButton>
        <JoyButton value="danger">Danger</JoyButton>
        <JoyButton value="success">Success</JoyButton>
        <JoyButton value="warning">Warning</JoyButton>
      </JoyToggleButtonGroup>
    </DisplayStand>
  );
}
