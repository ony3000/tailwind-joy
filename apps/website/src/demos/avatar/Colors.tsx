import { Avatar as JoyAvatar } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarColors() {
  return (
    <DisplayStand>
      <Box className="flex items-center gap-4">
        <JoyAvatar color="primary" />
        <JoyAvatar color="neutral" />
        <JoyAvatar color="danger" />
        <JoyAvatar color="success" />
        <JoyAvatar color="warning" />
      </Box>
    </DisplayStand>
  );
}
