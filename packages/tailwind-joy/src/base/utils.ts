import defaultTheme from 'tailwindcss/defaultTheme';

export function isTailwindVersion4() {
  return defaultTheme.transitionProperty.colors.includes(
    // NOTE: Added in tailwindcss@4.0.0-beta.10.
    'outline-color',
  );
}

export function excludeClassName<T extends Record<string, unknown>>(
  slotProps: T,
): {
  [K in keyof T]: T[K] extends infer R
    ? Omit<NonNullable<R>, 'className'>
    : never;
} {
  // @ts-expect-error
  return Object.fromEntries(
    Object.entries(slotProps).map(([slotName, slotProp]) => [
      slotName,
      Object.fromEntries(
        Object.entries(
          // @ts-expect-error
          slotProp,
        ).filter(([key]) => key !== 'className'),
      ),
    ]),
  );
}
