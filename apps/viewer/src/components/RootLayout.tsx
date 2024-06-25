import type { ComponentProps } from 'react';
import { Box, IconButton } from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export function RootLayout({ children }: ComponentProps<'main'>) {
  const { colorScheme, setMode, setColorScheme } = useColorScheme();

  return (
    <main>
      <Box sx={{ p: 2 }}>
        <Box display="flex" justifyContent="flex-end" sx={{ p: 2 }}>
          <IconButton
            variant="plain"
            onClick={() => {
              if (colorScheme === 'dark') {
                setMode('light');
                setColorScheme('light');
                document.documentElement.classList.remove('dark');
              } else {
                setMode('dark');
                setColorScheme('dark');
                document.documentElement.classList.add('dark');
              }
            }}
          >
            {colorScheme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
        {children}
      </Box>
    </main>
  );
}
