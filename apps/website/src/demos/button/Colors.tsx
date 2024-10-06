import { Box, Button } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonColors() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-4">
        <Button color="primary">Primary</Button>
        <Button color="neutral">Neutral</Button>
        <Button color="danger">Danger</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
      </Box>
    </DisplayStand>
  );
}
