"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Skills", href: "#skills" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const id = item.href.replace("#", "");
        const el = id ? document.getElementById(id) : document.body;
        if (!el) return { href: item.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href: item.href, top: rect.top };
      });

      const current = sections.reduce((closest, section) => {
        if (section.top <= 100 && section.top > closest.top) {
          return section;
        }
        return closest;
      }, { href: "#", top: -Infinity });

      setActiveSection(current.href);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = 56;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-heading text-sm font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 text-sm transition-colors",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </a>
              </li>
            );
          })}
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
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "text-foreground font-medium bg-muted"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
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
