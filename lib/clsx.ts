type ClassValue = string | number | null | false | undefined;

/** Minimal class-name joiner — keeps JSX readable without pulling in a dependency. */
export function clsx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
