import { Typography as JoyTypography } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyLevels() {
  return (
    <DisplayStand>
      <div>
        <JoyTypography level="h1">h1</JoyTypography>
        <JoyTypography level="h2">h2</JoyTypography>
        <JoyTypography level="h3">h3</JoyTypography>
        <JoyTypography level="h4">h4</JoyTypography>
        <JoyTypography level="title-lg">title-lg</JoyTypography>
        <JoyTypography level="title-md">title-md</JoyTypography>
        <JoyTypography level="title-sm">title-sm</JoyTypography>
        <JoyTypography level="body-lg">body-lg</JoyTypography>
        <JoyTypography level="body-md">body-md</JoyTypography>
        <JoyTypography level="body-sm">body-sm</JoyTypography>
        <JoyTypography level="body-xs">body-xs</JoyTypography>
      </div>
    </DisplayStand>
  );
}
