import MDXComponents from '@theme-original/MDXComponents';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button as JoyButton } from '@mui/joy';
import { Box, Button, IconAdapter } from 'tailwind-joy/components';
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
  IconAdapter,

  // --------------------------------

  AvailableFrom,
  DeprecatedIn,
  DisplayStand,
};
