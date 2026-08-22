"use client";

import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { Code, Database, Globe, Terminal } from "lucide-react";

const highlights = [
  { icon: Terminal, label: "Backend-first" },
  { icon: Database, label: "Database engineering" },
  { icon: Globe, label: "API & integrations" },
  { icon: Code, label: `${profile.experience} experience` },
];

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader eyebrow="About" title="Who I am" />

        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 lg:grid-cols-1"
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-card px-4 py-3"
              >
                <h.icon className="size-4 text-muted-foreground shrink-0" />
                <span className="text-sm font-medium">{h.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
