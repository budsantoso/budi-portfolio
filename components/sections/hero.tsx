"use client";

import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { TerminalPanel } from "@/components/ui/terminal-panel";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <Container>
      <div className="flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="success" className="mb-6">
              <span className="mr-1.5 inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {profile.status}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl">
              {profile.role}
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              {profile.headline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
              >
                View My Work
                <ArrowDown className="size-3.5" />
              </a>
              <a
                href={profile.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <TerminalPanel />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
