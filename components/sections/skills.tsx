"use client";

import { skills } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border/40">
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title="Technical skills"
          description="Technologies grouped by domain — no percentage bars, just the tools I use."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-lg border border-border/60 bg-card p-5"
            >
              <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
