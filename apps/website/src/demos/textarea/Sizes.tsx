import { Box, Textarea } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaSizes() {
  return (
    <DisplayStand>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <Textarea size="sm" placeholder="Small" />
        <Textarea size="md" placeholder="Medium" />
        <Textarea size="lg" placeholder="Large" />
      </Box>
    </DisplayStand>
  );
}
