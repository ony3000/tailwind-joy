import { Box, LinearProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function LinearProgressSizes() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="w-full space-y-4">
        <LinearProgress size="sm" />
        <LinearProgress size="md" />
        <LinearProgress size="lg" />
      </Box>
    </DisplayStand>
  );
}
