import { Box, Button } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonBasics() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-4">
        <Button>Button</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </Box>
    </DisplayStand>
  );
}
