import { Button, CircularProgress } from 'tailwind-joy/components';
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
    title: 'default with props',
    props: {
      size: 'md',
      variant: 'solid',
      color: 'primary',
      startDecorator: undefined,
      endDecorator: undefined,
      fullWidth: false,
      loading: false,
      loadingIndicator: <CircularProgress />,
      loadingPosition: 'center',
    },
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
    title: 'fullWidth: true',
    props: {
      fullWidth: true,
    },
  },
  {
    title: 'loading: true',
    props: {
      loading: true,
    },
  },
  {
    title: 'loading: true (size: sm)',
    props: {
      loading: true,
      size: 'sm',
    },
  },
  {
    title: 'loading: true (size: lg)',
    props: {
      loading: true,
      size: 'lg',
    },
  },
  {
    title: 'loading: true (variant: soft)',
    props: {
      loading: true,
      variant: 'soft',
    },
  },
  {
    title: 'loading: true (variant: outlined)',
    props: {
      loading: true,
      variant: 'outlined',
    },
  },
  {
    title: 'loading: true (variant: plain)',
    props: {
      loading: true,
      variant: 'plain',
    },
  },
  {
    title: 'loading: true (color: neutral)',
    props: {
      loading: true,
      color: 'neutral',
    },
  },
  {
    title: 'loading: true (color: danger)',
    props: {
      loading: true,
      color: 'danger',
    },
  },
  {
    title: 'loading: true (color: success)',
    props: {
      loading: true,
      color: 'success',
    },
  },
  {
    title: 'loading: true (color: warning)',
    props: {
      loading: true,
      color: 'warning',
    },
  },
  {
    title: 'loadingIndicator: "Loading..."',
    props: {
      loading: true,
      loadingIndicator: 'Loading...',
    },
  },
  {
    title: 'loadingPosition: start',
    props: {
      loading: true,
      loadingPosition: 'start',
    },
  },
  {
    title: 'loadingPosition: end (w/ decorator)',
    props: {
      loading: true,
      loadingPosition: 'end',
      endDecorator: <KeyboardArrowRightIcon />,
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
