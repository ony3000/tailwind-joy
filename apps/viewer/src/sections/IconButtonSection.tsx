import {
  CircularProgress,
  // IconButton
} from 'tailwind-joy/components';
import {
  Card as JCard,
  IconButton as JIconButton,
  Typography as JTypography,
} from '@mui/joy';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';

function SectionHeader() {
  return (
    <>
      <JTypography level="h1">Icon Button</JTypography>
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
      variant: 'plain',
      color: 'neutral',
      loading: false,
      loadingIndicator: <CircularProgress />,
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
    title: 'variant: solid',
    props: {
      variant: 'solid',
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
    title: 'color: primary',
    props: {
      color: 'primary',
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
    title: 'loading: true (variant: solid)',
    props: {
      loading: true,
      variant: 'solid',
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
    title: 'loading: true (color: primary)',
    props: {
      loading: true,
      color: 'primary',
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
    title: 'loadingIndicator (icon)',
    props: {
      loading: true,
      loadingIndicator: <PendingOutlinedIcon />,
    },
  },
];

export default function IconButtonSection() {
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
                <JIconButton {...props}>
                  <FavoriteBorderIcon />
                </JIconButton>
              </div>
              <div>
                <JIconButton {...props} disabled>
                  <FavoriteBorderIcon />
                </JIconButton>
              </div>
            </div>
            <JTypography level="body-sm">{title}</JTypography>
            <div className="grid grid-cols-2">
              <div>
                <JIconButton {...props}>
                  <FavoriteBorderIcon />
                </JIconButton>
              </div>
              <div>
                <JIconButton {...props} disabled>
                  <FavoriteBorderIcon />
                </JIconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </JCard>
  );
}
