import { Box, Radio } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioBasics() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-6">
        <Radio name="radio-basics" label="One" value="one" defaultChecked />
        <Radio name="radio-basics" label="Two" value="two" />
      </Box>
    </DisplayStand>
  );
}
