import { Typography as JoyTypography } from '@mui/joy';
import { Sheet } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyBasics() {
  return (
    <DisplayStand>
      {/* TODO: Replace Sheet with Card. */}
      <Sheet
        variant="outlined"
        className="flex w-full max-w-[400px] flex-col gap-y-3 rounded-lg p-4"
      >
        <JoyTypography level="h1">National Parks</JoyTypography>
        <JoyTypography level="h2" className="mb-1 text-[1.25rem]">
          Yosemite National Park
        </JoyTypography>
        <JoyTypography>
          Yosemite National Park is a national park spanning 747,956 acres
          (1,169.4 sq mi; 3,025.2 km2) in the western Sierra Nevada of Central
          California.
        </JoyTypography>
      </Sheet>
    </DisplayStand>
  );
}
