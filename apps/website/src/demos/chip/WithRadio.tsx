import { useState } from 'react';
import { MdCheck } from 'react-icons/md';
import {
  Box,
  Chip,
  Radio,
  RadioGroup,
  Typography,
} from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { twMerge } from 'tailwind-merge';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipWithRadio() {
  const [selected, setSelected] = useState('');

  return (
    <DisplayStand>
      <Box className="flex items-center gap-2">
        <div>
          <Typography level="title-lg" className="mb-4">
            Best Movie
          </Typography>
          <RadioGroup
            name="best-movie"
            orientation="horizontal"
            className="flex-wrap gap-2"
          >
            {[
              'Star trek',
              'Batman',
              'Spider man',
              'Eternals',
              'Shang chi',
              'Jungle cruise',
              'No time to die',
              'Thor',
              'The hulk',
            ].map((name) => {
              const checked = selected === name;

              return (
                <Chip
                  key={name}
                  variant="plain"
                  color={checked ? 'primary' : 'neutral'}
                  startDecorator={
                    checked && (
                      <MdCheck
                        className={twMerge(
                          iconClass(),
                          'pointer-events-none z-1',
                        )}
                      />
                    )
                  }
                >
                  <Radio
                    variant="outlined"
                    color={checked ? 'primary' : 'neutral'}
                    disableIcon
                    overlay
                    label={name}
                    value={name}
                    checked={checked}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelected(name);
                      }
                    }}
                  />
                </Chip>
              );
            })}
          </RadioGroup>
        </div>
      </Box>
    </DisplayStand>
  );
}
