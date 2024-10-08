import { MdSettings } from 'react-icons/md';
import { Button, ButtonGroup, IconButton } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonGroupDisabled() {
  return (
    <DisplayStand>
      <ButtonGroup disabled>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <IconButton disabled={false}>
          <MdSettings className={iconClass()} />
        </IconButton>
      </ButtonGroup>
    </DisplayStand>
  );
}
