import { Box, Button, Textarea } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaFormSubmission() {
  return (
    <DisplayStand>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log('Form submitted!');
        }}
      >
        <Box className="grid flex-wrap items-center gap-2">
          <Textarea placeholder="Try to submit with no text!" required />
          <Textarea placeholder="It is disabled" disabled />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </DisplayStand>
  );
}
