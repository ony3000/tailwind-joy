import { Textarea as JoyTextarea } from '@mui/joy';
import { useRef } from 'react';
import { Button, Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaHTMLTextareaRef() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaFocus = () => {
    textareaRef.current?.focus();
  };

  return (
    <DisplayStand>
      <Stack direction="row" className="gap-2">
        <JoyTextarea
          placeholder="Placeholder"
          slotProps={{ textarea: { ref: textareaRef } }}
        />
        <Button onClick={handleTextareaFocus}>Focus textarea element</Button>
      </Stack>
    </DisplayStand>
  );
}
