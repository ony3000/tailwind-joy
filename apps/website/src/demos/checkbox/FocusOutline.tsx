import { Box, Checkbox } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxFocusOutline() {
  return (
    <DisplayStand>
      <div>
        <div className="text-joy-neutral-600 dark:text-joy-neutral-400 mb-4 text-sm font-semibold">
          Try using keyboard navigation.
        </div>
        <Box className="flex flex-wrap justify-center gap-6">
          <Checkbox label="Fully wrapped" defaultChecked />
          <Checkbox
            label="Input wrapped"
            defaultChecked
            className="[&>.tj-checkbox-checkbox]:relative"
          />
        </Box>
      </div>
    </DisplayStand>
  );
}
