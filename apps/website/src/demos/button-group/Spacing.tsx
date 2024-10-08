import { MdSettings } from 'react-icons/md';
import { Button, ButtonGroup, IconButton } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonGroupSpacing() {
  return (
    <DisplayStand>
      <ButtonGroup spacing="0.5rem">
        <Button>One</Button>
        <Button disabled>Two</Button>
        <Button>Three</Button>
        <IconButton>
          <MdSettings className={iconClass()} />
        </IconButton>
      </ButtonGroup>
    </DisplayStand>
  );
}
