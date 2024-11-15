import { AspectRatio, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioRatio() {
  return (
    <DisplayStand>
      <AspectRatio
        variant="outlined"
        ratio="4/3"
        className="bg-joy-neutral-200 dark:bg-joy-neutral-700 w-[300px] rounded-lg"
      >
        <Typography level="h2" component="div">
          4/3
        </Typography>
      </AspectRatio>
    </DisplayStand>
  );
}
