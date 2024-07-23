import { Chip } from '@mui/joy';

type AvailableFromProps = {
  version: string;
};

export function AvailableFrom({ version }: AvailableFromProps) {
  return (
    <p>
      <Chip sx={{ '--Chip-radius': '8px' }}>
        Available from version {version}
      </Chip>
    </p>
  );
}
