import { LinearProgress, Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function LinearProgressVariants() {
  return (
    <DisplayStand>
      <Stack spacing="16px" className="w-full">
        <LinearProgress variant="solid" />
        <LinearProgress variant="soft" />
        <LinearProgress variant="outlined" />
        <LinearProgress variant="plain" />
      </Stack>
    </DisplayStand>
  );
}
