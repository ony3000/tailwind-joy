import { Box, Textarea } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaColors() {
  return (
    <DisplayStand>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <Textarea placeholder="Type in here..." color="primary" />
        <Textarea placeholder="Type in here..." color="neutral" />
        <Textarea placeholder="Type in here..." color="danger" />
        <Textarea placeholder="Type in here..." color="success" />
        <Textarea placeholder="Type in here..." color="warning" />
      </Box>
    </DisplayStand>
  );
}
