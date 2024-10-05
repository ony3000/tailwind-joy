import { Input } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function InputValidation() {
  return (
    <DisplayStand>
      <Input
        placeholder="Type in here..."
        error
        defaultValue="Oh no, error found!"
      />
    </DisplayStand>
  );
}
