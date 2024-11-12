import { AspectRatio as JoyAspectRatio } from '@mui/joy';
import { Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioRatio() {
  return (
    <DisplayStand>
      <JoyAspectRatio
        variant="outlined"
        ratio="4/3"
        sx={{ width: 300, bgcolor: 'background.level2', borderRadius: 'md' }}
      >
        <Typography level="h2" component="div">
          4/3
        </Typography>
      </JoyAspectRatio>
    </DisplayStand>
  );
}
