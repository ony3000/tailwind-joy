import { Box, CircularProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CircularProgressDeterminate() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap items-center justify-center gap-4">
        <CircularProgress determinate value={25} />
        <CircularProgress determinate value={50} />
        <CircularProgress determinate value={75} />
        <CircularProgress determinate value={100} />
      </Box>
    </DisplayStand>
  );
}
