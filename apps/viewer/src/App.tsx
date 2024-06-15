import './App.css';
import { Box as JBox, IconButton as JIconButton } from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ButtonSection } from './sections';

function App() {
  const { colorScheme, setMode, setColorScheme } = useColorScheme();

  return (
    <JBox sx={{ p: 2 }}>
      <JBox display="flex" justifyContent="flex-end" sx={{ p: 2 }}>
        <JIconButton
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
        </JIconButton>
      </JBox>
      <ButtonSection />
    </JBox>
  );
}

export default App;
