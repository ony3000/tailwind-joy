import { Input as JoyInput } from '@mui/joy';
import { DemoContainer } from '../DemoContainer';

export function InputValidation() {
  return (
    <DemoContainer>
      <JoyInput
        placeholder="Type in here..."
        error
        defaultValue="Oh no, error found!"
      />
    </DemoContainer>
  );
}
