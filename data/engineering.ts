export interface EngineeringHighlight {
  title: string;
  category: string;
  description: string;
  points: string[];
  technologies: string[];
}

export const engineeringHighlights: EngineeringHighlight[] = [
  {
    title: "Backend Architecture",
    category: "Architecture",
    description:
      "Designing structured, maintainable server-side applications with clean domain boundaries and scalable API interfaces.",
    points: [
      "Laravel service-oriented application organization",
      "Robust REST API design and contract management",
      "Asynchronous queue workers and job processing",
      "Maintainable application structure following SOLID principles",
    ],
    technologies: ["Laravel", "PHP", "REST API", "Queues"],
  },
  {
    title: "Database Engineering",
    category: "Data & Storage",
    description:
      "Structuring relational databases for high-concurrency workloads, complex reporting queries, and transactional integrity.",
    points: [
      "Microsoft SQL Server schema design and normalization",
      "Query optimization and strategic indexing",
      "Stored procedures and views for reporting workflows",
      "Data modeling for audit trails and master records",
    ],
    technologies: ["SQL Server", "MySQL", "Oracle", "Indexing"],
  },
  {
    title: "Integration Engineering",
    category: "Integrations",
    description:
      "Connecting disparate enterprise platforms, third-party payment gateways, and external APIs securely.",
    points: [
      "OAuth2 authentication implementation via Laravel Passport",
      "Payment gateway integration (Midtrans) with webhook lifecycle",
      "Webhook processing with idempotency and retry handling",
      "Third-party REST API consumption and sync workflows",
    ],
    technologies: ["OAuth2", "Passport", "Midtrans", "Webhooks"],
  },
  {
    title: "Legacy Modernization",
    category: "Modernization",
    description:
      "Incrementally upgrading mission-critical legacy applications to modern framework versions without business disruption.",
    points: [
      "Laravel version upgrades across major releases",
      "PHP runtime version upgrades and compatibility patching",
      "Codebase refactoring to modern design patterns",
      "Performance profiling and database bottleneck resolution",
    ],
    technologies: ["Laravel Upgrades", "PHP 8+", "Refactoring", "Profiling"],
  },
];
