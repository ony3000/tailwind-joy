import {
  AspectRatio,
  Box,
  Button,
  Sheet,
  Skeleton,
  Typography,
} from 'tailwind-joy/components';
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
          <AspectRatio ratio="21/9">
            <Skeleton animation="wave" variant="overlay">
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </Skeleton>
          </AspectRatio>
          <Typography className="overflow-hidden">
            <Skeleton animation="wave">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries.
            </Skeleton>
          </Typography>
          <Button>
            Read more
            <Skeleton animation="wave" />
          </Button>
        </Sheet>
      </Box>
    </DisplayStand>
  );
}
