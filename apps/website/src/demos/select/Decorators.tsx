import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Chip } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectDecorators() {
  return (
    <DisplayStand>
      <JoySelect
        placeholder="Select a pet"
        startDecorator={<FavoriteBorderIcon />}
        endDecorator={
          <Chip size="sm" color="danger" variant="soft">
            +5
          </Chip>
        }
        sx={{ width: 240 }}
      >
        <JoyOption value="dog">Dog</JoyOption>
        <JoyOption value="cat">Cat</JoyOption>
        <JoyOption value="fish">Fish</JoyOption>
        <JoyOption value="bird">Bird</JoyOption>
      </JoySelect>
    </DisplayStand>
  );
}
