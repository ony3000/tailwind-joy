import { MdSettings } from 'react-icons/md';
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
} from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonGroupVertical() {
  return (
    <DisplayStand>
      <Stack spacing="16px" direction="row" className="items-center">
        <ButtonGroup orientation="vertical" variant="solid">
          <Button>One</Button>
          <Button disabled>Two</Button>
          <Button>Three</Button>
          <IconButton>
            <MdSettings className={iconClass()} />
          </IconButton>
        </ButtonGroup>
        <ButtonGroup orientation="vertical" variant="soft">
          <Button>One</Button>
          <Button disabled>Two</Button>
          <Button>Three</Button>
          <IconButton>
            <MdSettings className={iconClass()} />
          </IconButton>
        </ButtonGroup>
        <ButtonGroup orientation="vertical" variant="outlined">
          <Button>One</Button>
          <Button disabled>Two</Button>
          <Button>Three</Button>
          <IconButton>
            <MdSettings className={iconClass()} />
          </IconButton>
        </ButtonGroup>
        <ButtonGroup orientation="vertical" variant="plain">
          <Button>One</Button>
          <Button disabled>Two</Button>
          <Button>Three</Button>
          <IconButton>
            <MdSettings className={iconClass()} />
          </IconButton>
        </ButtonGroup>
      </Stack>
    </DisplayStand>
  );
}
