import { useState } from 'react';
import { Button, ToggleButtonGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

type Size = 'sm' | 'md' | 'lg';

export function ToggleButtonGroupSizes() {
  const [value, setValue] = useState<Size | null>('md');

  return (
    <DisplayStand>
      <ToggleButtonGroup
        size={value || undefined}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <Button value="sm">Small</Button>
        <Button value="md">Medium</Button>
        <Button value="lg">Large</Button>
      </ToggleButtonGroup>
    </DisplayStand>
  );
}
