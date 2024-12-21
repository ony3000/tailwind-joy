import { LinearProgress, Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function LinearProgressSizes() {
  return (
    <DisplayStand>
      <Stack spacing="16px" className="w-full">
        <LinearProgress size="sm" />
        <LinearProgress size="md" />
        <LinearProgress size="lg" />
      </Stack>
    </DisplayStand>
  );
}
