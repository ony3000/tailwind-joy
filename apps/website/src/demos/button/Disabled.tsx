import { Box, Button } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonDisabled() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-4">
        <Button disabled variant="solid">
          Solid
        </Button>
        <Button disabled variant="soft">
          Soft
        </Button>
        <Button disabled variant="outlined">
          Outlined
        </Button>
        <Button disabled variant="plain">
          Plain
        </Button>
      </Box>
    </DisplayStand>
  );
}
