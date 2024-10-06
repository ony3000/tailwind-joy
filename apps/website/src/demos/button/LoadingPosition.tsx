import { MdSend } from 'react-icons/md';
import { Box, Button } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonLoadingPosition() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="flex flex-wrap justify-center gap-4">
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
      </Box>
    </DisplayStand>
  );
}
