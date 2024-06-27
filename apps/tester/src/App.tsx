import './App.css';

import type { ComponentProps } from 'react';
import { StrictMode } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';

export function App({ children }: ComponentProps<'main'>) {
  return (
    <StrictMode>
      <CssVarsProvider defaultMode="system">
        <main>{children}</main>
      </CssVarsProvider>
    </StrictMode>
  );
}
