import { Box, CircularProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CircularProgressVariants() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap items-center justify-center gap-4">
        <CircularProgress variant="solid" />
        <CircularProgress variant="soft" />
        <CircularProgress variant="outlined" />
        <CircularProgress variant="plain" />
      </Box>
    </DisplayStand>
  );
}
