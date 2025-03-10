import { Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyLevels() {
  return (
    <DisplayStand>
      <div>
        <Typography level="h1">h1</Typography>
        <Typography level="h2">h2</Typography>
        <Typography level="h3">h3</Typography>
        <Typography level="h4">h4</Typography>
        <Typography level="title-lg">title-lg</Typography>
        <Typography level="title-md">title-md</Typography>
        <Typography level="title-sm">title-sm</Typography>
        <Typography level="body-lg">body-lg</Typography>
        <Typography level="body-md">body-md</Typography>
        <Typography level="body-sm">body-sm</Typography>
        <Typography level="body-xs">body-xs</Typography>
      </div>
    </DisplayStand>
  );
}
