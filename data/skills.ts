export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "PHP", "Laravel", "JavaScript", "TypeScript"],
  },
  {
    category: "Database & Data",
    skills: ["MySQL", "SQL Server", "Oracle", "Query Tuning", "Indexing", "Partitioning", "ETL/ELT"],
  },
  {
    category: "APIs & Integration",
    skills: ["REST API", "OAuth2", "Laravel Passport", "Midtrans", "Xendit", "DOKU", "Webhook"],
  },
  {
    category: "Infrastructure",
    skills: ["Linux", "Docker", "CI/CD", "Async Queues", "Background Workers"],
  },
  {
    category: "Storage",
    skills: ["S3-compatible", "MinIO"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Composer", "npm", "Vite"],
  },
];
