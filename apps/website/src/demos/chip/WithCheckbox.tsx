import { useState } from 'react';
import { MdCheck } from 'react-icons/md';
import { Box, Checkbox, Chip, Typography } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { twMerge } from 'tailwind-merge';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipWithCheckbox() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <DisplayStand>
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
                <Chip
                  key={name}
                  variant="plain"
                  color={checked ? 'primary' : 'neutral'}
                  startDecorator={
                    checked && (
                      <MdCheck
                        className={twMerge(
                          iconClass(),
                          'pointer-events-none z-[1]',
                        )}
                      />
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
                </Chip>
              );
            })}
          </Box>
        </div>
      </Box>
    </DisplayStand>
  );
}
