import './App.css';
import {
  Box as JBox,
  IconButton as JIconButton,
  Tabs as JTabs,
  TabList as JTabList,
  Tab as JTab,
  TabPanel as JTabPanel,
} from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ButtonSection, CircularProgressSection } from './sections';

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
      <JTabs aria-label="Component tabs" defaultValue={0}>
        <JTabList>
          <JTab>Button</JTab>
          <JTab>CircularProgress</JTab>
        </JTabList>
        <JTabPanel value={0}>
          <ButtonSection />
        </JTabPanel>
        <JTabPanel value={1}>
          <CircularProgressSection />
        </JTabPanel>
      </JTabs>
    </JBox>
  );
}

export default App;
