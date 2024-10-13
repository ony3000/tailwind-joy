import {
  Box,
  Button,
  CircularProgress,
  IconButton,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CircularProgressWithButton() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap items-center justify-center gap-4">
        <Button startDecorator={<CircularProgress variant="solid" />}>
          Loading...
        </Button>
        <IconButton>
          <CircularProgress />
        </IconButton>
      </Box>
    </DisplayStand>
  );
}
