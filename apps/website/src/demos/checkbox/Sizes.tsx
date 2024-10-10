import { Box, Checkbox } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxSizes() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap items-center justify-center gap-6">
        <Checkbox label="Small" size="sm" defaultChecked />
        <Checkbox label="Medium" size="md" defaultChecked />
        <Checkbox label="Large" size="lg" defaultChecked />
      </Box>
    </DisplayStand>
  );
}
