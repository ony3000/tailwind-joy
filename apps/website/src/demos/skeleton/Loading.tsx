import { useState } from 'react';
import {
  Box,
  Button,
  Sheet,
  Skeleton,
  Typography,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SkeletonLoading() {
  const [loading, setLoading] = useState(true);

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
            <Skeleton loading={loading} variant="overlay">
              <img
                alt=""
                src={
                  loading
                    ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                    : 'https://images.unsplash.com/photo-1686548812883-9d3777f4c137?h=400&fit=crop&auto=format&dpr=2'
                }
              />
            </Skeleton>
          </Box>
          <Typography>
            <Skeleton loading={loading}>
              {loading
                ? 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
                : 'An aerial view of a road in the middle of a forest. This image was uploaded by Dian Yu on Unsplash.'}
            </Skeleton>
          </Typography>
          <Button onClick={() => setLoading(!loading)}>
            {loading ? 'Stop' : 'Start'} loading
          </Button>
        </Sheet>
      </Box>
    </DisplayStand>
  );
}
