import { MdImage } from 'react-icons/md';
import { AspectRatio, Sheet, Typography } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { twMerge } from 'tailwind-merge';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioMediaPlaceholder() {
  return (
    <DisplayStand>
      {/* TODO: Replace Sheet with Card. */}
      <Sheet
        variant="outlined"
        className="mx-auto flex w-full max-w-[300px] flex-col gap-y-3 rounded-lg p-4"
      >
        <AspectRatio>
          <div>
            <MdImage
              className={twMerge(
                iconClass(),
                'text-[3rem] text-[color:inherit] opacity-20',
              )}
            />
          </div>
        </AspectRatio>
        <div>
          <Typography level="title-md">Title</Typography>
          <Typography level="body-sm">Description of the card.</Typography>
        </div>
      </Sheet>
    </DisplayStand>
  );
}
