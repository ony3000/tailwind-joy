import { Box, Radio } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioPosition() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-6">
        <Radio name="radio-position" label="One" className="flex-row-reverse" />
        <Radio name="radio-position" label="Two" className="flex-row-reverse" />
      </Box>
    </DisplayStand>
  );
}
