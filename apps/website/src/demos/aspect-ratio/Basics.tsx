import { AspectRatio, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioBasics() {
  return (
    <DisplayStand>
      <AspectRatio className="w-[300px]">
        <Typography level="h2" component="div">
          16/9
        </Typography>
      </AspectRatio>
    </DisplayStand>
  );
}
