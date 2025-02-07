type BaseToken = '' | `joy-${string}` | `joy-${string} dark:joy-${string}`;

const SPACE = ' ';

/**
 * Adds a prefix to each piece of a space-separated string.
 *
 * This is useful when you need to write multiple class names with prefix.
 *
 * For example, `sm:gap-16 sm:px-12 sm:py-16` can be written as `addPrefix('gap-16 px-12 py-16', 'sm:')`.
 */
export function addPrefix(
  classNameOrToken: string,
  prefix: `${string}:`,
): string {
  return classNameOrToken
    .split(SPACE)
    .filter(Boolean)
    .map((item) =>
      item.startsWith('dark:')
        ? item.replace(/^dark:(.+)$/, `dark:${prefix}$1`)
        : item.replace(/^(.+)$/, `${prefix}${item}`),
    )
    .join(SPACE);
}

/**
 * A shortcut for the `addPrefix` function.
 */
export function hover(classNameOrToken: string): string {
  return addPrefix(classNameOrToken, 'non-touchscreen-hover:');
}

/**
 * A shortcut for the `addPrefix` function.
 */
export function focus(classNameOrToken: string): string {
  return addPrefix(classNameOrToken, 'focus-visible:');
}

/**
 * A shortcut for the `addPrefix` function.
 */
export function active(classNameOrToken: string): string {
  return addPrefix(classNameOrToken, '[&]:active:');
}

/**
 * A shortcut for the `addPrefix` function.
 */
export function disabled(classNameOrToken: string): string {
  return addPrefix(classNameOrToken, 'disabled:');
}

/**
 * Converts a color token string into a valid Tailwind CSS class name.
 */
export function toColorClass(token: BaseToken, prefix: `${string}-`): string {
  return token.replace(/(joy-[a-z0-9]+-[a-z0-9]+)/g, `${prefix}$1`);
}

/**
 * A shortcut for the `toColorClass` function.
 */
export function backgroundColor(token: BaseToken): string {
  return toColorClass(token, 'bg-');
}

/**
 * A shortcut for the `toColorClass` function.
 */
export function borderColor(token: BaseToken): string {
  return toColorClass(token, 'border-');
}

/**
 * A shortcut for the `toColorClass` function.
 */
export function textColor(token: BaseToken): string {
  return toColorClass(token, 'text-');
}

/**
 * Converts a color token string into a class name that specifies the value of a CSS variable.
 */
export function toVariableClass(
  token: BaseToken,
  variableName: string,
): string {
  return token.replace(
    /(joy-[a-z0-9]+-[a-z0-9]+)/g,
    `[--${variableName}:var(--color-$1)]`,
  );
}
