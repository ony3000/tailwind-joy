import { MdFavoriteBorder } from 'react-icons/md';
import { Box, IconButton } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function IconButtonBasics() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap items-center justify-center gap-4">
        <IconButton variant="solid">
          <MdFavoriteBorder className={iconClass()} />
        </IconButton>
        <IconButton variant="soft">
          <MdFavoriteBorder className={iconClass()} />
        </IconButton>
        <IconButton variant="outlined">
          <MdFavoriteBorder className={iconClass()} />
        </IconButton>
        <IconButton variant="plain">
          <MdFavoriteBorder className={iconClass()} />
        </IconButton>
      </Box>
    </DisplayStand>
  );
}
