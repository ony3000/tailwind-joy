import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

const options = [
  { value: '1', label: 'Octocat', src: '/img/avatar/octocat-avatar.png' },
  { value: '2', label: 'Tailwind', src: '/img/avatar/tailwind-gravatar.png' },
  { value: '3', label: 'Joy', src: '/img/avatar/joy-gravatar.png' },
];

export function SelectOptionComponent() {
  return (
    <DisplayStand>
      <JoySelect
        defaultValue="1"
        sx={{ minWidth: 240 }}
        renderValue={(option) => {
          if (!option) {
            return null;
          }

          return (
            <Box className="flex items-center gap-3">
              {/* TODO: Replace div with Avatar. */}
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                <img
                  src={options.find((o) => o.value === option.value)?.src}
                  className="h-full w-full object-cover"
                />
              </div>
              {option.label}
            </Box>
          );
        }}
      >
        {options.map((option) => (
          <JoyOption
            key={option.value}
            value={option.value}
            label={option.label}
          >
            {/* TODO: Replace div with Avatar. */}
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
              <img src={option.src} className="h-full w-full object-cover" />
            </div>
            {option.label}
          </JoyOption>
        ))}
      </JoySelect>
    </DisplayStand>
  );
}
