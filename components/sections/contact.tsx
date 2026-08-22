"use client";

import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

const links = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    href: profile.github.url,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border/40">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Contact
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg leading-relaxed">
            Open to senior fullstack opportunities, consulting, and interesting technical challenges.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <link.icon className="size-4 text-muted-foreground" />
                {link.label}
                {link.external && <ArrowUpRight className="size-3 text-muted-foreground" />}
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
