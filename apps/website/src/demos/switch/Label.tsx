import { Switch } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SwitchLabel() {
  return (
    <DisplayStand>
      <label className="text-joy-neutral-700 dark:text-joy-neutral-300 flex items-center text-[1rem] leading-normal">
        Turn alarm on
        <span className="ms-[clamp(4px,var(--Typography-gap,0.375em),0.75rem)] inline-flex">
          <Switch className="ml-2" />
        </span>
      </label>
    </DisplayStand>
  );
}
