import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';

import ReportIcon from '@mui/icons-material/Report';
import WarningIcon from '@mui/icons-material/Warning';
import { MdReport, MdWarning } from 'react-icons/md';
import { CircularProgress as JoyCircularProgress } from '@mui/joy';
import { CircularProgress as TJCircularProgress } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const basename = sep === '/' ? pathPosix.basename : pathWin32.basename;
const filename = basename(__filename);
const screenshotPath = resolve(__dirname, `../__screenshots__/${filename}`);

const containerClassName =
  'flex h-[100px] w-[100px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        />
      );
    },
  },
  {
    title: 'thickness: 1',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          thickness={1}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          thickness={1}
        />
      );
    },
  },
  {
    title: 'thickness: 3',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          thickness={3}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          thickness={3}
        />
      );
    },
  },
  {
    title: 'determinate (value: 25)',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={25}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={25}
        />
      );
    },
  },
  {
    title: 'determinate (value: 50)',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={50}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={50}
        />
      );
    },
  },
  {
    title: 'determinate (value: 75)',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={75}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={75}
        />
      );
    },
  },
  {
    title: 'determinate (value: 100)',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={100}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={100}
        />
      );
    },
  },
  {
    title: 'children (icon)',
    alterColors: ['warning'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <WarningIcon
            // @ts-ignore
            color={color}
          />
        </JoyCircularProgress>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
        >
          <MdWarning />
        </TJCircularProgress>
      );
    },
  },
  {
    title: 'children (string)',
    alterSizes: ['lg'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={66.67}
        >
          2 / 3
        </JoyCircularProgress>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          determinate
          value={66.67}
        >
          2 / 3
        </TJCircularProgress>
      );
    },
  },
  {
    title: 'children (icon w/sx)',
    alterColors: ['danger'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          sx={{ '--CircularProgress-size': '80px' }}
        >
          <ReportIcon
            // @ts-ignore
            color={color}
          />
        </JoyCircularProgress>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJCircularProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          style={{
            // @ts-ignore
            '--CircularProgress-size': '80px',
          }}
        >
          <MdReport />
        </TJCircularProgress>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  screenshotPath,
  viewport: { width: 500, height: 500 },
});
