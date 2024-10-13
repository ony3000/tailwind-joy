import { LinearProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function LinearProgressThickness() {
  return (
    <DisplayStand>
      <LinearProgress thickness={1} />
    </DisplayStand>
  );
}
