import type React from "react"
import NextLink from "next/link"
import { cn } from "@/lib/utils"

interface LinkProps {
  children: React.ReactNode
  href: string
  className?: string
  target?: string
  rel?: string
}

export function Link({ children, href, className, ...props }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cn("text-foreground hover:text-primary transition-colors duration-200", className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}
