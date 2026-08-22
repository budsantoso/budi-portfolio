import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "default" | "sm" | "lg" | "none";
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "default", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          {
            "py-16 sm:py-24": spacing === "default",
            "py-10 sm:py-16": spacing === "sm",
            "py-20 sm:py-32": spacing === "lg",
            "py-0": spacing === "none",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";
