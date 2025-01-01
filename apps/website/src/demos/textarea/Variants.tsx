import { Box, Textarea } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaVariants() {
  return (
    <DisplayStand>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <Textarea placeholder="Type in here..." variant="solid" />
        <Textarea placeholder="Type in here..." variant="soft" />
        <Textarea placeholder="Type in here..." variant="outlined" />
        <Textarea placeholder="Type in here..." variant="plain" />
      </Box>
    </DisplayStand>
  );
}
