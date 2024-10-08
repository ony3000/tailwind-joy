import { Button, ButtonGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonGroupStretching2() {
  return (
    <DisplayStand>
      <ButtonGroup buttonFlex="0 1 200px" className="w-full justify-center">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </DisplayStand>
  );
}
