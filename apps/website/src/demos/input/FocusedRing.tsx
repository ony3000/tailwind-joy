import { Input as JoyInput } from '@mui/joy';
import { DemoContainer } from '../DemoContainer';

export function InputFocusedRing() {
  return (
    <DemoContainer>
      <JoyInput
        placeholder="Bootstrap"
        className="
          before:transition-shadow
          before:ease-[ease-in-out]
          focus-within:border-[#86b7fe]
          [&.MuiInput-root]:[--Input-focusedHighlight:rgba(13,110,253,.25)]
          [&.MuiInput-root]:[--Input-focusedInset:var(--any)]
          [&.MuiInput-root]:[--Input-focusedThickness:0.25rem]
        "
      />
    </DemoContainer>
  );
}
