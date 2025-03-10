import { Input } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function InputFocusedRing() {
  return (
    <DisplayStand>
      <Input
        placeholder="Bootstrap"
        className="
          before:transition-shadow
          before:ease-[ease-in-out]
          focus-within:border-[#86b7fe]
          [&.tj-input-root]:[--Input-focusedHighlight:rgba(13,110,253,.25)]
          [&.tj-input-root]:[--Input-focusedInset:var(--any,)]
          [&.tj-input-root]:[--Input-focusedThickness:0.25rem]
        "
      />
    </DisplayStand>
  );
}
