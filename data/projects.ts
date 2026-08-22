export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  featured: boolean;
  image?: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  features: string[];
  impact: string[];
  lessons: string[];
}

export const projects: Project[] = [
  {
    slug: "sfq-legacy-system-modernization",
    title: "SFQ-Legacy System Modernization",
    category: "Modernization / Data Processing",
    summary:
      "Orchestrated a massive technical transformation of a legacy data-processing engine, migrating from Laravel 7 / PHP 7 to Laravel 10 / PHP 8.1 and reducing processing times by 80%+.",
    technologies: ["Laravel 10", "PHP 8.1", "SQL Server", "MySQL"],
    featured: true,
    problem:
      "The legacy system suffered from prohibitive performance bottlenecks, with critical workflows taking over 5 minutes and reliance on tedious, multi-day manual processes.",
    solution:
      "Executed a full-stack migration from Laravel 7 / PHP 7 to Laravel 10 / PHP 8.1, refactoring the monolithic codebase into modern architectural patterns with optimized query structures.",
    architecture: [
      "Client UI for trigger and progress tracking",
      "Laravel 10 application layer with modernized service classes",
      "Refactored data-processing engine with batch processing",
      "Dual database integration with SQL Server and MySQL",
      "Automated pipeline eliminating multi-day manual steps",
    ],
    challenges: [
      "Migrating legacy Laravel 7 codebase across three major versions without downtime",
      "Resolving PHP 8.1 breaking changes and deprecations across massive business logic",
      "Refactoring deeply nested SQL queries into optimized set-based operations",
      "Ensuring zero data discrepancy between legacy and modernized data pipelines",
    ],
    features: [
      "Full-stack upgrade to Laravel 10 and PHP 8.1",
      "Automated end-to-end data processing pipeline",
      "Refactored data engine with 80%+ execution time reduction",
      "Optimized SQL Server & MySQL query execution",
      "Comprehensive data validation and error handling",
    ],
    impact: [
      "Achieved an 80%+ reduction in processing time (from 5+ minutes to under 1 minute)",
      "Achieved full automation of previously manual, error-prone workflows",
      "Significantly improved system stability and developer maintainability",
    ],
    lessons: [
      "Incremental refactoring with automated parity checks reduces migration risk",
      "PHP 8.1 type safety and performance features provide massive baseline wins",
      "Database query structure often outweighs application-level optimizations",
    ],
  },
  {
    slug: "rise-lppm",
    title: "RISE LPPM",
    category: "Research Platform / Web Application",
    summary:
      "Led end-to-end development of a high-availability platform designed to streamline administrative research processes and workflows.",
    technologies: ["Laravel", "MySQL", "JavaScript"],
    featured: true,
    problem:
      "Lack of a centralized, user-centric system to handle complex research requirement workflows, administrative submissions, and institutional reviews.",
    solution:
      "Built a bespoke, modular system from inception to delivery, ensuring seamless alignment between frontend interactivity and backend robustness.",
    architecture: [
      "Responsive web interface built with modern JavaScript",
      "Modular Laravel backend with dedicated domain services",
      "MySQL relational schema optimized for multi-stage approval workflows",
      "Document submission and review pipeline",
      "Role-based access control for researchers and administrators",
    ],
    challenges: [
      "Modeling non-linear academic review workflows with multiple stakeholder roles",
      "Ensuring high availability during submission deadline peaks",
      "Designing an intuitive submission UI for diverse non-technical users",
    ],
    features: [
      "Centralized research proposal submission and review workflow",
      "Multi-stage approval pipeline with automated status tracking",
      "Role-based permission hierarchy (researchers, reviewers, administrators)",
      "Interactive status dashboard and notifications",
      "Comprehensive reporting for research management",
    ],
    impact: [
      "Successfully deployed a production-ready system enhancing operational efficiency",
      "Streamlined institutional research submission processes",
      "Eliminated fragmented email-based tracking and manual spreadsheets",
    ],
    lessons: [
      "Clear domain modeling around approval workflows avoids edge-case bugs",
      "Close stakeholder feedback loops during development ensure high user adoption",
    ],
  },
  {
    slug: "join-payment-scholarship",
    title: "Join / Payment & Scholarship Portal",
    category: "Financial Services / Payment Integration",
    summary:
      "Developed a secure, scalable transaction and scholarship management portal handling high-velocity financial data with Midtrans payment gateway integration.",
    technologies: ["Laravel", "Midtrans API", "MySQL"],
    featured: true,
    problem:
      "Faced an exceptionally aggressive delivery deadline alongside evolving project requirements for a high-security financial transaction and scholarship portal.",
    solution:
      "Implemented a resilient architecture with seamless Midtrans payment gateway integration, utilizing agile development practices to adapt rapidly to changing business needs.",
    architecture: [
      "Web portal with secure client-side checkout flows",
      "Laravel backend handling financial state machines",
      "Midtrans Payment Gateway integration via REST APIs and Webhooks",
      "MySQL database with strict transaction isolation for financial ledgers",
      "Automated scholarship eligibility verification and allocation engine",
    ],
    challenges: [
      "Delivering feature-complete financial software under extremely tight deadlines",
      "Handling asynchronous payment notifications (webhooks) with idempotent processing",
      "Reconciling scholarship allocations against tuition balances accurately",
    ],
    features: [
      "Midtrans payment gateway integration with multiple payment channels",
      "Idempotent webhook handling for reliable transaction state updates",
      "Scholarship application, review, and fund allocation workflows",
      "Real-time financial status tracking and student receipt generation",
      "Administrative audit log and financial reconciliation reporting",
    ],
    impact: [
      "Delivered a reliable, feature-complete application under tight constraints",
      "Ensured secure financial processing and satisfied urgent business demands",
      "Reduced payment processing disputes through real-time webhook sync",
    ],
    lessons: [
      "Financial workflows demand strict idempotency and audit logs from day one",
      "Agile iterations with clear MVP boundaries are key to meeting tight deadlines",
    ],
  },
  {
    slug: "invoice-intelligence-platform",
    title: "Invoice Intelligence Platform",
    category: "AI / Business Automation",
    summary:
      "A Laravel-based invoice processing application that accepts scanned invoices, extracts information, compares products against a master product database, and automatically creates missing master products.",
    technologies: ["Laravel", "PHP", "SQL Server", "S3", "MinIO", "REST API"],
    featured: true,
    problem:
      "Manual invoice processing is slow, error-prone, and requires significant human effort to extract data, match products, and maintain a master product database.",
    solution:
      "Built an automated pipeline that scans invoices, extracts structured data (company details, invoice metadata, line items with quantities and pricing), normalizes product names, and matches them against a master product database — automatically creating new entries when no match is found.",
    architecture: [
      "Client uploads scanned invoice",
      "Laravel API receives and stores document in S3-compatible storage (MinIO)",
      "Extraction service processes invoice data",
      "Product matching service normalizes and searches master_product table",
      "Unmatched products are auto-created with company_id reference",
      "Results stored in database with full audit trail",
    ],
    challenges: [
      "Normalizing product names from varied invoice formats for reliable matching",
      "Designing a master_product schema that separates product identity from pricing",
      "Handling S3-compatible storage integration with MinIO for document persistence",
      "Building a robust pipeline that gracefully handles extraction failures",
    ],
    features: [
      "Invoice data extraction (company info, invoice metadata, line items)",
      "Automatic product name normalization and matching",
      "Master product auto-creation for unmatched items",
      "S3-compatible document storage via MinIO",
      "Company reference linking (company_id → master_company)",
    ],
    impact: [
      "Reduced manual data entry for invoice processing",
      "Maintained a growing, accurate master product database",
      "Enabled consistent product tracking across invoices",
    ],
    lessons: [
      "Product identity should be separated from pricing in master data design",
      "Normalization quality directly determines matching accuracy",
      "S3-compatible storage provides flexibility for future cloud migration",
    ],
  },
];
