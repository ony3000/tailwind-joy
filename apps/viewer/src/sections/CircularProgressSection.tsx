import {
  Card as JCard,
  CircularProgress as JCircularProgress,
  Typography as JTypography,
} from '@mui/joy';
import ReportIcon from '@mui/icons-material/Report';
import WarningIcon from '@mui/icons-material/Warning';

function SectionHeader() {
  return (
    <>
      <JTypography level="h1">Circular Progress</JTypography>
      <div className="space-y-2">
        <div className="grid grid-cols-[4fr_1fr_4fr]">
          <JTypography level="h2" fontSize="xl">
            tailwind-joy
          </JTypography>
          <div />
          <JTypography level="h2" fontSize="xl">
            @mui/joy
          </JTypography>
        </div>
        <div className="grid grid-cols-[4fr_1fr_4fr] text-center">
          <div className="grid grid-cols-1">
            <JTypography level="title-lg">&nbsp;</JTypography>
          </div>
          <div />
          <div className="grid grid-cols-1">
            <JTypography level="title-lg">&nbsp;</JTypography>
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
    title: 'thickness: 1',
    props: {
      thickness: 1,
    },
  },
  {
    title: 'thickness: 3',
    props: {
      thickness: 3,
    },
  },
  {
    title: 'determinate (25)',
    props: {
      determinate: true,
      value: 25,
    },
  },
  {
    title: 'determinate (50)',
    props: {
      determinate: true,
      value: 50,
    },
  },
  {
    title: 'determinate (75)',
    props: {
      determinate: true,
      value: 75,
    },
  },
  {
    title: 'determinate (100)',
    props: {
      determinate: true,
      value: 100,
    },
  },
  {
    title: 'children (icon)',
    props: {
      color: 'warning',
      children: <WarningIcon color="warning" />,
    },
  },
  {
    title: 'children (string)',
    props: {
      size: 'lg',
      determinate: true,
      value: 66.67,
      children: '2 / 3',
    },
  },
  {
    title: 'children (icon w/sx)',
    props: {
      color: 'danger',
      // @ts-ignore
      children: <ReportIcon color="danger" />,
      className: '[--CircularProgress-size:80px]',
    },
  },
];

export default function CircularProgressSection() {
  return (
    <JCard variant="outlined">
      <SectionHeader />
      <div className="space-y-2">
        {customs.map(({ title, props }) => (
          <div
            key={title}
            className="min-h-12 grid grid-cols-[4fr_1fr_4fr] items-center text-center"
          >
            <div className="grid grid-cols-1">
              <div>
                <JCircularProgress {...props} />
              </div>
            </div>
            <JTypography level="body-sm">{title}</JTypography>
            <div className="grid grid-cols-1">
              <div>
                <JCircularProgress {...props} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </JCard>
  );
}
