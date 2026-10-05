"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {featured.map((project, i) => (
            <MotionLink
              key={project.slug}
              href={`/projects/${project.slug}`}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col rounded-lg border border-border/60 bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowUpRight className="size-3.5" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
