import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { Button, Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectFormSubmission() {
  return (
    <DisplayStand>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          alert(JSON.stringify(formJson));
        }}
      >
        <Stack spacing="16px" className="items-start">
          <JoySelect
            placeholder="Select a pet"
            name="pet"
            required
            sx={{ minWidth: 200 }}
          >
            <JoyOption value="dog">Dog</JoyOption>
            <JoyOption value="cat">Cat</JoyOption>
            <JoyOption value="fish">Fish</JoyOption>
            <JoyOption value="bird">Bird</JoyOption>
          </JoySelect>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </DisplayStand>
  );
}
