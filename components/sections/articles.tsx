"use client";

import { articles } from "@/data/articles";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, BookOpen } from "lucide-react";

export function Articles() {
  return (
    <Section id="articles" className="bg-muted/30">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <BookOpen className="size-5 text-primary" />
            </div>
            <Badge variant="secondary" className="text-xs">
              Technical Writing
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Articles & Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Deep dives into backend architecture, data engineering patterns, and payment system design — 
            written from production experience.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Featured Badge */}
              {article.featured && (
                <Badge
                  variant="default"
                  className="absolute -top-2 -right-2 text-[10px] bg-primary text-primary-foreground"
                >
                  Featured
                </Badge>
              )}

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3" />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-snug mb-3 group-hover:text-primary transition-colors">
                <span className="absolute inset-0" aria-hidden="true" />
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {article.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read Link */}
              <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read article
                <ArrowUpRight className="size-3.5" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground">
            More articles coming soon on{" "}
            <span className="text-foreground font-medium">Medium</span> and{" "}
            <span className="text-foreground font-medium">Dev.to</span>
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
