import { Avatar, Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarImageFallbacks() {
  return (
    <DisplayStand>
      <Box className="flex gap-4">
        <Avatar alt="Remy Sharp" src="/broken-image.jpg">
          BT
        </Avatar>
        <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
        <Avatar src="/broken-image.jpg" />
      </Box>
    </DisplayStand>
  );
}
