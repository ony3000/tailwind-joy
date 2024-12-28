import { Textarea as JoyTextarea } from '@mui/joy';
import { Box, Button } from 'tailwind-joy/components';
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
          <JoyTextarea placeholder="Try to submit with no text!" required />
          <JoyTextarea placeholder="It is disabled" disabled />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </DisplayStand>
  );
}
