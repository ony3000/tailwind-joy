import { Checkbox, Sheet } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxClickableContainer() {
  return (
    <DisplayStand>
      <div>
        <div className="text-joy-neutral-600 dark:text-joy-neutral-400 mb-4 text-sm font-semibold">
          Try using keyboard navigation.
        </div>
        <Sheet variant="outlined" className="flex rounded-[8px] p-4">
          <Checkbox label="Focus on me" overlay />
        </Sheet>
      </div>
    </DisplayStand>
  );
}
