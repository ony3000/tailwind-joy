import MDXComponents from '@theme-original/MDXComponents';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button as JoyButton } from '@mui/joy';
import {
  Button,
  ButtonGroup,
  Checkbox,
  CircularProgress,
  IconAdapter,
  IconButton,
  LinearProgress,
  Radio,
} from 'tailwind-joy/components';
import { AvailableFrom } from '@site/src/components/docs/AvailableFrom';
import { DeprecatedIn } from '@site/src/components/docs/DeprecatedIn';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export default {
  ...MDXComponents,

  // --------------------------------

  CssVarsProvider,
  JoyButton,

  // --------------------------------

  Button,
  ButtonGroup,
  Checkbox,
  CircularProgress,
  IconAdapter,
  IconButton,
  LinearProgress,
  Radio,

  // --------------------------------

  AvailableFrom,
  DeprecatedIn,
  DisplayStand,
};
