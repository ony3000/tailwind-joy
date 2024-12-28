import { Textarea as JoyTextarea } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaValidation() {
  return (
    <DisplayStand>
      <JoyTextarea
        placeholder="Type in here..."
        error
        defaultValue="Oh no! Something is definitely wrong."
      />
    </DisplayStand>
  );
}
