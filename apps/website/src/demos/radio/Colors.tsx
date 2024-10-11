import { Box, Radio } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioColors() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-6">
        <Radio name="radio-colors" label="Primary" color="primary" />
        <Radio name="radio-colors" label="Neutral" color="neutral" />
        <Radio name="radio-colors" label="Danger" color="danger" />
        <Radio name="radio-colors" label="Success" color="success" />
        <Radio name="radio-colors" label="Warning" color="warning" />
      </Box>
    </DisplayStand>
  );
}
