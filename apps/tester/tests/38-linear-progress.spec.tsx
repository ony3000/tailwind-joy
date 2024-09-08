import { LinearProgress as JoyLinearProgress } from '@mui/joy';
import { LinearProgress as TJLinearProgress } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[100px] w-[100px] items-center justify-center p-2';

/**
 * Assume the animation is stopped at 0%.
 *
 * This is a workaround for the pseudo element (here `before`) not appearing when capturing a screenshot with animation disabled.
 */
const simulationProps = {
  determinate: true,
  value: 12.5,
};

const fixtures: Fixture[] = [
  {
    title: 'basics',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyLinearProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          {...simulationProps}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJLinearProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          {...simulationProps}
        />
      );
    },
  },
  {
    title: 'thickness: 1',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyLinearProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          {...simulationProps}
          thickness={1}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJLinearProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          {...simulationProps}
          thickness={1}
        />
      );
    },
  },
  {
    title: 'thickness: 3',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyLinearProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          {...simulationProps}
          thickness={3}
        />
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJLinearProgress
          data-testid={testId}
          size={size}
          variant={variant}
          color={color}
          {...simulationProps}
          thickness={3}
        />
      );
    },
  },
  {
    title: 'determinate (value: 25)',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyLinearProgress
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
        <TJLinearProgress
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
        <JoyLinearProgress
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
        <TJLinearProgress
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
        <JoyLinearProgress
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
        <TJLinearProgress
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
        <JoyLinearProgress
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
        <TJLinearProgress
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
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
