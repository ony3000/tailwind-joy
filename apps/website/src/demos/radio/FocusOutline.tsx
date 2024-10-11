import { Box, Radio } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioFocusOutline() {
  return (
    <DisplayStand>
      <div>
        <div className="text-joy-neutral-600 dark:text-joy-neutral-400 mb-4 text-sm font-semibold">
          Select an option and use keyboard &uarr;&darr;.
        </div>
        <Box className="flex flex-wrap justify-center gap-6">
          <Radio name="radio-focus-outline" label="Fully wrapped" />
          <Radio
            name="radio-focus-outline"
            label="Input wrapped"
            className="[&>.tj-radio-radio]:relative"
          />
        </Box>
      </div>
    </DisplayStand>
  );
}
