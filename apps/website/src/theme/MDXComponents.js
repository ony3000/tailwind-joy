import MDXComponents from '@theme-original/MDXComponents';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button as JoyButton } from '@mui/joy';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CircularProgress,
  Divider,
  IconAdapter,
  IconButton,
  LinearProgress,
  Radio,
  RadioGroup,
  Sheet,
  Switch,
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

  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CircularProgress,
  Divider,
  IconAdapter,
  IconButton,
  LinearProgress,
  Radio,
  RadioGroup,
  Sheet,
  Switch,

  // --------------------------------

  AvailableFrom,
  DeprecatedIn,
  DisplayStand,
};
