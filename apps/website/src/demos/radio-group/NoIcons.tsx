import { Radio, RadioGroup, Sheet } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioGroupNoIcons() {
  return (
    <DisplayStand>
      <RadioGroup
        name="radio-group-no-icons"
        defaultValue="512GB"
        disableIcon
        overlay
      >
        {['512GB', '1TB', '2TB'].map((value) => (
          <Sheet
            key={value}
            variant="outlined"
            className="flex rounded-[8px] p-4"
          >
            <Radio
              value={value}
              label={`${value} SSD storage`}
              className="
                [&_.tj-radio-action:has(:checked)]:border-joy-primary-500
                font-semibold
                [&_.tj-radio-action:has(:checked)]:[--variant-borderWidth:2px]
              "
            />
          </Sheet>
        ))}
      </RadioGroup>
    </DisplayStand>
  );
}
