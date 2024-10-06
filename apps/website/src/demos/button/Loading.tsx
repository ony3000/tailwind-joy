import { Box, Button } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonLoading() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-4">
        <Button loading variant="solid">
          Solid
        </Button>
        <Button loading variant="soft">
          Soft
        </Button>
        <Button loading variant="outlined">
          Outlined
        </Button>
        <Button loading variant="plain">
          Plain
        </Button>
      </Box>
    </DisplayStand>
  );
}
