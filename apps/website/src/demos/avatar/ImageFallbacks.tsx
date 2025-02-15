import { Avatar as JoyAvatar } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarImageFallbacks() {
  return (
    <DisplayStand>
      <Box className="flex gap-4">
        <JoyAvatar alt="Remy Sharp" src="/broken-image.jpg">
          BT
        </JoyAvatar>
        <JoyAvatar alt="Remy Sharp" src="/broken-image.jpg" />
        <JoyAvatar src="/broken-image.jpg" />
      </Box>
    </DisplayStand>
  );
}
