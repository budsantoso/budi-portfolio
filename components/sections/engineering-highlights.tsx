"use client";

import { engineeringHighlights } from "@/data/engineering";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Server, Database, Plug, RefreshCw } from "lucide-react";

const icons = [Server, Database, Plug, RefreshCw];

export function EngineeringHighlights() {
  return (
    <Section id="engineering" className="border-t border-border/40">
      <Container>
        <SectionHeader
          eyebrow="Engineering"
          title="Technical depth"
          description="Core engineering competencies developed across real production systems."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {engineeringHighlights.map((h, i) => {
            const Icon = icons[i] ?? Server;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-lg border border-border/60 bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                    <Icon className="size-4 text-foreground" />
                  </div>
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
        </div>
      </Container>
    </Section>
  );
}
