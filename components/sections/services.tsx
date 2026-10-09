"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Backend & API Development",
    description: "Scalable APIs, microservices, and system integrations. Python (FastAPI), PHP (Laravel), Node.js, PostgreSQL, Redis.",
    icon: "Server",
  },
  {
    title: "Data Engineering & ETL",
    description: "Data pipelines, warehouse modeling, and analytics infrastructure. Airflow, dbt, Spark, BigQuery, custom orchestration.",
    icon: "Database",
  },
  {
    title: "Payment & Fintech Integration",
    description: "Payment gateway integration, reconciliation engines, and transaction processing. Midtrans, Xendit, DOKU, ISO 8583.",
    icon: "CreditCard",
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description: "Container orchestration, CI/CD, and cloud-native deployments. Docker, Kubernetes, AWS/GCP, Terraform, GitHub Actions.",
    icon: "Cloud",
  },
];

const Icons: Record<string, React.ReactNode> = {
  Server: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Database: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  CreditCard: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  Cloud: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
};

export function Services() {
  return (
    <section
      id="services"
      className="w-full py-20 lg:py-32 bg-muted/30"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="services-heading"
            className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Four focus areas. Deep expertise in each. No surface-level familiarity.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl border border-border p-6 transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {Icons[service.icon]}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}