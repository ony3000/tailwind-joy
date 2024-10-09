import { MdClose } from 'react-icons/md';
import { Checkbox } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxIcons() {
  return (
    <DisplayStand>
      <Checkbox
        label="I have an icon when unchecked"
        uncheckedIcon={<MdClose className={iconClass()} />}
      />
    </DisplayStand>
  );
}
