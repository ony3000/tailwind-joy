import { Box, Radio } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioVariants() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-6">
        <Radio name="radio-variants" label="Solid" variant="solid" />
        <Radio name="radio-variants" label="Soft" variant="soft" />
        <Radio
          name="radio-variants"
          label="Outlined"
          variant="outlined"
          defaultChecked
        />
        <Radio name="radio-variants" label="Plain" variant="plain" />
      </Box>
    </DisplayStand>
  );
}
