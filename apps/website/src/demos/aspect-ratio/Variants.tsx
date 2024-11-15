import { AspectRatio, Box, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioVariants() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Grid. */}
      <Box className="flex w-full gap-4">
        {/* TODO: Replace Box with Grid. */}
        <Box className="flex-1">
          <AspectRatio variant="solid">
            <Typography level="inherit" className="font-semibold">
              Solid
            </Typography>
          </AspectRatio>
        </Box>
        {/* TODO: Replace Box with Grid. */}
        <Box className="flex-1">
          <AspectRatio variant="soft">
            <Typography level="inherit" className="font-semibold">
              Soft
            </Typography>
          </AspectRatio>
        </Box>
        {/* TODO: Replace Box with Grid. */}
        <Box className="flex-1">
          <AspectRatio variant="outlined">
            <Typography level="inherit" className="font-semibold">
              Outlined
            </Typography>
          </AspectRatio>
        </Box>
        {/* TODO: Replace Box with Grid. */}
        <Box className="flex-1">
          <AspectRatio variant="plain">
            <Typography level="inherit" className="font-semibold">
              Plain
            </Typography>
          </AspectRatio>
        </Box>
      </Box>
    </DisplayStand>
  );
}
