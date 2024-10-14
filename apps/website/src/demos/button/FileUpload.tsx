import { MdOutlineCloudUpload } from 'react-icons/md';
import { Button } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

function VisuallyHiddenInput() {
  return (
    <input
      type="file"
      className="
        absolute bottom-0 left-0 h-px w-px overflow-hidden
        whitespace-nowrap [clip-path:inset(50%)] [clip:rect(0_0_0_0)]
      "
    />
  );
}

export function ButtonFileUpload() {
  return (
    <DisplayStand>
      <Button
        component="label"
        role={undefined}
        tabIndex={-1}
        color="neutral"
        variant="outlined"
        startDecorator={<MdOutlineCloudUpload className={iconClass()} />}
      >
        Upload a file
        <VisuallyHiddenInput />
      </Button>
    </DisplayStand>
  );
}
