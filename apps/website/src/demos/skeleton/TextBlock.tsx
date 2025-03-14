import { Box, Skeleton, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SkeletonTextBlock() {
  return (
    <DisplayStand>
      <Box className="grid max-w-[360px] grid-cols-[100px_1fr] gap-2">
        <Skeleton variant="text" level="h1" />
        <Typography level="h1">h1 Typeface</Typography>

        <Skeleton variant="text" level="h2" />
        <Typography level="h2">h2 Typeface</Typography>

        <Skeleton variant="text" />
        <Typography>body-md Typeface</Typography>

        <Skeleton variant="text" level="body-sm" />
        <Typography level="body-sm">body-sm Typeface</Typography>

        <Skeleton variant="text" level="body-xs" />
        <Typography level="body-xs">body-xs Typeface</Typography>
      </Box>
    </DisplayStand>
  );
}
