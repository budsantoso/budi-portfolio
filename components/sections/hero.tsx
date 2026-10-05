"use client";

import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/profile.jpg"
          alt=""
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        {/* Multi-layer overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge
              variant="success"
              className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium backdrop-blur-sm bg-emerald-500/10 border-emerald-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {profile.status}
            </Badge>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground"
          >
            {profile.role}
          </motion.p>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {profile.headline}
          </motion.p>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="size-3.5" />
              {profile.email}
            </a>
            <a
              href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone className="size-3.5" />
              {profile.phone}
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-4"
          >
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              View My Work
              <ArrowDown className="size-3.5" />
            </a>
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border/60 bg-background/50 backdrop-blur-sm px-5 text-sm font-medium text-foreground transition-all hover:bg-background/80 hover:scale-105 active:scale-95"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border/60 bg-background/50 backdrop-blur-sm px-5 text-sm font-medium text-foreground transition-all hover:bg-background/80 hover:scale-105 active:scale-95"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-6"
          >
            {["Python", "FastAPI", "PHP", "Laravel", "SQL", "Docker"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                className="inline-flex items-center rounded-full border border-border/40 bg-background/40 backdrop-blur-sm px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="size-4" />
        </motion.a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2] pointer-events-none" />
    </section>
  );
}
