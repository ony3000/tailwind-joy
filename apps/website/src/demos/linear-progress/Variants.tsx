import { Box, LinearProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function LinearProgressVariants() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="w-full space-y-4">
        <LinearProgress variant="solid" />
        <LinearProgress variant="soft" />
        <LinearProgress variant="outlined" />
        <LinearProgress variant="plain" />
      </Box>
    </DisplayStand>
  );
}
