import { clsx } from "@/lib/clsx";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

/** Shared page gutter + max width so every section lines up. */
export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={clsx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
    >
      {children}
    </div>
  );
}
