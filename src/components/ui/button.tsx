import * as React from "react"

import { cn } from "cn"

export type ButtonState =
  | "Default"
  | "Hover"
  | "Pressed"
  | "Focus"
  | "Disabled"
  | "Loading"

export type ButtonProps = React.ComponentProps<"button"> & {
  /** Visual state from the Figma Button component set. */
  state?: ButtonState
}

function Button({
  children = "Get Started",
  className,
  disabled,
  state = "Default",
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || state === "Disabled" || state === "Loading"
  const label = state === "Loading" ? "Loading…" : children

  return (
    <button
      data-slot="button"
      data-state={state}
      type={type}
      disabled={isDisabled}
      aria-busy={state === "Loading" ? true : undefined}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-space-0 rounded-radius-pill border-stroke-default border-border-strong bg-action-primary-background px-space-24 py-space-4 text-[length:var(--typography-body-sm-font-size)] font-bold leading-[var(--typography-body-sm-line-height)] tracking-body-sm text-action-primary-text whitespace-nowrap transition-colors outline-none select-none",
        "hover:bg-action-primary-background active:bg-action-primary-background",
        "focus-visible:border-stroke-emphasis focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-40",
        "data-[state=Disabled]:pointer-events-none data-[state=Disabled]:opacity-40",
        "data-[state=Focus]:border-stroke-emphasis",
        "data-[state=Loading]:cursor-wait",
        className,
      )}
      {...props}
    >
      {label}
    </button>
  )
}

export { Button }
