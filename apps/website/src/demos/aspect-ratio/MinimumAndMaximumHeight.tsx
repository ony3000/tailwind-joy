import { AspectRatio, Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AspectRatioMinimumAndMaximumHeight() {
  return (
    <DisplayStand>
      <Box className="w-[300px] resize-x overflow-auto p-2">
        <AspectRatio minHeight={120} maxHeight={200}>
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </AspectRatio>
      </Box>
    </DisplayStand>
  );
}
