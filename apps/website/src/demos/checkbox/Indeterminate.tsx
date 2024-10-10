import { useState } from 'react';
import { Box, Checkbox } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxIndeterminate() {
  const [checked, setChecked] = useState([true, false]);

  return (
    <DisplayStand>
      <div>
        <Checkbox
          label="Parent"
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={(e) => {
            setChecked([e.currentTarget.checked, e.currentTarget.checked]);
          }}
        />
        <Box className="ml-6 mt-2 flex flex-col gap-2">
          <Checkbox
            label="Child 1"
            checked={checked[0]}
            onChange={(e) => {
              setChecked([e.currentTarget.checked, checked[1]]);
            }}
          />
          <Checkbox
            label="Child 2"
            checked={checked[1]}
            onChange={(e) => {
              setChecked([checked[0], e.currentTarget.checked]);
            }}
          />
        </Box>
      </div>
    </DisplayStand>
  );
}
