"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/#" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Engineering", href: "/#engineering" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-heading text-sm font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1 text-sm font-medium transition-colors hover:bg-muted sm:inline-flex"
          >
            <FileText className="size-3.5" />
            Resume
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/40 bg-background transition-all md:hidden",
          mobileOpen ? "max-h-80" : "max-h-0 border-t-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <FileText className="size-3.5" />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
