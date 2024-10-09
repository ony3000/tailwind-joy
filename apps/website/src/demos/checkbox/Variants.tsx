import { Box, Checkbox } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxVariants() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-6">
        <Checkbox label="Solid" variant="solid" defaultChecked />
        <Checkbox label="Soft" variant="soft" defaultChecked />
        <Checkbox label="Outlined" variant="outlined" defaultChecked />
        <Checkbox label="Plain" variant="plain" defaultChecked />
      </Box>
    </DisplayStand>
  );
}
