import { AspectRatio as JoyAspectRatio } from '@mui/joy';
import { Box, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioVariants() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Grid. */}
      <Box className="flex w-full gap-4">
        {/* TODO: Replace Box with Grid. */}
        <Box className="flex-1">
          <JoyAspectRatio variant="solid">
            <Typography level="inherit" className="font-semibold">
              Solid
            </Typography>
          </JoyAspectRatio>
        </Box>
        {/* TODO: Replace Box with Grid. */}
        <Box className="flex-1">
          <JoyAspectRatio variant="soft">
            <Typography level="inherit" className="font-semibold">
              Soft
            </Typography>
          </JoyAspectRatio>
        </Box>
        {/* TODO: Replace Box with Grid. */}
        <Box className="flex-1">
          <JoyAspectRatio variant="outlined">
            <Typography level="inherit" className="font-semibold">
              Outlined
            </Typography>
          </JoyAspectRatio>
        </Box>
        {/* TODO: Replace Box with Grid. */}
        <Box className="flex-1">
          <JoyAspectRatio variant="plain">
            <Typography level="inherit" className="font-semibold">
              Plain
            </Typography>
          </JoyAspectRatio>
        </Box>
      </Box>
    </DisplayStand>
  );
}
