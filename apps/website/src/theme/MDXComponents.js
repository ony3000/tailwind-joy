import MDXComponents from '@theme-original/MDXComponents';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button as JoyButton } from '@mui/joy';
import {
  Button,
  CircularProgress,
  IconAdapter,
  IconButton,
  LinearProgress,
} from 'tailwind-joy/components';
import { AvailableFrom } from '@site/src/components/docs/AvailableFrom';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export default {
  ...MDXComponents,

  // --------------------------------

  CssVarsProvider,
  JoyButton,

  // --------------------------------

  Button,
  CircularProgress,
  IconAdapter,
  IconButton,
  LinearProgress,

  // --------------------------------

  AvailableFrom,
  DisplayStand,
};
