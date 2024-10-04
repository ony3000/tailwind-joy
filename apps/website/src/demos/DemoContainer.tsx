import { CssVarsProvider } from '@mui/joy/styles';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

/**
 * For demo use only. Should be omitted from code blocks.
 */
export function DemoContainer({ children }: any) {
  return (
    <DisplayStand>
      <CssVarsProvider modeStorageKey="theme">{children}</CssVarsProvider>
    </DisplayStand>
  );
}
