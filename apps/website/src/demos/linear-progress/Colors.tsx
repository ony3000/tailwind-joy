import { Box, LinearProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function LinearProgressColors() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="w-full space-y-4">
        <LinearProgress color="primary" />
        <LinearProgress color="neutral" />
        <LinearProgress color="danger" />
        <LinearProgress color="success" />
        <LinearProgress color="warning" />
      </Box>
    </DisplayStand>
  );
}
