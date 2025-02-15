import { Avatar as JoyAvatar } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarSizes() {
  return (
    <DisplayStand>
      <Box className="flex items-center gap-4">
        <JoyAvatar size="sm" />
        <JoyAvatar size="md" />
        <JoyAvatar size="lg" />
      </Box>
    </DisplayStand>
  );
}
