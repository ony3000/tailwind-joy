import { useState } from 'react';
import { Radio, RadioGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioGroupControlled() {
  const [variant, setVariant] = useState('outlined');

  return (
    <DisplayStand>
      <RadioGroup
        name="radio-group-controlled"
        value={variant}
        onChange={(e) => setVariant(e.currentTarget.value)}
      >
        <Radio value="solid" label="Solid" variant={variant} />
        <Radio value="soft" label="Soft" variant={variant} />
        <Radio value="outlined" label="Outlined" variant={variant} />
        <Radio value="plain" label="Plain" variant={variant} />
      </RadioGroup>
    </DisplayStand>
  );
}
