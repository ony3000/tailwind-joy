import {
  List as JoyList,
  ListItemButton as JoyListItemButton,
  ListItemDecorator as JoyListItemDecorator,
} from '@mui/joy';
import Image from '@mui/icons-material/Image';
import Videocam from '@mui/icons-material/Videocam';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListSemanticElements() {
  return (
    <DisplayStand>
      <JoyList component="nav" sx={{ maxWidth: 240 }}>
        <JoyListItemButton>
          <JoyListItemDecorator>
            <Image />
          </JoyListItemDecorator>
          Add another image
        </JoyListItemButton>
        <JoyListItemButton>
          <JoyListItemDecorator>
            <Videocam />
          </JoyListItemDecorator>
          Add another video
        </JoyListItemButton>
      </JoyList>
    </DisplayStand>
  );
}
