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
    role: "Senior Software / Full-Stack Developer",
    period: "March 2023 – Present",
    description:
      "Spearhead development and maintenance of high-impact Laravel applications, overseeing frontend and backend integration, database performance, and third-party integrations.",
    achievements: [
      "Spearhead the development and maintenance of high-impact Laravel applications, overseeing both frontend and backend integration",
      "Proactively identify and resolve critical production issues, ensuring seamless system stability",
      "Optimize data-heavy workflows using SQL Server and MySQL, significantly improving system performance",
      "Architect robust backend services for mobile applications and implement secure third-party integrations (e.g., Midtrans)",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "SQL Server",
      "MySQL",
      "JavaScript",
      "Midtrans",
      "REST API",
    ],
  },
  {
    company: "Bank Central Asia",
    role: "QA Tester / Software Engineer",
    period: "September 2022 – March 2023",
    description:
      "Conducted diagnostic verification and debugging for mission-critical financial transaction software across cross-functional engineering teams.",
    achievements: [
      "Conducted rigorous debugging and diagnostic verification for mission-critical financial transaction software",
      "Investigated complex edge cases, developing reliable reference solutions to ensure system integrity",
      "Collaborated across engineering teams to resolve bugs and optimize application performance",
    ],
    technologies: [
      "Financial Systems",
      "Diagnostic Testing",
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
