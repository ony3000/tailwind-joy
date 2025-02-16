import { Avatar, Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarVariants() {
  return (
    <DisplayStand>
      <Box className="flex gap-4">
        <Avatar variant="solid" />
        <Avatar variant="soft" />
        <Avatar variant="outlined" />
        <Avatar variant="plain" />
      </Box>
    </DisplayStand>
  );
}
