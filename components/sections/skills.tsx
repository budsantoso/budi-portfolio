"use client";

import { skills } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border/40">
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title="Technical skills"
          description="Technologies grouped by domain — no percentage bars, just the tools I use."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-lg border border-border/60 bg-card p-5 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-xs font-medium transition-colors hover:bg-muted cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
