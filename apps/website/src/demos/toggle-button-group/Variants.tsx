import { useState } from 'react';
import { Button, ToggleButtonGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

type Variant = 'solid' | 'soft' | 'outlined' | 'plain';

export function ToggleButtonGroupVariants() {
  const [value, setValue] = useState<Variant | null>('outlined');

  return (
    <DisplayStand>
      <ToggleButtonGroup
        variant={value || undefined}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <Button value="solid">Solid</Button>
        <Button value="soft">Soft</Button>
        <Button value="outlined">Outlined</Button>
        <Button value="plain">Plain</Button>
      </ToggleButtonGroup>
    </DisplayStand>
  );
}
