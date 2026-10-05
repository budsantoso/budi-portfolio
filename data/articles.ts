export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url?: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "scaling-etl-5-minutes-to-30-seconds",
    title: "Scaling ETL: From 5 Minutes to 30 Seconds",
    excerpt:
      "How I reduced a legacy data processing pipeline from 5+ minutes to under 30 seconds by refactoring SQL queries, implementing batch processing, and leveraging database indexing strategies.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["ETL", "SQL Optimization", "Laravel", "Performance"],
    featured: true,
  },
  {
    slug: "idempotent-payment-webhooks",
    title: "Handling Idempotent Payment Webhooks",
    excerpt:
      "A deep dive into building reliable payment webhook handlers that prevent double-processing, handle race conditions, and ensure financial data integrity across multiple gateway providers.",
    date: "2024-02-20",
    readTime: "10 min read",
    tags: ["Payments", "Webhooks", "Idempotency", "DOKU", "Midtrans"],
    featured: true,
  },
  {
    slug: "multi-tenant-database-design",
    title: "Multi-Tenant Database Design: Schema-per-Tenant vs Row-Level Security",
    excerpt:
      "Comparing architecture patterns for SaaS multi-tenancy. Why I chose schema-per-tenant for a B2B platform serving 50+ organizations, and the trade-offs involved.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Database Design", "PostgreSQL", "SaaS", "Laravel"],
    featured: true,
  },
  {
    slug: "fastapi-middleware-patterns",
    title: "FastAPI Middleware Patterns for Production APIs",
    excerpt:
      "Essential middleware patterns I use in production FastAPI applications: request logging, rate limiting, authentication, error handling, and response transformation.",
    date: "2023-12-05",
    readTime: "7 min read",
    tags: ["FastAPI", "Python", "Middleware", "API Design"],
  },
  {
    slug: "docker-multi-stage-builds",
    title: "Optimizing Docker Builds for PHP & Python Applications",
    excerpt:
      "How multi-stage Docker builds reduced our production image sizes by 60% and improved CI/CD pipeline speeds for both Laravel and FastAPI services.",
    date: "2023-11-18",
    readTime: "6 min read",
    tags: ["Docker", "DevOps", "CI/CD", "Laravel", "FastAPI"],
  },
  {
    slug: "payment-reconciliation-automation",
    title: "Automating Payment Reconciliation Across Multiple Gateways",
    excerpt:
      "Building a hybrid Laravel/Python reconciliation engine that processes settlement files from Midtrans, Xendit, and DOKU — reducing manual work from 20+ hours to 30 minutes daily.",
    date: "2023-10-22",
    readTime: "9 min read",
    tags: ["Payments", "ETL", "Laravel", "Python", "Automation"],
  },
];

export const featuredArticles = articles.filter((a) => a.featured);
