import { MdReport, MdWarning } from 'react-icons/md';
import { Box, CircularProgress } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CircularProgressChildren() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap items-center justify-center gap-4">
        <CircularProgress color="warning">
          <MdWarning className={iconClass({ color: 'warning' })} />
        </CircularProgress>
        <CircularProgress size="lg" determinate value={66.67}>
          2 / 3
        </CircularProgress>
        <CircularProgress
          color="danger"
          className="[--CircularProgress-size:80px]"
        >
          <MdReport className={iconClass({ color: 'danger' })} />
        </CircularProgress>
      </Box>
    </DisplayStand>
  );
}
