import { Avatar, Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarSizes() {
  return (
    <DisplayStand>
      <Box className="flex items-center gap-4">
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
      </Box>
    </DisplayStand>
  );
}
