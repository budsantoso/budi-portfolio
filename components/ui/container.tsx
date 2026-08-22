import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg" | "full";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          {
            "max-w-4xl": size === "sm",
            "max-w-6xl": size === "default",
            "max-w-7xl": size === "lg",
            "max-w-full": size === "full",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
