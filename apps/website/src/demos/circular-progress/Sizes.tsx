import { Box, CircularProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CircularProgressSizes() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap items-center justify-center gap-4">
        <CircularProgress size="sm" />
        <CircularProgress size="md" />
        <CircularProgress size="lg" />
      </Box>
    </DisplayStand>
  );
}
