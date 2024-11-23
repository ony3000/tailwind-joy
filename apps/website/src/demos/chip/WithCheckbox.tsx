import { Chip as JoyChip } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { Box, Checkbox, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipWithCheckbox() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <DisplayStand>
      <CssVarsProvider modeStorageKey="theme">
        <Box className="flex items-center gap-2">
          <div>
            <Typography level="title-lg" className="mb-4">
              Favorite Movies
            </Typography>
            <Box role="group" className="flex flex-wrap gap-2">
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
                const checked = selected.includes(name);

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
                    <Checkbox
                      variant="outlined"
                      color={checked ? 'primary' : 'neutral'}
                      disableIcon
                      overlay
                      label={name}
                      checked={checked}
                      onChange={(event) => {
                        setSelected((names) =>
                          !event.target.checked
                            ? names.filter((n) => n !== name)
                            : [...names, name],
                        );
                      }}
                    />
                  </JoyChip>
                );
              })}
            </Box>
          </div>
        </Box>
      </CssVarsProvider>
    </DisplayStand>
  );
}
