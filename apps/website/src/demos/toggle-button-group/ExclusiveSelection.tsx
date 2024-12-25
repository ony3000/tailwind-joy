import { useState } from 'react';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
} from 'react-icons/md';
import { Button, IconButton, ToggleButtonGroup } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ToggleButtonGroupExclusiveSelection() {
  const [value, setValue] = useState<string | null>('default');

  return (
    <DisplayStand>
      <ToggleButtonGroup
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <Button value="default">Default</Button>
        <IconButton value="bold">
          <MdFormatBold className={iconClass()} />
        </IconButton>
        <IconButton value="italic">
          <MdFormatItalic className={iconClass()} />
        </IconButton>
        <IconButton value="underlined">
          <MdFormatUnderlined className={iconClass()} />
        </IconButton>
      </ToggleButtonGroup>
    </DisplayStand>
  );
}
