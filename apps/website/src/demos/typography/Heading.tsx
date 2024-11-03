import { Typography as JoyTypography } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyHeading() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="flex flex-col gap-3">
        <JoyTypography level="h1">h1: Lorem ipsum</JoyTypography>
        <JoyTypography level="h2">h2: What is Lorem Ipsum?</JoyTypography>
        <JoyTypography level="h3">
          h3: The standard Lorem Ipsum passage.
        </JoyTypography>
        <JoyTypography level="h4">
          h4: The smallest headline of the page
        </JoyTypography>
      </Box>
    </DisplayStand>
  );
}
