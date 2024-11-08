import { Skeleton as JoySkeleton } from '@mui/joy';
import { useState } from 'react';
import { Box, Switch, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SkeletonInlineWithTypography() {
  const [loading, setLoading] = useState(true);

  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="w-full max-w-prose space-y-4">
        <Box className="m-auto">
          <Typography
            level="h1"
            className="relative overflow-hidden text-[1.25rem]"
          >
            <JoySkeleton
              // TODO: Remove variant prop.
              variant="inline"
              loading={loading}
            >
              A heading
            </JoySkeleton>
          </Typography>
          <Typography
            level="body-xs"
            className="relative mb-4 mt-2 overflow-hidden"
          >
            <JoySkeleton
              // TODO: Remove variant prop.
              variant="inline"
              loading={loading}
            >
              HISTORY, PURPOSE AND USAGE
            </JoySkeleton>
          </Typography>
          <Typography className="relative overflow-hidden">
            <JoySkeleton
              // TODO: Remove variant prop.
              variant="inline"
              loading={loading}
            >
              <i>Lorem ipsum</i> is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </JoySkeleton>
          </Typography>
        </Box>
        {/* TODO: Replace Box with FormControl. */}
        <Box className="flex">
          <label className="inline-flex items-center gap-2 text-[0.875rem] leading-[1.42858]">
            <span className="inline-flex">
              <Switch
                size="sm"
                checked={loading}
                onChange={(event) => setLoading(event.target.checked)}
              />
            </span>
            <span className="text-joy-neutral-800 dark:text-joy-neutral-100 font-medium">
              Loading
            </span>
          </label>
        </Box>
      </Box>
    </DisplayStand>
  );
}
