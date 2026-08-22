import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-12",
        {
          "text-center max-w-2xl mx-auto": align === "center",
          "text-left max-w-3xl": align === "left",
        },
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="mb-2 font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
