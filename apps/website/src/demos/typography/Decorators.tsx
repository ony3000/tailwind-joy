import { MdInfoOutline } from 'react-icons/md';
import { Chip, Typography } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyDecorators() {
  return (
    <DisplayStand>
      <div>
        <Typography
          startDecorator={<MdInfoOutline className={iconClass()} />}
          className="mb-4"
        >
          The icon automatically adjusts to the scale
        </Typography>
        <Typography
          level="body-lg"
          endDecorator={
            <Chip component="span" size="sm">
              123
            </Chip>
          }
          className="justify-center"
        >
          The display also changes to flexbox
        </Typography>
      </div>
    </DisplayStand>
  );
}
