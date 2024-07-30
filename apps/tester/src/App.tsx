import './App.css';

import type { ComponentProps } from 'react';
import { StrictMode } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';

export function App({
  children,
  mode,
}: ComponentProps<'main'> & { mode: 'light' | 'dark' }) {
  return (
    <StrictMode>
      <CssVarsProvider defaultMode={mode}>
        <main className={mode === 'dark' ? 'dark bg-slate-900 text-white' : ''}>
          {children}
        </main>
      </CssVarsProvider>
    </StrictMode>
  );
}
