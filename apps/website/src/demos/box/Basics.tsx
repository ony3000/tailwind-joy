import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function BoxBasics() {
  return (
    <DisplayStand>
      <Box
        component="section"
        className="border border-dashed border-[grey] p-4"
      >
        This Box renders as an HTML section element.
      </Box>
    </DisplayStand>
  );
}
