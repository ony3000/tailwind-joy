import { useState } from 'react';
import { Button, ToggleButtonGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

type Color = 'primary' | 'neutral' | 'danger' | 'success' | 'warning';

export function ToggleButtonGroupColors() {
  const [value, setValue] = useState<Color | null>('neutral');

  return (
    <DisplayStand>
      <ToggleButtonGroup
        color={value || undefined}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <Button value="primary">Primary</Button>
        <Button value="neutral">Neutral</Button>
        <Button value="danger">Danger</Button>
        <Button value="success">Success</Button>
        <Button value="warning">Warning</Button>
      </ToggleButtonGroup>
    </DisplayStand>
  );
}
