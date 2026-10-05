"use client";

import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { Code, Database, Globe, Terminal, GraduationCap, Award } from "lucide-react";

const highlights = [
  { icon: Terminal, label: "Backend-first" },
  { icon: Database, label: "Data Engineering" },
  { icon: Globe, label: "API & Integrations" },
  { icon: Code, label: `${profile.experience} experience` },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

            {/* Education & Awards */}
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-2.5 text-sm">
                <GraduationCap className="size-4 text-muted-foreground" />
                <span>
                  <span className="font-medium text-foreground">{profile.education.degree}</span>
                  <span className="text-muted-foreground"> — {profile.education.school} · GPA {profile.education.gpa}</span>
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-2.5 text-sm">
                <Award className="size-4 text-amber-500" />
                <span className="text-muted-foreground">{profile.award}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-3 lg:grid-cols-1"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-card px-4 py-3 cursor-default"
              >
                <h.icon className="size-4 text-muted-foreground shrink-0" />
                <span className="text-sm font-medium">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
