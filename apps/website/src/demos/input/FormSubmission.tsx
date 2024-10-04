import { Box, Button, Input } from 'tailwind-joy/components';
import { DemoContainer } from '../DemoContainer';

export function InputFormSubmission() {
  return (
    <DemoContainer>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          alert(JSON.stringify(formJson));
        }}
      >
        <Box className="grid flex-wrap items-center gap-2">
          <Input
            name="first"
            placeholder="Try to submit with no text!"
            required
          />
          <Input name="second" placeholder="It is disabled" disabled />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </DemoContainer>
  );
}
