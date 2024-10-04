import { Input } from 'tailwind-joy/components';
import { DemoContainer } from '../DemoContainer';

export function InputValidation() {
  return (
    <DemoContainer>
      <Input
        placeholder="Type in here..."
        error
        defaultValue="Oh no, error found!"
      />
    </DemoContainer>
  );
}
