import { Avatar as JoyAvatar } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarVariants() {
  return (
    <DisplayStand>
      <Box className="flex gap-4">
        <JoyAvatar variant="solid" />
        <JoyAvatar variant="soft" />
        <JoyAvatar variant="outlined" />
        <JoyAvatar variant="plain" />
      </Box>
    </DisplayStand>
  );
}
