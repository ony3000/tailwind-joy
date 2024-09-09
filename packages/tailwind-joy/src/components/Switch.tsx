import { clsx } from 'clsx';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseVariants, GeneratorInput } from '@/base/types';
import { r, uuid } from '../base/alias';
import {
  join,
  addPrefix,
  hover,
  toColorClass,
  toVariableClass,
} from '../base/modifier';
import { baseTokens, colorTokens } from '../base/tokens';

function switchRootVariants(props?: BaseVariants) {
  const { color = 'neutral', size = 'md', variant = 'solid' } = props ?? {};

  return twMerge(
    clsx([
      'tj-switch-root group/tj-switch',
      '[--Icon-color:currentColor] dark:[--Icon-color:currentColor]',
      variant === 'outlined'
        ? '[--variant-borderWidth:1px]'
        : '[--variant-borderWidth:0px]',
      '[--Switch-trackRadius:16px]',
      variant === 'soft'
        ? '[--Switch-thumbShadow:none]'
        : '[--Switch-thumbShadow:0_0_0_1px_var(--Switch-trackBackground)]',
      size === 'sm' && [
        '[--Switch-trackWidth:26px]',
        '[--Switch-trackHeight:16px]',
        '[--Switch-thumbSize:10px]',
        'text-[0.875rem]',
        'gap-[var(--Switch-gap,6px)]',
      ],
      size === 'md' && [
        '[--Switch-trackWidth:32px]',
        '[--Switch-trackHeight:20px]',
        '[--Switch-thumbSize:14px]',
        'text-[1rem]',
        'gap-[var(--Switch-gap,8px)]',
      ],
      size === 'lg' && [
        '[--Switch-trackWidth:40px]',
        '[--Switch-trackHeight:24px]',
        '[--Switch-thumbSize:18px]',
        'gap-[var(--Switch-gap,12px)]',
      ],
      '[--unstable_paddingBlock:max((var(--Switch-trackHeight)-2*var(--variant-borderWidth,0px)-var(--Switch-thumbSize))/2,0px)]',
      r`[--Switch-thumbRadius:max(var(--Switch-trackRadius)-var(--unstable\_paddingBlock),min(var(--unstable\_paddingBlock)/2,var(--Switch-trackRadius)/2))]`,
      '[--Switch-thumbWidth:var(--Switch-thumbSize)]',
      '[--Switch-thumbOffset:max((var(--Switch-trackHeight)-var(--Switch-thumbSize))/2,0px)]',
      [
        toVariableClass(
          baseTokens[color][`${variant}Bg`],
          'Switch-trackBackground',
        ),
        toVariableClass(
          baseTokens[color][`${variant}Color`],
          'Switch-trackColor',
        ),
        variant === 'outlined'
          ? toVariableClass(
              baseTokens[color][`${variant}Border`],
              'Switch-trackBorderColor',
            )
          : '[--Switch-trackBorderColor:currentColor]',
        toVariableClass(
          baseTokens[color][`${variant}Color`],
          'Switch-thumbBackground',
        ),
        toVariableClass(baseTokens[color][`${variant}Bg`], 'Switch-thumbColor'),
      ],
      [
        hover(
          join([
            toVariableClass(
              baseTokens[color][`${variant}HoverBg`],
              'Switch-trackBackground',
            ),
            toVariableClass(
              baseTokens[color][`${variant}HoverColor`],
              'Switch-trackColor',
            ),
            variant === 'outlined'
              ? toVariableClass(
                  baseTokens[color][`${variant}HoverBorder`],
                  'Switch-trackBorderColor',
                )
              : '[--Switch-trackBorderColor:currentColor]',
            toVariableClass(
              baseTokens[color][`${variant}HoverColor`],
              'Switch-thumbBackground',
            ),
            toVariableClass(
              baseTokens[color][`${variant}HoverBg`],
              'Switch-thumbColor',
            ),
          ]),
        ),
      ],
      [
        addPrefix(
          join([
            'pointer-events-none',
            colorTokens.text.tertiary,
            toVariableClass(
              baseTokens[color][`${variant}DisabledBg`],
              'Switch-trackBackground',
            ),
            toVariableClass(
              baseTokens[color][`${variant}DisabledColor`],
              'Switch-trackColor',
            ),
            variant === 'outlined'
              ? toVariableClass(
                  baseTokens[color][`${variant}DisabledBorder`],
                  'Switch-trackBorderColor',
                )
              : '[--Switch-trackBorderColor:currentColor]',
            toVariableClass(
              baseTokens[color][`${variant}DisabledColor`],
              'Switch-thumbBackground',
            ),
            toVariableClass(
              baseTokens[color][`${variant}DisabledBg`],
              'Switch-thumbColor',
            ),
          ]),
          '[&]:has-[:disabled]:',
        ),
      ],
      'inline-flex',
      'items-center',
      'self-center',
      'relative',
      'p-[calc((var(--Switch-thumbSize)/2)-(var(--Switch-trackHeight)/2))_calc(-1*var(--Switch-thumbOffset))]',
      '[background-color:initial]',
      'border-none',
      r`m-[var(--unstable\_Switch-margin)]`,
    ]),
  );
}

function switchStartDecoratorVariants(props?: BaseVariants) {
  return twMerge(clsx(['tj-switch-start-decorator', 'inline-flex']));
}

