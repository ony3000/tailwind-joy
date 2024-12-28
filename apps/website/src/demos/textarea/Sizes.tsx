import { Textarea as JoyTextarea } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaSizes() {
  return (
    <DisplayStand>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <JoyTextarea size="sm" placeholder="Small" />
        <JoyTextarea size="md" placeholder="Medium" />
        <JoyTextarea size="lg" placeholder="Large" />
      </Box>
    </DisplayStand>
  );
}
