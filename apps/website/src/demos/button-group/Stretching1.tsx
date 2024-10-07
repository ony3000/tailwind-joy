import { MdSettings } from 'react-icons/md';
import { Button, ButtonGroup, IconButton } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonGroupStretching1() {
  return (
    <DisplayStand>
      <ButtonGroup buttonFlex={1} className="w-[350px] max-w-full">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <IconButton>
          <MdSettings className={iconClass()} />
        </IconButton>
      </ButtonGroup>
    </DisplayStand>
  );
}
