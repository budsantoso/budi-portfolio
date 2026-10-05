import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export interface TerminalPanelProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  lines?: { text: string; type?: "command" | "success" | "info" | "muted" }[];
}

export function TerminalPanel({
  title = "terminal",
  lines = [
    { text: "php artisan optimize", type: "command" },
    { text: "Application optimized", type: "success" },
    { text: "Database connection healthy", type: "success" },
    { text: "Queue worker ready", type: "success" },
    { text: "API services operational", type: "success" },
  ],
  className,
  ...props
}: TerminalPanelProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border/80 bg-zinc-950 font-mono text-xs text-zinc-200 shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 rounded-full bg-red-500/80" />
          <div className="size-2.5 rounded-full bg-amber-500/80" />
          <div className="size-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] text-zinc-400 font-medium">{title}</span>
        <div className="w-9" />
      </div>
      <div className="p-4 sm:p-5 space-y-2 leading-relaxed">
        {lines.map((line, idx) => (
          <div key={idx} className="flex items-start gap-2">
            {line.type === "command" ? (
              <>
                <span className="text-zinc-500 select-none">$</span>
                <span className="text-zinc-100 font-medium">{line.text}</span>
              </>
            ) : line.type === "success" ? (
              <>
                <span className="text-emerald-400 select-none">
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-zinc-300">{line.text}</span>
              </>
            ) : line.type === "info" ? (
              <>
                <span className="text-sky-400 select-none">ℹ</span>
                <span className="text-zinc-300">{line.text}</span>
              </>
            ) : (
              <span className="text-zinc-500">{line.text}</span>
            )}
          </div>
        ))}
        {/* Typing cursor */}
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 select-none">$</span>
          <span className="inline-block w-2 h-4 bg-zinc-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
