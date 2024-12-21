import { LinearProgress, Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function LinearProgressDeterminate() {
  return (
    <DisplayStand>
      <Stack spacing="16px" className="w-full">
        <LinearProgress determinate value={25} />
        <LinearProgress determinate value={50} />
        <LinearProgress determinate value={75} />
        <LinearProgress determinate value={100} />
      </Stack>
    </DisplayStand>
  );
}
