import { Box, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyHeading() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="flex flex-col gap-3">
        <Typography level="h1">h1: Lorem ipsum</Typography>
        <Typography level="h2">h2: What is Lorem Ipsum?</Typography>
        <Typography level="h3">
          h3: The standard Lorem Ipsum passage.
        </Typography>
        <Typography level="h4">
          h4: The smallest headline of the page
        </Typography>
      </Box>
    </DisplayStand>
  );
}
