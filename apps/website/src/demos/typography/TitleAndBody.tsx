import { Box, Sheet, Typography } from 'tailwind-joy/components';
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
          <Typography level="title-lg">
            Title of the component{' '}
            <Typography
              level="title-lg"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              title-lg
            </Typography>
          </Typography>
          <Typography level="body-md">
            This is the description of the component that contain some
            information of it.{' '}
            <Typography
              level="body-md"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-md
            </Typography>
          </Typography>
        </Sheet>
        {/* TODO: Replace Sheet with Card. */}
        <Sheet
          variant="outlined"
          className="flex w-full flex-col gap-y-3 rounded-lg p-4"
        >
          <Typography level="title-md">
            Title of the component{' '}
            <Typography
              level="title-md"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              title-md
            </Typography>
          </Typography>
          <Typography level="body-md">
            This is the description of the component that contain some
            information of it.{' '}
            <Typography
              level="body-md"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-md
            </Typography>
          </Typography>
          <Typography level="body-sm">
            Metadata, for example a date.{' '}
            <Typography
              level="body-sm"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-sm
            </Typography>
          </Typography>
        </Sheet>
        {/* TODO: Replace Sheet with Card. */}
        <Sheet
          variant="outlined"
          className="flex w-full flex-col gap-y-3 rounded-lg p-4"
        >
          <Typography level="title-sm">
            Title of the component{' '}
            <Typography
              level="title-sm"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              title-sm
            </Typography>
          </Typography>
          <Typography level="body-sm">
            This is the description of the component that contain some
            information of it.{' '}
            <Typography
              level="body-sm"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-sm
            </Typography>
          </Typography>
          <Typography level="body-xs">
            Metadata, for example a date.{' '}
            <Typography
              level="body-xs"
              textColor="var(--joy-success-500)"
              className="font-mono opacity-50"
            >
              body-xs
            </Typography>
          </Typography>
        </Sheet>
      </Box>
    </DisplayStand>
  );
}
