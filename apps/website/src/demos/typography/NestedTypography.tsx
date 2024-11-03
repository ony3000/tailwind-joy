import { Typography as JoyTypography } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyNestedTypography() {
  return (
    <DisplayStand>
      <JoyTypography className="max-w-[400px]">
        Typography lets you create{' '}
        <JoyTypography variant="soft">nested</JoyTypography> typography. Use
        your{' '}
        <JoyTypography variant="outlined" color="success">
          imagination
        </JoyTypography>{' '}
        to build wonderful{' '}
        <JoyTypography variant="solid" color="primary" noWrap>
          user interface
        </JoyTypography>
        .
      </JoyTypography>
    </DisplayStand>
  );
}
