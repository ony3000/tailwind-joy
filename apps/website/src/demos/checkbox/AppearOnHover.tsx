import { MdCheck } from 'react-icons/md';
import { Checkbox } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxAppearOnHover() {
  return (
    <DisplayStand>
      <Checkbox
        label="My unchecked icon appears on hover"
        uncheckedIcon={<MdCheck className={iconClass()} />}
        className="[&:has(:checked)_svg]:opacity-100 [&:has(:focus-visible)_svg]:opacity-100 [&:hover_svg]:opacity-100 [&_svg]:opacity-0"
      />
    </DisplayStand>
  );
}
