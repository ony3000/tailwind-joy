import { Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographySemanticElements() {
  return (
    <DisplayStand>
      <Typography level="h1" component="h2">
        I render as an h2, but I have h1 styles
      </Typography>
    </DisplayStand>
  );
}
