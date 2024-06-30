import './App.css';

import type { ComponentProps } from 'react';
import { StrictMode } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';

export function App({ children }: ComponentProps<'main'>) {
  return (
    <StrictMode>
      <CssVarsProvider defaultMode="light">
        <main>{children}</main>
      </CssVarsProvider>
    </StrictMode>
  );
}

export function DarkModeApp({ children }: ComponentProps<'main'>) {
  return (
    <StrictMode>
      <CssVarsProvider defaultMode="dark">
        <main className="dark bg-slate-900 text-white">{children}</main>
      </CssVarsProvider>
    </StrictMode>
  );
}
