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
  {
    slug: "microservices-api-gateway",
    title: "Microservices API Gateway",
    category: "Backend Architecture / API Gateway",
    summary:
      "Designed and implemented a high-performance API gateway using FastAPI that routes requests to multiple microservices, handles authentication, rate limiting, and load balancing across distributed backend services.",
    technologies: ["FastAPI", "Python", "Redis", "Nginx", "Docker", "JWT"],
    featured: true,
    problem:
      "Monolithic API was becoming a bottleneck with growing service complexity. Different teams needed independent deployment cycles, but clients required a unified entry point with consistent authentication and rate limiting.",
    solution:
      "Built a FastAPI-based API gateway that acts as a reverse proxy, routing requests to appropriate microservices while centralizing cross-cutting concerns like auth, rate limiting, caching, and request/response transformation.",
    architecture: [
      "FastAPI gateway layer handling request routing and validation",
      "Redis-backed rate limiter with sliding window algorithm",
      "JWT authentication middleware with token refresh logic",
      "Nginx reverse proxy for SSL termination and static file serving",
      "Docker Compose orchestration for local development parity",
      "Service discovery pattern for dynamic microservice registration",
    ],
    challenges: [
      "Implementing consistent error handling across heterogeneous microservices",
      "Designing a rate limiting strategy that prevents abuse without blocking legitimate traffic",
      "Handling distributed tracing across service boundaries",
      "Managing JWT token refresh without disrupting active user sessions",
    ],
    features: [
      "Dynamic request routing to 5+ microservices based on path patterns",
      "Redis-based rate limiting (100 req/min per API key)",
      "JWT authentication with automatic token refresh",
      "Request/response logging with correlation IDs",
      "Health check aggregation across all downstream services",
      "OpenAPI documentation auto-generated from service schemas",
    ],
    impact: [
      "Reduced API response latency by 40% through intelligent caching",
      "Enabled independent deployment cycles for 3 backend teams",
      "Prevented DDoS incidents through rate limiting and request validation",
      "Unified authentication reduced token management complexity by 60%",
    ],
    lessons: [
      "API gateways should be stateless; all session data belongs in Redis or client tokens",
      "Circuit breaker patterns are essential for graceful degradation",
      "Correlation IDs make distributed debugging significantly easier",
    ],
  },
  {
    slug: "payment-reconciliation-system",
    title: "Payment Reconciliation System",
    category: "Financial Systems / Data Integrity",
    summary:
      "Built an automated payment reconciliation engine that matches transactions across multiple payment gateways (Midtrans, Xendit, DOKU) against internal financial records, flagging discrepancies and generating audit reports.",
    technologies: ["Laravel", "Python", "MySQL", "Redis", "Midtrans", "Xendit", "DOKU"],
    featured: true,
    problem:
      "Manual reconciliation of payment data across multiple gateways was consuming 20+ hours weekly, with frequent human errors causing financial discrepancies that took days to identify and resolve.",
    solution:
      "Developed a hybrid Laravel/Python reconciliation engine that fetches settlement files from all payment providers, normalizes data formats, matches against internal transaction records, and automatically flags mismatches for review.",
    architecture: [
      "Laravel scheduler triggering daily reconciliation jobs",
      "Python ETL scripts fetching and normalizing gateway settlement files",
      "MySQL staging tables for raw data before matching",
      "Redis queue for async processing of large settlement batches",
      "Rule engine for configurable matching criteria (amount, date, reference)",
      "Automated email alerts for unmatched transactions exceeding thresholds",
    ],
    challenges: [
      "Each payment gateway uses different file formats and settlement cycles",
      "Handling timezone differences across international payment processors",
      "Reconciling partial refunds and chargebacks against original transactions",
      "Ensuring idempotency when re-processing failed reconciliation batches",
    ],
    features: [
      "Automated daily reconciliation across Midtrans, Xendit, and DOKU",
      "Fuzzy matching algorithm for transactions with slight reference variations",
      "Discrepancy dashboard with drill-down to individual transactions",
      "Exportable audit reports for accounting compliance",
      "Configurable tolerance rules for amount mismatches (e.g., ±1%)",
      "Automatic retry with exponential backoff for failed gateway API calls",
    ],
    impact: [
      "Reduced reconciliation time from 20+ hours to under 30 minutes daily",
      "Eliminated 95% of manual data entry errors through automation",
      "Identified Rp 50M+ in unreconciled transactions within first month",
      "Accounting team confidence improved through audit trail transparency",
    ],
    lessons: [
      "Financial reconciliation demands immutable audit logs at every step",
      "Fuzzy matching is essential when dealing with human-entered reference numbers",
      "Idempotent job design prevents double-counting during retries",
    ],
  },
  {
    slug: "multi-tenant-saas-backend",
    title: "Multi-tenant SaaS Backend",
    category: "SaaS Architecture / Backend Systems",
    summary:
      "Architected a scalable multi-tenant SaaS backend using Laravel with PostgreSQL, implementing tenant isolation, role-based access control, and subscription billing for a B2B platform serving 50+ organizations.",
    technologies: ["Laravel", "PostgreSQL", "Redis", "Docker", "Stripe", "AWS S3"],
    featured: true,
    problem:
      "Startup needed to launch a B2B SaaS platform serving multiple organizations with strict data isolation requirements, but lacked infrastructure for tenant separation, subscription management, and scalable file storage.",
    solution:
      "Designed a multi-tenant architecture using PostgreSQL schema-per-tenant pattern with Laravel, integrated Stripe for subscription billing, and implemented comprehensive RBAC with resource-level permissions.",
    architecture: [
      "Laravel middleware for tenant identification via subdomain",
      "PostgreSQL schema-per-tenant with shared users table",
      "Redis caching layer per tenant with prefixed keys",
      "Stripe Billing integration for subscription management",
      "AWS S3 with tenant-prefixed object paths for file isolation",
      "Docker multi-stage builds for production deployment",
    ],
    challenges: [
      "Ensuring zero cross-tenant data leakage through query scoping",
      "Migrating existing single-tenant data to schema-per-tenant model",
      "Handling subscription downgrades with data retention policies",
      "Optimizing PostgreSQL performance with 50+ active schemas",
    ],
    features: [
      "Automatic tenant provisioning with isolated database schema",
      "Role-based access control with 12 permission levels",
      "Stripe subscription management with trial periods and proration",
      "Tenant-specific file storage with S3 prefix isolation",
      "Usage analytics dashboard per tenant",
      "Automated database backup per tenant schema",
    ],
    impact: [
      "Onboarded 50+ organizations within 6 months of launch",
      "Achieved 99.9% uptime with zero cross-tenant data incidents",
      "Reduced infrastructure cost by 40% vs separate instance-per-tenant approach",
      "Subscription revenue grew 300% through automated billing workflows",
    ],
    lessons: [
      "Schema-per-tenant strikes the best balance of isolation and cost for <1000 tenants",
      "Query scoping must be enforced at framework level, not relying on developer discipline",
      "Subscription state machines are surprisingly complex — model them explicitly",
    ],
  },
];
