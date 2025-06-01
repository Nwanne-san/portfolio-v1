import type React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "large" | "body" | "small" | "muted"
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const typographyVariants = {
  display: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight",
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  h2: "text-2xl md:text-3xl font-semibold tracking-tight",
  h3: "text-xl md:text-2xl font-semibold tracking-tight",
  h4: "text-lg md:text-xl font-semibold tracking-tight",
  large: "text-lg font-medium",
  body: "text-base",
  small: "text-sm",
  muted: "text-sm text-muted-foreground",
}

export function Typography({ children, variant = "body", className, as, ...props }: TypographyProps) {
  const Component = as || "p"

  return (
    <Component className={cn(typographyVariants[variant], className)} {...props}>
      {children}
    </Component>
  )
}
