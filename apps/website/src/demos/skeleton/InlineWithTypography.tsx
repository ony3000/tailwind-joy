import { useState } from 'react';
import {
  Box,
  Skeleton,
  Stack,
  Switch,
  Typography,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SkeletonInlineWithTypography() {
  const [loading, setLoading] = useState(true);

  return (
    <DisplayStand>
      <Stack spacing="16px" useFlexGap className="max-w-prose">
        <Box className="m-auto">
          <Typography
            level="h1"
            className="relative overflow-hidden text-[1.25rem]"
          >
            <Skeleton loading={loading}>A heading</Skeleton>
          </Typography>
          <Typography
            level="body-xs"
            className="relative mb-4 mt-2 overflow-hidden"
          >
            <Skeleton loading={loading}>HISTORY, PURPOSE AND USAGE</Skeleton>
          </Typography>
          <Typography className="relative overflow-hidden">
            <Skeleton loading={loading}>
              <i>Lorem ipsum</i> is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </Skeleton>
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
      </Stack>
    </DisplayStand>
  );
}
