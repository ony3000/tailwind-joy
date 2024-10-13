import { Box, LinearProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function LinearProgressDeterminate() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="w-full space-y-4">
        <LinearProgress determinate value={25} />
        <LinearProgress determinate value={50} />
        <LinearProgress determinate value={75} />
        <LinearProgress determinate value={100} />
      </Box>
    </DisplayStand>
  );
}
