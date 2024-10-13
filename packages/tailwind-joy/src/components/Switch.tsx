import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import { forwardRef, createElement, useState, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import type {
  BaseVariants,
  GeneratorInput,
  GenericComponentPropsWithVariants,
} from '@/base/types';
import { r, uuid } from '../base/alias';
import {
  addPrefix,
  hover,
  toColorClass,
  toVariableClass,
} from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens, colorTokens } from '../base/tokens';
import { excludeClassName } from '../base/utils';

type PassingProps = Pick<
  ComponentProps<'input'>,
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'id'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'readOnly'
  | 'required'
>;

function getSwitchColorClassName(
  props: Required<Pick<BaseVariants, 'color' | 'variant'>> & {
    state?: 'Hover' | 'Disabled';
  },
): string[] {
  const { color, variant, state = '' } = props ?? {};

  return [
    toVariableClass(
      theme.variants[`${variant}${state}`][color].tokens.backgroundColor ||
        baseTokens.background.surface,
      'Switch-trackBackground',
    ),
    toVariableClass(
      theme.variants[`${variant}${state}`][color].tokens.color,
      'Switch-trackColor',
    ),
    variant === 'outlined'
      ? toVariableClass(
          theme.variants[`${variant}${state}`][color].tokens.borderColor,
          'Switch-trackBorderColor',
        )
      : '[--Switch-trackBorderColor:currentColor]',
    toVariableClass(
      theme.variants[`${variant}${state}`][color].tokens.color,
      'Switch-thumbBackground',
    ),
    toVariableClass(
      theme.variants[`${variant}${state}`][color].tokens.backgroundColor ||
        baseTokens.background.surface,
      'Switch-thumbColor',
    ),
  ];
}

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
      getSwitchColorClassName({ color, variant }),
      hover(clsx(getSwitchColorClassName({ color, variant, state: 'Hover' }))),
      addPrefix(
        clsx([
          'pointer-events-none',
          colorTokens.text.tertiary,
          getSwitchColorClassName({ color, variant, state: 'Disabled' }),
        ]),
        '[&]:has-[:disabled]:',
      ),
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

function switchActionVariants() {
  return twMerge(
    clsx([
      'tj-switch-action',
      'rounded-[var(--Switch-trackRadius)]',
      'absolute',
      'inset-0',
      addPrefix(
        clsx([
          'outline-2 outline outline-offset-2',
          toColorClass(baseTokens.focusVisible, 'outline-'),
        ]),
        'has-[:focus-visible]:',
      ),
    ]),
  );
}

function switchInputVariants() {
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

function switchTrackVariants(props?: Pick<BaseVariants, 'size'>) {
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

function switchThumbVariants() {
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

function switchStartDecoratorVariants() {
  return twMerge(clsx(['tj-switch-start-decorator', 'inline-flex']));
}

function switchEndDecoratorVariants() {
  return twMerge(clsx(['tj-switch-end-decorator', 'inline-flex']));
}

type SwitchRootVariants = BaseVariants & {
  endDecorator?: ReactNode;
  startDecorator?: ReactNode;
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
    action?: ComponentProps<'div'>;
    input?: ComponentProps<'input'>;
    track?: ComponentProps<'span'>;
    thumb?: ComponentProps<'span'>;
    startDecorator?: ComponentProps<'span'>;
    endDecorator?: ComponentProps<'span'>;
  };
} & PassingProps;

type SwitchRootProps<T> = GenericComponentPropsWithVariants<
  'div',
  SwitchRootVariants,
  T
>;

function SwitchRoot<
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  {
    // ---- passing props ----
    checked,
    defaultChecked,
    disabled,
    id,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required,
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color,
    size,
    variant,

    // non-base variants
    className,
    endDecorator,
    startDecorator,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: SwitchRootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const [instanceId, setInstanceId] = useState(id ?? uuid());
  const [uncontrolledChecked, setUncontrolledChecked] = useState(
    defaultChecked ?? false,
  );
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  const instanceChecked = checked ?? uncontrolledChecked;

  const activeColor = color || 'primary';
  const inactiveColor = color || 'neutral';
  const instanceColor = instanceChecked ? activeColor : inactiveColor;

  return createElement(
    component,
    {
      ref,
      className: twMerge(
        switchRootVariants({
          color: instanceColor,
          size,
          variant,
        }),
        className,
        slotProps.root?.className ?? '',
      ),
      ...otherProps,
      ...(slotPropsWithoutClassName.root ?? {}),
    },
    <>
      {startDecorator && (
        <span
          className={twMerge(
            switchStartDecoratorVariants(),
            slotProps.startDecorator?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.startDecorator ?? {})}
        >
          {startDecorator}
        </span>
      )}
      <span
        className={twMerge(
          switchTrackVariants({ size }),
          slotProps.track?.className ?? '',
        )}
        {...(slotPropsWithoutClassName.track ?? {})}
      >
        <span
          className={twMerge(
            switchThumbVariants(),
            slotProps.thumb?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.thumb ?? {})}
        />
      </span>
      <div
        className={twMerge(
          switchActionVariants(),
          slotProps.action?.className ?? '',
        )}
        {...(slotPropsWithoutClassName.action ?? {})}
      >
        <input
          role="switch"
          type="checkbox"
          className={twMerge(
            switchInputVariants(),
            slotProps.input?.className ?? '',
          )}
          {...{
            checked,
            defaultChecked,
            disabled,
            id: instanceId,
            onBlur,
            onChange: (e) => {
              if (checked === undefined) {
                setUncontrolledChecked(e.currentTarget.checked);
              }
              if (onChange) {
                onChange(e);
              }
            },
            onFocus,
            readOnly,
            required,
          }}
          {...(slotPropsWithoutClassName.input ?? {})}
        />
      </div>
      {endDecorator && (
        <span
          className={twMerge(
            switchEndDecoratorVariants(),
            slotProps.endDecorator?.className ?? '',
          )}
          {...(slotPropsWithoutClassName.endDecorator ?? {})}
        >
          {endDecorator}
        </span>
      )}
    </>,
  );
}

export const Switch = forwardRef(SwitchRoot) as <
  T extends keyof JSX.IntrinsicElements | undefined = undefined,
>(
  props: SwitchRootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

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
    generatorFn: switchActionVariants,
    variants: {},
  },
  {
    generatorFn: switchInputVariants,
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
    generatorFn: switchStartDecoratorVariants,
    variants: {},
  },
  {
    generatorFn: switchEndDecoratorVariants,
    variants: {},
  },
];
