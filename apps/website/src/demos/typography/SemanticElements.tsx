import { Typography as JoyTypography } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographySemanticElements() {
  return (
    <DisplayStand>
      <JoyTypography level="h1" component="h2">
        I render as an h2, but I have h1 styles
      </JoyTypography>
    </DisplayStand>
  );
}
