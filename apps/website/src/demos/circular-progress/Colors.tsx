import { Box, CircularProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CircularProgressColors() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap items-center justify-center gap-4">
        <CircularProgress color="primary" />
        <CircularProgress color="neutral" />
        <CircularProgress color="danger" />
        <CircularProgress color="success" />
        <CircularProgress color="warning" />
      </Box>
    </DisplayStand>
  );
}
