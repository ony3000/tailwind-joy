import { MdSend } from 'react-icons/md';
import { Button, Stack } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonLoadingPosition() {
  return (
    <DisplayStand>
      <Stack spacing="16px" direction="row">
        <Button loading loadingPosition="start">
          Start
        </Button>
        <Button
          loading
          loadingPosition="end"
          endDecorator={<MdSend className={iconClass()} />}
        >
          End
        </Button>
      </Stack>
    </DisplayStand>
  );
}
