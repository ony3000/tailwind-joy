import { Typography as JoyTypography } from '@mui/joy';
import { Box, Sheet } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyTitleAndBody() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="flex w-full max-w-prose flex-col gap-4">
        {/* TODO: Replace Sheet with Card. */}
        <Sheet
          variant="outlined"
          className="flex w-full flex-col gap-y-3 rounded-lg p-4"
        >
          <JoyTypography level="title-lg">
            Title of the component{' '}
            <JoyTypography
              level="title-lg"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              title-lg
            </JoyTypography>
          </JoyTypography>
          <JoyTypography level="body-md">
            This is the description of the component that contain some
            information of it.{' '}
            <JoyTypography
              level="body-md"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-md
            </JoyTypography>
          </JoyTypography>
        </Sheet>
        {/* TODO: Replace Sheet with Card. */}
        <Sheet
          variant="outlined"
          className="flex w-full flex-col gap-y-3 rounded-lg p-4"
        >
          <JoyTypography level="title-md">
            Title of the component{' '}
            <JoyTypography
              level="title-md"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              title-md
            </JoyTypography>
          </JoyTypography>
          <JoyTypography level="body-md">
            This is the description of the component that contain some
            information of it.{' '}
            <JoyTypography
              level="body-md"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-md
            </JoyTypography>
          </JoyTypography>
          <JoyTypography level="body-sm">
            Metadata, for example a date.{' '}
            <JoyTypography
              level="body-sm"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-sm
            </JoyTypography>
          </JoyTypography>
        </Sheet>
        {/* TODO: Replace Sheet with Card. */}
        <Sheet
          variant="outlined"
          className="flex w-full flex-col gap-y-3 rounded-lg p-4"
        >
          <JoyTypography level="title-sm">
            Title of the component{' '}
            <JoyTypography
              level="title-sm"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              title-sm
            </JoyTypography>
          </JoyTypography>
          <JoyTypography level="body-sm">
            This is the description of the component that contain some
            information of it.{' '}
            <JoyTypography
              level="body-sm"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-sm
            </JoyTypography>
          </JoyTypography>
          <JoyTypography level="body-xs">
            Metadata, for example a date.{' '}
            <JoyTypography
              level="body-xs"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-xs
            </JoyTypography>
          </JoyTypography>
        </Sheet>
      </Box>
    </DisplayStand>
  );
}
