import { useState } from 'react';
import { MdLocalFireDepartment, MdWaves } from 'react-icons/md';
import { Switch } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { twMerge } from 'tailwind-merge';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SwitchDecorators() {
  const [checked, setChecked] = useState(false);

  return (
    <DisplayStand>
      <Switch
        color={checked ? 'primary' : 'danger'}
        startDecorator={
          <MdLocalFireDepartment
            className={twMerge(
              iconClass(),
              checked
                ? '[--Icon-color:var(--joy-neutral-600)] dark:[--Icon-color:var(--joy-neutral-400)]'
                : '[--Icon-color:var(--joy-danger-600)]',
            )}
          />
        }
        endDecorator={
          <MdWaves
            className={twMerge(
              iconClass(),
              checked
                ? '[--Icon-color:var(--joy-primary-500)]'
                : '[--Icon-color:var(--joy-neutral-600)] dark:[--Icon-color:var(--joy-neutral-400)]',
            )}
          />
        }
        checked={checked}
        onChange={(e) => setChecked(e.currentTarget.checked)}
      />
    </DisplayStand>
  );
}
