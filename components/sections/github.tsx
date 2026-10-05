"use client";

import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function GithubSection() {
  return (
    <Section id="github" className="border-t border-border/40">
      <Container>
        <SectionHeader
          eyebrow="Open Source"
          title="GitHub"
          description="Public repositories and open source contributions."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="rounded-lg border border-border/60 bg-card p-6 sm:p-8"
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="flex size-10 items-center justify-center rounded-full bg-muted"
              >
                <GitHubIcon className="size-5 text-foreground" />
              </motion.div>
              <div>
                <p className="font-mono text-sm font-semibold">
                  @{profile.github.username}
                </p>
                <p className="text-xs text-muted-foreground">
                  Backend, Data & Integration Repositories
                </p>
              </div>
            </div>

            <motion.a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Explore on GitHub
              <ExternalLink className="size-3.5" />
            </motion.a>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 grid gap-3 sm:grid-cols-3 pt-6 border-t border-border/40"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="rounded-md border border-border/40 bg-muted/20 p-3.5 transition-shadow hover:shadow-sm"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Primary Focus</p>
              <p className="mt-1 text-sm font-medium text-foreground">Python, FastAPI & Laravel</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="rounded-md border border-border/40 bg-muted/20 p-3.5 transition-shadow hover:shadow-sm"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Core Stacks</p>
              <p className="mt-1 text-sm font-medium text-foreground">PHP 8, Python, SQL, Docker</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="rounded-md border border-border/40 bg-muted/20 p-3.5 transition-shadow hover:shadow-sm"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Ecosystem</p>
              <p className="mt-1 text-sm font-medium text-foreground">APIs, ETL, Webhooks & Data</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
