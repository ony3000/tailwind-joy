import { AspectRatio, Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioObjectFit() {
  return (
    <DisplayStand>
      <Box className="w-[300px] rounded-md p-2">
        <AspectRatio objectFit="contain">
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt="A beautiful landscape."
          />
        </AspectRatio>
      </Box>
    </DisplayStand>
  );
}
