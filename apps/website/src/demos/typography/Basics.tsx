import { Sheet, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyBasics() {
  return (
    <DisplayStand>
      {/* TODO: Replace Sheet with Card. */}
      <Sheet
        variant="outlined"
        className="flex w-full max-w-[400px] flex-col gap-y-3 rounded-lg p-4"
      >
        <Typography level="h1">National Parks</Typography>
        <Typography level="h2" className="mb-1 text-[1.25rem]">
          Yosemite National Park
        </Typography>
        <Typography>
          Yosemite National Park is a national park spanning 747,956 acres
          (1,169.4 sq mi; 3,025.2 km2) in the western Sierra Nevada of Central
          California.
        </Typography>
      </Sheet>
    </DisplayStand>
  );
}
