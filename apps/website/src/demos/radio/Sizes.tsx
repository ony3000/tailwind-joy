import { Box, Radio } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioSizes() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap items-center justify-center gap-6">
        <Radio name="radio-sizes" label="Small" size="sm" />
        <Radio name="radio-sizes" label="Medium" size="md" defaultChecked />
        <Radio name="radio-sizes" label="Large" size="lg" />
      </Box>
    </DisplayStand>
  );
}
