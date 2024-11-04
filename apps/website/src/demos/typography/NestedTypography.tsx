import { Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyNestedTypography() {
  return (
    <DisplayStand>
      <Typography className="max-w-[400px]">
        Typography lets you create{' '}
        <Typography variant="soft">nested</Typography> typography. Use your{' '}
        <Typography variant="outlined" color="success">
          imagination
        </Typography>{' '}
        to build wonderful{' '}
        <Typography variant="solid" color="primary" noWrap>
          user interface
        </Typography>
        .
      </Typography>
    </DisplayStand>
  );
}
