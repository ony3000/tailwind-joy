// import { IconButton } from 'tailwind-joy/components';
import {
  Card as JCard,
  IconButton as JIconButton,
  Typography as JTypography,
} from '@mui/joy';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
