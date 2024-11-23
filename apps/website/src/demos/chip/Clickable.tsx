import { Chip as JoyChip } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipClickable() {
  return (
    <DisplayStand>
      <CssVarsProvider modeStorageKey="theme">
        <Box className="flex items-center gap-2">
          <JoyChip
            size="lg"
            variant="outlined"
            startDecorator={
              // TODO: Replace div with Avatar.
              <div className="-ml-[9px] flex h-[22px] w-[22px] items-center justify-center overflow-hidden rounded-full">
                <img
                  src="/img/avatar/octocat-avatar.png"
                  className="h-full w-full object-cover"
                  alt="Octocat"
                />
              </div>
            }
            endDecorator={<CheckIcon />}
            onClick={() => alert('You clicked the Tailwind Joy Chip!')}
          >
            Octocat
          </JoyChip>
        </Box>
      </CssVarsProvider>
    </DisplayStand>
  );
}
