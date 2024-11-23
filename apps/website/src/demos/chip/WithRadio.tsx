import { Chip as JoyChip } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { Box, Radio, RadioGroup, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipWithRadio() {
  const [selected, setSelected] = useState('');

  return (
    <DisplayStand>
      <CssVarsProvider modeStorageKey="theme">
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
                  <JoyChip
                    key={name}
                    variant="plain"
                    color={checked ? 'primary' : 'neutral'}
                    startDecorator={
                      checked && (
                        <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
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
                  </JoyChip>
                );
              })}
            </RadioGroup>
          </div>
        </Box>
      </CssVarsProvider>
    </DisplayStand>
  );
}
