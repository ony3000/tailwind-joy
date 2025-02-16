import { Avatar, Radio, RadioGroup, Sheet } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioGroupClickableContainer() {
  return (
    <DisplayStand>
      <RadioGroup
        name="radio-group-clickable-container"
        defaultValue="person1"
        orientation="horizontal"
        overlay
        className="gap-4"
      >
        {[1, 2, 3].map((num) => (
          <Sheet
            key={num}
            variant="outlined"
            className="flex flex-col items-center rounded-[8px] p-4"
          >
            <Radio value={`person${num}`} variant="soft" className="mb-4" />
            <Avatar alt={`person${num}`} src={`/img/avatar/${num}.jpg`} />
            <div className="mt-2">Person {num}</div>
          </Sheet>
        ))}
      </RadioGroup>
    </DisplayStand>
  );
}
