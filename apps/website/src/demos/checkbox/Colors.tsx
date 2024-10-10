import { Box, Checkbox } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxColors() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-6">
        <Checkbox label="Primary" color="primary" defaultChecked />
        <Checkbox label="Neutral" color="neutral" defaultChecked />
        <Checkbox label="Danger" color="danger" defaultChecked />
        <Checkbox label="Success" color="success" defaultChecked />
        <Checkbox label="Warning" color="warning" defaultChecked />
      </Box>
    </DisplayStand>
  );
}
