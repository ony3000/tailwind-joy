import { LinearProgress, Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function LinearProgressColors() {
  return (
    <DisplayStand>
      <Stack spacing="16px" className="w-full">
        <LinearProgress color="primary" />
        <LinearProgress color="neutral" />
        <LinearProgress color="danger" />
        <LinearProgress color="success" />
        <LinearProgress color="warning" />
      </Stack>
    </DisplayStand>
  );
}
