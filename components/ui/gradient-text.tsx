import { cn } from "@/lib/utils";
import { Typography } from "./typography";
import type React from "react";
import { JSX } from "react";

interface GradientTextProps {
  children: React.ReactNode;
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "large"
    | "body"
    | "small"
    | "muted";
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function GradientText({
  children,
  variant = "body",
  className,
  as,
  ...props
}: GradientTextProps) {
  return (
    <Typography
      variant={variant}
      as={as}
      className={cn(
        "animated-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </Typography>
  );
}
