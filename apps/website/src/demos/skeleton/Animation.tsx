import { Skeleton as JoySkeleton } from '@mui/joy';
import { Box, Button, Sheet, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SkeletonAnimation() {
  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="w-full space-y-4">
        {/* TODO: Replace Sheet with Card. */}
        <Sheet
          variant="outlined"
          className="mx-auto flex w-full max-w-[343px] flex-col gap-y-3 rounded-lg p-4"
        >
          {/* TODO: Replace Box with AspectRatio. */}
          <Box className="relative aspect-[21/9]">
            <JoySkeleton animation="wave" variant="overlay">
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </JoySkeleton>
          </Box>
          <Typography className="overflow-hidden">
            <JoySkeleton
              // TODO: Remove variant prop.
              variant="inline"
              animation="wave"
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries.
            </JoySkeleton>
          </Typography>
          <Button>
            Read more
            <JoySkeleton animation="wave" />
          </Button>
        </Sheet>
      </Box>
    </DisplayStand>
  );
}
