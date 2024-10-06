import { Box, Button } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonLoadingIndicator() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="flex flex-wrap justify-center gap-4">
        <Button loading>Default</Button>
        <Button loading loadingIndicator="Loading...">
          Custom
        </Button>
      </Box>
    </DisplayStand>
  );
}
