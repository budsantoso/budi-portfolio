"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MotionLink = motion.create(Link);

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section id="projects" className="border-t border-border/40">
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Technical case studies of real business problems and how they were solved."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <MotionLink
              key={project.slug}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-lg border border-border/60 bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <Badge variant="muted" className="shrink-0">{project.category}</Badge>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <Badge key={t} variant="tech">{t}</Badge>
                ))}
              </div>
            </MotionLink>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
