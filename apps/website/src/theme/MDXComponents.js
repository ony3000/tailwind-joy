import MDXComponents from '@theme-original/MDXComponents';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button as JoyButton } from '@mui/joy';
import { Button, IconButton } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export default {
  ...MDXComponents,
  CssVarsProvider,
  JoyButton,
  Button,
  IconButton,
  DisplayStand,
};
