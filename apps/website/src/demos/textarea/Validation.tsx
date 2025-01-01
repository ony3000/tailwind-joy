import { Textarea } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaValidation() {
  return (
    <DisplayStand>
      <Textarea
        placeholder="Type in here..."
        error
        defaultValue="Oh no! Something is definitely wrong."
      />
    </DisplayStand>
  );
}
