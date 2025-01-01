import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { useState, useRef } from 'react';
import { Button, Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectControllingTheOpenState() {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);
  const skipRef = useRef(false);

  return (
    <DisplayStand>
      <Stack spacing="16px" useFlexGap>
        <Button
          variant="solid"
          onMouseDown={() => {
            skipRef.current = true;
          }}
          onClick={() => {
            skipRef.current = false;
            setOpen((bool) => !bool);
          }}
        >
          Toggle the select
        </Button>
        <div>
          <JoySelect
            listboxOpen={open}
            onListboxOpenChange={(isOpen) => {
              if (!skipRef.current) {
                setOpen(isOpen);
              }
            }}
            value={age}
            onChange={(_, newValue) => {
              setAge(newValue);
            }}
          >
            <JoyOption value="">
              <em>None</em>
            </JoyOption>
            <JoyOption value={10}>Ten</JoyOption>
            <JoyOption value={20}>Twenty</JoyOption>
            <JoyOption value={30}>Thirty</JoyOption>
          </JoySelect>
        </div>
      </Stack>
    </DisplayStand>
  );
}
