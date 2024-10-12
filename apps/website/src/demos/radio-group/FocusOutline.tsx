import { Radio, RadioGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioGroupFocusOutline() {
  return (
    <DisplayStand>
      <div>
        <div className="text-joy-neutral-600 dark:text-joy-neutral-400 mb-4 text-sm font-semibold">
          Select an option and use keyboard &uarr;&darr;.
        </div>
        <RadioGroup name="radio-group-focus-outline">
          <Radio value="fully-wrapped" label="Fully wrapped" />
          <Radio
            value="input-wrapped"
            label="Input wrapped"
            className="[&>.tj-radio-radio]:relative"
          />
        </RadioGroup>
      </div>
    </DisplayStand>
  );
}
