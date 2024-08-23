export function AvailableFrom({ version }: { version: string }) {
  return (
    <p>
      <span className="bg-joy-neutral-200 text-joy-neutral-700 dark:bg-joy-neutral-500 dark:text-joy-common-white min-h-6 relative inline-flex max-w-max items-center justify-center gap-1 rounded-lg px-2 align-middle text-sm font-medium">
        Available from version {version}
      </span>
    </p>
  );
}
