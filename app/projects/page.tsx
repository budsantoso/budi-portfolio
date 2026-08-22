import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Detailed technical case studies of business applications, legacy modernizations, payment systems, and backend architectures.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Technical Case Studies",
    description: "Detailed technical case studies of business applications, legacy modernizations, payment systems, and backend architectures.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back to Home
          </Link>
        </div>

        <SectionHeader
          eyebrow="Portfolio"
          title="All Projects & Case Studies"
          description="In-depth technical breakdowns of production systems, architecture decisions, database optimizations, and business solutions."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-lg border border-border/60 bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <Badge variant="muted">{project.category}</Badge>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h2>

              <p className="mt-2.5 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
