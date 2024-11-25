import { MdCheck } from 'react-icons/md';
import { Box, Chip } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipClickable() {
  return (
    <DisplayStand>
      <Box className="flex items-center gap-2">
        <Chip
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
          endDecorator={<MdCheck className={iconClass()} />}
          onClick={() => alert('You clicked the Tailwind Joy Chip!')}
        >
          Octocat
        </Chip>
      </Box>
    </DisplayStand>
  );
}
