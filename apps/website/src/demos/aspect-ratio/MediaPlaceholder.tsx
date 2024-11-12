import { AspectRatio as JoyAspectRatio } from '@mui/joy';
import ImageIcon from '@mui/icons-material/Image';
import { Sheet, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioMediaPlaceholder() {
  return (
    <DisplayStand>
      {/* TODO: Replace Sheet with Card. */}
      <Sheet
        variant="outlined"
        className="mx-auto flex w-full max-w-[300px] flex-col gap-y-3 rounded-lg p-4"
      >
        <JoyAspectRatio>
          <div>
            <ImageIcon sx={{ fontSize: '3rem', opacity: 0.2 }} />
          </div>
        </JoyAspectRatio>
        <div>
          <Typography level="title-md">Title</Typography>
          <Typography level="body-sm">Description of the card.</Typography>
        </div>
      </Sheet>
    </DisplayStand>
  );
}
