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
