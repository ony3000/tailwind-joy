import { Box, Skeleton } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SkeletonGeometry() {
  return (
    <DisplayStand>
      <div>
        <Box className="m-auto flex items-center gap-4">
          <Skeleton variant="circular" width={48} height={48} />
          <div className="space-y-2">
            <Skeleton variant="rectangular" width={200} height="1em" />
            <Skeleton variant="rectangular" width={140} height="1em" />
          </div>
        </Box>
      </div>
    </DisplayStand>
  );
}
