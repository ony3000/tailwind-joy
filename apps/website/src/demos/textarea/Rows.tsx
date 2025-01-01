import { Textarea } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaRows() {
  return (
    <DisplayStand>
      <Textarea
        placeholder="Type in here..."
        defaultValue="Try to put text longer than 4 lines."
        minRows={2}
        maxRows={4}
      />
    </DisplayStand>
  );
}
