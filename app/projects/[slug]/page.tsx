import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="py-12 sm:py-16">
      <Container size="default">
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back to Projects
          </Link>
        </div>

        {/* 1-4. Header: Title, Category, Summary, Tech Tags */}
        <header className="border-b border-border/40 pb-10">
          <Badge variant="muted" className="mb-4">
            {project.category}
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
        </header>

        {/* Optional Project Image */}
        {project.image && (
          <div className="my-10 overflow-hidden rounded-xl border border-border bg-card">
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Main Case Study Content */}
        <div className="mt-12 space-y-16">
          {/* 5-6. Problem & Solution Grid */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-rose-500 dark:text-rose-400">
                <AlertTriangle className="size-5" />
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  The Problem
                </h2>
              </div>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-5" />
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  The Solution
                </h2>
              </div>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          {/* 7. Architecture Pipeline */}
          {project.architecture.length > 0 && (
            <section>
              <div className="mb-6 flex items-center gap-2">
                <Layers className="size-5 text-muted-foreground" />
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                  System Architecture & Data Flow
                </h2>
              </div>

              <div className="rounded-lg border border-border/80 bg-zinc-950 p-6 font-mono text-xs sm:p-8 text-zinc-300 shadow-sm">
                <div className="mb-4 text-[11px] uppercase tracking-wider text-zinc-500">
                  Execution Pipeline
                </div>
                <div className="space-y-3">
                  {project.architecture.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded bg-zinc-800 text-[11px] font-semibold text-zinc-400">
                        {idx + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-zinc-200">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 8. Engineering Challenges */}
          {project.challenges.length > 0 && (
            <section>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Engineering Challenges
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Technical hurdles encountered and resolved during implementation.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-border/60 bg-card p-5"
                  >
                    <span className="mt-0.5 block size-1.5 shrink-0 rounded-full bg-amber-500" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 9. Key Features */}
          {project.features.length > 0 && (
            <section>
              <div className="mb-6 flex items-center gap-2">
                <Sparkles className="size-5 text-muted-foreground" />
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                  Key Capabilities
                </h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-border/60 bg-card p-4"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 10. Impact / Outcome */}
          {project.impact.length > 0 && (
            <section className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-6 sm:p-8">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl text-emerald-700 dark:text-emerald-400">
                Measurable Impact & Business Outcomes
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.impact.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-foreground sm:text-base leading-relaxed"
                  >
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 11. Lessons Learned */}
          {project.lessons.length > 0 && (
            <section className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sky-500">
                <Lightbulb className="size-5" />
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl text-foreground">
                  Engineering Insights & Lessons
                </h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {project.lessons.map((lesson, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-1.5 block size-1 shrink-0 rounded-full bg-sky-500" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 12. Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="border-t border-border/40 pt-12">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Related Case Studies
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/projects/${rel.slug}`}
                    className="group rounded-lg border border-border/60 bg-card p-5 transition-all hover:border-foreground/20"
                  >
                    <Badge variant="muted">{rel.category}</Badge>
                    <h3 className="mt-3 text-base font-semibold tracking-tight group-hover:text-foreground flex items-center justify-between">
                      {rel.title}
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                      {rel.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* 13. Back to Top / Projects CTA */}
          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All Projects
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Discuss a similar project
              <ArrowRight className="size-4" />
            </Link>
          </footer>
        </div>
      </Container>
    </article>
  );
}
