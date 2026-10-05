"use client";

import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

const links = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
    icon: MessageCircle,
    external: true,
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
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

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
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg leading-relaxed">
            Open to remote backend engineering, data engineering, and fullstack opportunities worldwide.
          </p>

          {/* Direct contact info */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">
              {profile.email}
            </a>
            <span className="text-border">|</span>
            <a href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              {profile.phone}
            </a>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <link.icon className="size-4 text-muted-foreground" />
                {link.label}
                {link.external && <ArrowUpRight className="size-3 text-muted-foreground" />}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
