import { Textarea as JoyTextarea } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaVariants() {
  return (
    <DisplayStand>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <JoyTextarea placeholder="Type in here..." variant="solid" />
        <JoyTextarea placeholder="Type in here..." variant="soft" />
        <JoyTextarea placeholder="Type in here..." variant="outlined" />
        <JoyTextarea placeholder="Type in here..." variant="plain" />
      </Box>
    </DisplayStand>
  );
}
