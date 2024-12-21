import { Button, Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonLoadingIndicator() {
  return (
    <DisplayStand>
      <Stack spacing="16px" direction="row">
        <Button loading>Default</Button>
        <Button loading loadingIndicator="Loading...">
          Custom
        </Button>
      </Stack>
    </DisplayStand>
  );
}
