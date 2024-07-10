import MDXComponents from '@theme-original/MDXComponents';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button as JoyButton } from '@mui/joy';
import { Button } from 'tailwind-joy/components';

export default {
  ...MDXComponents,
  CssVarsProvider,
  JoyButton,
  Button,
};