function switchEndDecoratorVariants(props?: BaseVariants) {
  return twMerge(clsx(['tj-switch-end-decorator', 'inline-flex']));
}

function switchTrackVariants(props?: BaseVariants) {
  const { size = 'md' } = props ?? {};

  return twMerge(
    clsx([
      'tj-switch-track',
      'relative',
      '[color:var(--Switch-trackColor)]',
      'h-[var(--Switch-trackHeight)]',
      'w-[var(--Switch-trackWidth)]',
      'flex',
      'shrink-0',
      'justify-between',
      'items-center',
      'box-border',
      '[border-width:var(--variant-borderWidth,0px)] border-solid',
      '[border-color:var(--Switch-trackBorderColor)]',
      '[background-color:var(--Switch-trackBackground)]',
      'rounded-[var(--Switch-trackRadius)]',
      size === 'sm' && 'text-[0.75rem]',
      size === 'md' && 'text-[0.875rem]',
      size === 'lg' && 'text-[1rem]',
    ]),
  );
}

function switchThumbVariants(props?: BaseVariants) {
  return twMerge(
    clsx([
      'tj-switch-thumb',
      '[--Icon-fontSize:calc(var(--Switch-thumbSize)*0.75)]',
      'inline-flex',
      'justify-center',
      'items-center',
      'absolute',
      'top-1/2',
      'left-[calc(50%-var(--Switch-trackWidth)/2+var(--Switch-thumbWidth)/2+var(--Switch-thumbOffset))]',
      '-translate-x-1/2 -translate-y-1/2',
      'w-[var(--Switch-thumbWidth)]',
      'h-[var(--Switch-thumbSize)]',
      'rounded-[var(--Switch-thumbRadius)]',
      '[box-shadow:var(--Switch-thumbShadow)]',
      '[color:var(--Switch-thumbColor)]',
      '[background-color:var(--Switch-thumbBackground)]',
      'group-has-[:checked]/tj-switch:left-[calc(50%+var(--Switch-trackWidth)/2-var(--Switch-thumbWidth)/2-var(--Switch-thumbOffset))]',
    ]),
  );
}

function switchActionVariants(props?: BaseVariants) {
  return twMerge(
    clsx([
      'tj-switch-action',
      'rounded-[var(--Switch-trackRadius)]',
      'absolute',
      'inset-0',
      addPrefix(
        join([
          'outline-2 outline outline-offset-2',
          toColorClass(baseTokens.focusVisible, 'outline-'),
        ]),
        'has-[:focus-visible]:',
      ),
    ]),
  );
}

function switchInputVariants(props?: BaseVariants) {
  return twMerge(
    clsx([
      'tj-switch-input',
      'm-0',
      'h-full',
      'w-full',
      'opacity-0',
      'absolute',
      'cursor-pointer',
    ]),
  );
}

interface SwitchRootVariants extends BaseVariants {
  endDecorator?: ReactNode;
  startDecorator?: ReactNode;
}

type SwitchRootProps = Omit<ComponentProps<'input'>, keyof SwitchRootVariants> &
  SwitchRootVariants;

export const Switch = forwardRef<HTMLDivElement, SwitchRootProps>(
  function SwitchRoot(
    {
      children,
      className,
      id,
      color,
      size,
      variant,
      checked,
      defaultChecked,
      endDecorator,
      onChange,
      startDecorator,
      ...otherProps
    },
    ref,
  ) {
    const [instanceId, setInstanceId] = useState(id ?? uuid());
    const [uncontrolledChecked, setUncontrolledChecked] = useState(
      defaultChecked ?? false,
    );

    const instanceChecked = checked ?? uncontrolledChecked;

    const activeColor = color || 'primary';
    const inactiveColor = color || 'neutral';
    const instanceColor = instanceChecked ? activeColor : inactiveColor;

    return (
      <div
        ref={ref}
        className={twMerge(
          switchRootVariants({
            color: instanceColor,
            size,
            variant,
          }),
          className,
        )}
      >
        {startDecorator && (
          <span className={switchStartDecoratorVariants()}>
            {startDecorator}
          </span>
        )}
        <span className={switchTrackVariants({ size })}>
          <span className={switchThumbVariants()} />
        </span>
        <div className={switchActionVariants()}>
          <input
            id={instanceId}
            role="switch"
            type="checkbox"
            className={switchInputVariants()}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={(e) => {
              if (checked === undefined) {
                setUncontrolledChecked(e.currentTarget.checked);
              }
              if (onChange) {
                onChange(e);
              }
            }}
            {...otherProps}
          />
        </div>
        {endDecorator && (
          <span className={switchEndDecoratorVariants()}>{endDecorator}</span>
        )}
      </div>
    );
  },
);

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: switchRootVariants,
    variants: {
      color: ['primary', 'neutral', 'danger', 'success', 'warning'],
      size: ['sm', 'md', 'lg'],
      variant: ['solid', 'soft', 'outlined', 'plain'],
    },
  },
  {
    generatorFn: switchStartDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: switchEndDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: switchTrackVariants,
    variants: {
      size: ['sm', 'md', 'lg'],
    },
  },
  {
    generatorFn: switchThumbVariants,
    variants: {},
  },
  {
    generatorFn: switchActionVariants,
    variants: {},
  },
  {
    generatorFn: switchInputVariants,
    variants: {},
  },
];
