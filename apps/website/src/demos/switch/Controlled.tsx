import { useState } from 'react';
import { Switch } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SwitchControlled() {
  const [checked, setChecked] = useState(false);

  return (
    <DisplayStand>
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.currentTarget.checked)}
      />
    </DisplayStand>
  );
}
