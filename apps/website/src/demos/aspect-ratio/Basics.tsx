import { AspectRatio as JoyAspectRatio } from '@mui/joy';
import { Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioBasics() {
  return (
    <DisplayStand>
      <JoyAspectRatio sx={{ width: 300 }}>
        <Typography level="h2" component="div">
          16/9
        </Typography>
      </JoyAspectRatio>
    </DisplayStand>
  );
}