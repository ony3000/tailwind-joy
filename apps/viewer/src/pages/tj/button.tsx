import { Fragment } from 'react';
import { Box, Card, Typography } from '@mui/joy';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from 'tailwind-joy/components';

const sizes = ['sm', 'md', 'lg'] as const;

const variants = ['solid', 'soft', 'outlined', 'plain'] as const;

const colors = ['primary', 'neutral', 'danger', 'success', 'warning'] as const;

const customs: { title: string; props: Record<string, any> }[] = [
  {
    title: 'default',
    props: {},
  },
  {
    title: 'startDecorator',
    props: {
      startDecorator: <AddIcon />,
    },
  },
  {
    title: 'endDecorator',
    props: {
      endDecorator: <KeyboardArrowRightIcon />,
    },
  },
  {
    title: 'fullWidth',
    props: {
      fullWidth: true,
    },
  },
  {
    title: 'loading',
    props: {
      loading: true,
    },
  },
  {
    title: 'loadingIndicator',
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
    title: 'loadingPosition: end',
    props: {
      loading: true,
      loadingPosition: 'end',
      endDecorator: <KeyboardArrowRightIcon />,
    },
  },
];

export default function JoyButtonPage() {
  return (
    <Box>
      <Typography level="h1" sx={{ mb: 2 }}>
        Button
      </Typography>
      <div className="grid grid-cols-1 gap-4 min-[920px]:grid-cols-2 min-[1380px]:grid-cols-3 min-[1840px]:grid-cols-4">
        {customs.map(({ title, props }) => {
          const testIdSuffix = Object.keys(props).join('-');

          return (
            <Fragment key={title}>
              {colors.map((color) => (
                <Fragment key={color}>
                  <Card variant="outlined">
                    {variants.map((variant) => (
                      <div key={variant} className="grid grid-cols-3 gap-4">
                        {sizes.map((size) => {
                          const testIdBase = `${color}-${variant}-${size}`;

                          return (
                            <div
                              key={size}
                              data-testid={`container-${testIdBase}${
                                testIdSuffix ? `-${testIdSuffix}` : ''
                              }`}
                              tabIndex={0}
                              className="flex items-center justify-center py-1"
                            >
                              <Button
                                data-testid={`element-${testIdBase}${
                                  testIdSuffix ? `-${testIdSuffix}` : ''
                                }`}
                                size={size}
                                variant={variant}
                                color={color}
                                {...props}
                              >
                                Button
                              </Button>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </Card>
                  <Card variant="outlined">
                    {variants.map((variant) => (
                      <div key={variant} className="grid grid-cols-3 gap-4">
                        {sizes.map((size) => (
                          <div
                            key={size}
                            className="flex items-center justify-center"
                          >
                            <Button
                              size={size}
                              variant={variant}
                              color={color}
                              {...props}
                              disabled
                            >
                              Button
                            </Button>
                          </div>
                        ))}
                      </div>
                    ))}
                  </Card>
                </Fragment>
              ))}
            </Fragment>
          );
        })}
      </div>
    </Box>
  );
}
