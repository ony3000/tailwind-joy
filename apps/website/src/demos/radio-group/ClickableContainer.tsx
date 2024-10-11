import { Radio, RadioGroup, Sheet } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function RadioGroupClickableContainer() {
  return (
    <DisplayStand>
      <RadioGroup
        name="radio-group-clickable-container"
        defaultValue="tailwind"
        orientation="horizontal"
        overlay
        className="gap-4"
      >
        {[
          {
            label: 'Tailwind',
            avatar: '/img/avatar/tailwind-gravatar.png',
          },
          {
            label: 'Joy',
            avatar: '/img/avatar/joy-gravatar.png',
          },
          {
            label: 'Octocat',
            avatar: '/img/avatar/octocat-avatar.png',
          },
        ].map(({ label, avatar }) => (
          <Sheet
            key={label}
            variant="outlined"
            className="flex flex-col items-center rounded-[8px] p-4"
          >
            <Radio
              value={label.toLowerCase()}
              variant="soft"
              className="mb-4"
            />
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
              <img
                src={avatar}
                className="h-full w-full object-cover"
                alt={label}
              />
            </div>
            <div className="mt-2">{label}</div>
          </Sheet>
        ))}
      </RadioGroup>
    </DisplayStand>
  );
}
