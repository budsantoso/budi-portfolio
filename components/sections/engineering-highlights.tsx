"use client";

import { engineeringHighlights } from "@/data/engineering";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Server, Database, Plug, RefreshCw } from "lucide-react";

const icons = [Server, Database, Plug, RefreshCw];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function EngineeringHighlights() {
  return (
    <Section id="engineering" className="border-t border-border/40">
      <Container>
        <SectionHeader
          eyebrow="Engineering"
          title="Technical depth"
          description="Core engineering competencies developed across real production systems."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {engineeringHighlights.map((h, i) => {
            const Icon = icons[i] ?? Server;
            return (
              <motion.div
                key={h.title}
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="rounded-lg border border-border/60 bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="flex size-9 items-center justify-center rounded-md bg-muted"
                  >
                    <Icon className="size-4 text-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="text-base font-semibold">{h.title}</h3>
                    <p className="text-xs text-muted-foreground">{h.category}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {h.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {h.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 block size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {h.technologies.map((t) => (
                    <Badge key={t} variant="tech">{t}</Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
