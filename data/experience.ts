export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "NTT Ltd.",
    role: "Senior Backend Engineer & Data Specialist",
    period: "March 2023 – Present",
    description:
      "Architect and optimize databases handling millions of records across academic and financial platforms. Build fault-tolerant ETL processes, secure high-throughput APIs, and implement background workers that process massive datasets efficiently.",
    achievements: [
      "Architect and optimize databases handling millions of records across academic and financial platforms",
      "Build fault-tolerant ETL/ELT pipelines and automated data synchronization workflows",
      "Implement background workers and asynchronous task queues for massive dataset processing",
      "Design and secure high-throughput RESTful APIs for internal and third-party integrations",
      "Integrate payment gateways (Midtrans, Xendit, DOKU) with webhook lifecycle management",
      "Proactively identify and resolve critical production issues, ensuring seamless system stability",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PHP",
      "Laravel",
      "SQL Server",
      "MySQL",
      "Oracle",
      "REST API",
      "Midtrans",
      "Xendit",
      "DOKU",
      "Docker",
      "Linux",
    ],
  },
  {
    company: "Bank Central Asia (BCA)",
    role: "QA Tester / Software Engineer",
    period: "September 2022 – March 2023",
    description:
      "Ensured zero-defect deployments for mission-critical ATM software through rigorous testing, diagnostic verification, and log analysis across cross-functional engineering teams.",
    achievements: [
      "Ensured zero-defect deployments for mission-critical ATM software through rigorous testing",
      "Conducted diagnostic verification and debugging for complex financial transaction systems",
      "Investigated complex edge cases, developing reliable reference solutions to ensure system integrity",
      "Collaborated across engineering teams to resolve bugs and optimize application performance",
    ],
    technologies: [
      "Financial Systems",
      "Diagnostic Testing",
      "Log Analysis",
      "Edge-case Investigation",
      "Quality Assurance",
    ],
  },
  {
    company: "PT. Wells Management Smart",
    role: "Backend Programmer",
    period: "March 2022 – September 2022",
    description:
      "Designed and implemented core backend architecture and high-efficiency RESTful APIs for a high-concurrency on-demand transportation platform.",
    achievements: [
      "Designed and implemented the core backend architecture for a high-concurrency on-demand transportation platform",
      "Engineered and optimized RESTful API endpoints for maximum efficiency",
      "Enhanced system responsiveness through advanced database query optimization and efficient data structure design",
    ],
    technologies: [
      "Backend Architecture",
      "RESTful API",
      "Database Optimization",
      "High Concurrency",
    ],
  },
  {
    company: "PT. Wellwin Nusantara",
    role: "Web Programmer",
    period: "December 2019 – January 2022",
    description:
      "Managed end-to-end development and deployment of enterprise-grade web applications and led legacy codebase refactoring.",
    achievements: [
      "Managed the end-to-end development and deployment of enterprise-grade web applications",
      "Led the refactoring of legacy codebases into modern, scalable architectures, drastically improving system maintainability and reliability",
    ],
    technologies: [
      "Web Applications",
      "Legacy Refactoring",
      "PHP",
      "MySQL",
      "Enterprise Systems",
    ],
  },
];
