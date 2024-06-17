import { Button } from 'tailwind-joy/components';
import {
  Button as JButton,
  Card as JCard,
  Typography as JTypography,
} from '@mui/joy';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function SectionHeader() {
  return (
    <>
      <JTypography level="h1">Button</JTypography>
      <div className="space-y-2">
        <div className="grid grid-cols-[2fr_1fr_2fr]">
          <JTypography level="h2" fontSize="xl">
            tailwind-joy
          </JTypography>
          <div />
          <JTypography level="h2" fontSize="xl">
            @mui/joy
          </JTypography>
        </div>
        <div className="grid grid-cols-[2fr_1fr_2fr] text-center">
          <div className="grid grid-cols-2">
            <JTypography level="title-lg">Enabled</JTypography>
            <JTypography level="title-lg">Disabled</JTypography>
          </div>
          <div />
          <div className="grid grid-cols-2">
            <JTypography level="title-lg">Enabled</JTypography>
            <JTypography level="title-lg">Disabled</JTypography>
          </div>
        </div>
      </div>
    </>
  );
}

const customs: { title: string; props: Record<string, any> }[] = [
  {
    title: 'default',
    props: {},
  },
  {
    title: 'size: sm',
    props: {
      size: 'sm',
    },
  },
  {
    title: 'size: lg',
    props: {
      size: 'lg',
    },
  },
  {
    title: 'variant: soft',
    props: {
      variant: 'soft',
    },
  },
  {
    title: 'variant: outlined',
    props: {
      variant: 'outlined',
    },
  },
  {
    title: 'variant: plain',
    props: {
      variant: 'plain',
    },
  },
  {
    title: 'color: neutral',
    props: {
      color: 'neutral',
    },
  },
  {
    title: 'color: danger',
    props: {
      color: 'danger',
    },
  },
  {
    title: 'color: success',
    props: {
      color: 'success',
    },
  },
  {
    title: 'color: warning',
    props: {
      color: 'warning',
    },
  },
  {
    title: 'start decorator',
    props: {
      startDecorator: <AddIcon />,
    },
  },
  {
    title: 'end decorator',
    props: {
      endDecorator: <KeyboardArrowRightIcon />,
    },
  },
  {
    title: 'end decorator (size: sm)',
    props: {
      size: 'sm',
      endDecorator: <KeyboardArrowRightIcon />,
    },
  },
  {
    title: 'end decorator (size: lg)',
    props: {
      size: 'lg',
      endDecorator: <KeyboardArrowRightIcon />,
    },
  },
  {
    title: 'full width',
    props: {
      fullWidth: true,
    },
  },
];

export default function ButtonSection() {
  return (
    <JCard variant="outlined">
      <SectionHeader />
      <div className="space-y-2">
        {customs.map(({ title, props }) => (
          <div
            key={title}
            className="min-h-12 grid grid-cols-[2fr_1fr_2fr] items-center text-center"
          >
            <div className="grid grid-cols-2">
              <div>
                <Button {...props}>Button</Button>
              </div>
              <div>
                <Button {...props} disabled>
                  Button
                </Button>
              </div>
            </div>
            <JTypography level="body-sm">{title}</JTypography>
            <div className="grid grid-cols-2">
              <div>
                <JButton {...props}>Button</JButton>
              </div>
              <div>
                <JButton {...props} disabled>
                  Button
                </JButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </JCard>
  );
}
