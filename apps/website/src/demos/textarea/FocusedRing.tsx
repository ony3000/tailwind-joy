import { Textarea as JoyTextarea } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaFocusedRing() {
  return (
    <DisplayStand>
      <JoyTextarea
        placeholder="Bootstrap"
        minRows={2}
        sx={{
          '--Textarea-focusedInset': 'var(--any,)',
          '--Textarea-focusedThickness': '0.25rem',
          '--Textarea-focusedHighlight': 'rgba(13,110,253,.25)',
          '&::before': {
            transition: 'box-shadow 0.15s ease-in-out',
          },
          '&:focus-within': {
            borderColor: '#86b7fe',
          },
        }}
      />
    </DisplayStand>
  );
}
