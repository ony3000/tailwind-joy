import { Textarea as JoyTextarea } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaRows() {
  return (
    <DisplayStand>
      <JoyTextarea
        placeholder="Type in here..."
        defaultValue="Try to put text longer than 4 lines."
        minRows={2}
        maxRows={4}
      />
    </DisplayStand>
  );
}
