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
      "Designing structured, maintainable server-side applications with clean domain boundaries and scalable API interfaces using Python and PHP.",
    points: [
      "Python (FastAPI) and Laravel service-oriented application organization",
      "Robust REST API design and contract management",
      "Asynchronous queue workers and background job processing",
      "Maintainable application structure following SOLID principles",
    ],
    technologies: ["Python", "FastAPI", "Laravel", "PHP", "REST API", "Queues"],
  },
  {
    title: "Database Engineering",
    category: "Data & Storage",
    description:
      "Structuring relational databases for high-concurrency workloads, complex reporting queries, and transactional integrity across millions of records.",
    points: [
      "Schema design and normalization for SQL Server, MySQL, and Oracle",
      "Query optimization, strategic indexing, and table partitioning",
      "ETL/ELT pipeline development for data synchronization",
      "Data modeling for audit trails and master records",
    ],
    technologies: ["SQL Server", "MySQL", "Oracle", "ETL", "Indexing", "Partitioning"],
  },
  {
    title: "Integration Engineering",
    category: "Integrations",
    description:
      "Connecting disparate enterprise platforms, third-party payment gateways, and external APIs securely with idempotent webhook processing.",
    points: [
      "Payment gateway integration (Midtrans, Xendit, DOKU) with webhook lifecycle",
      "OAuth2 authentication implementation via Laravel Passport",
      "Webhook processing with idempotency and retry handling",
      "Third-party REST API consumption and sync workflows",
    ],
    technologies: ["Midtrans", "Xendit", "DOKU", "OAuth2", "Passport", "Webhooks"],
  },
  {
    title: "Infrastructure & DevOps",
    category: "Infrastructure",
    description:
      "Deploying and managing containerized applications, Linux servers, and CI/CD pipelines for reliable, automated deployments.",
    points: [
      "Linux server administration and environment configuration",
      "Docker containerization for consistent deployment environments",
      "CI/CD pipeline setup for automated testing and deployment",
      "Asynchronous task queues for background processing at scale",
    ],
    technologies: ["Linux", "Docker", "CI/CD", "Async Queues", "Background Workers"],
  },
];
