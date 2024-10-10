import { Box, Checkbox } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxBasics() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-6">
        <Checkbox label="Label" />
        <Checkbox label="Label" defaultChecked />
      </Box>
    </DisplayStand>
  );
}
