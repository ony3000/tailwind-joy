import { Textarea as JoyTextarea } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaColors() {
  return (
    <DisplayStand>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <JoyTextarea placeholder="Type in here..." color="primary" />
        <JoyTextarea placeholder="Type in here..." color="neutral" />
        <JoyTextarea placeholder="Type in here..." color="danger" />
        <JoyTextarea placeholder="Type in here..." color="success" />
        <JoyTextarea placeholder="Type in here..." color="warning" />
      </Box>
    </DisplayStand>
  );
}
