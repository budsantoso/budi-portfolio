export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["PHP", "Laravel", "Python"],
  },
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap", "jQuery"],
  },
  {
    category: "Database",
    skills: ["SQL Server", "MySQL", "Oracle"],
  },
  {
    category: "Integration",
    skills: ["REST API", "OAuth2", "Laravel Passport", "Midtrans", "Webhook"],
  },
  {
    category: "Storage",
    skills: ["S3-compatible storage", "MinIO"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Composer", "npm", "Vite"],
  },
];
