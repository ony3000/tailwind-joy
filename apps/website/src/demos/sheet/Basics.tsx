import { Sheet } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SheetBasics() {
  return (
    <DisplayStand>
      <Sheet variant="outlined" color="neutral" className="p-8">
        Hello world!
      </Sheet>
    </DisplayStand>
  );
}
