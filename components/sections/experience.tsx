"use client";

import { experiences } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border/40">
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="Professional background"
          description="A timeline of roles building business applications, backend systems, and data-driven solutions."
        />

        <div className="relative space-y-10 pl-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border sm:pl-8 before:sm:left-[9px]">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-6 top-1.5 flex size-4 items-center justify-center rounded-full border border-border bg-background sm:-left-8 sm:size-5">
                <Briefcase className="size-2.5 text-muted-foreground sm:size-3" />
              </div>

              <div className="rounded-lg border border-border/60 bg-card p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold sm:text-lg">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} &middot; {exp.period}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 block size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <Badge key={t} variant="tech">{t}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
