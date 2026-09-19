import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-radius-control border border-input bg-transparent px-space-10 py-space-4 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-border-strong focus-visible:ring-3 focus-visible:ring-color-cobalt disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-surface-subtle disabled:opacity-50 aria-invalid:border-color-danger aria-invalid:ring-3 aria-invalid:ring-color-danger md:text-sm dark:bg-surface-subtle dark:disabled:bg-surface-subtle dark:aria-invalid:border-color-danger",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
