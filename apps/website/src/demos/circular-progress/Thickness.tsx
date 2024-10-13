import { CircularProgress } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CircularProgressThickness() {
  return (
    <DisplayStand>
      <CircularProgress thickness={1} />
    </DisplayStand>
  );
}
