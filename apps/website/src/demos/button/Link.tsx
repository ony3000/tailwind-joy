import { MdOpenInNew } from 'react-icons/md';
import { Button } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonLink() {
  return (
    <DisplayStand>
      <Button
        component="a"
        href="/docs/components/button"
        target="_blank"
        rel="noreferrer"
        color="neutral"
        variant="soft"
        startDecorator={<MdOpenInNew className={iconClass()} />}
      >
        Open in new tab
      </Button>
    </DisplayStand>
  );
}
