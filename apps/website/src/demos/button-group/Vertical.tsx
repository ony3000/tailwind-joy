import { MdSettings } from 'react-icons/md';
import { Box, Button, ButtonGroup, IconButton } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonGroupVertical() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="flex flex-wrap items-center justify-center gap-4">
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
      </Box>
    </DisplayStand>
  );
}
