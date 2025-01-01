import { Textarea } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaFocusedRing() {
  return (
    <DisplayStand>
      <Textarea
        placeholder="Bootstrap"
        minRows={2}
        className="
          before:transition-shadow
          before:ease-[ease-in-out]
          focus-within:border-[#86b7fe]
          [&.tj-textarea-root]:[--Textarea-focusedHighlight:rgba(13,110,253,.25)]
          [&.tj-textarea-root]:[--Textarea-focusedInset:var(--any,)]
          [&.tj-textarea-root]:[--Textarea-focusedThickness:0.25rem]
        "
      />
    </DisplayStand>
  );
}
