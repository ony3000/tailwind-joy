export function DeprecatedIn({ version }: { version: string }) {
  return (
    <p>
      <span className="bg-joy-warning-200 text-joy-warning-700 dark:bg-joy-warning-500 dark:text-joy-common-white relative inline-flex min-h-6 max-w-max items-center justify-center gap-1 rounded-lg px-2 align-middle text-sm font-medium">
        Deprecated in version {version}
      </span>
    </p>
  );
}
