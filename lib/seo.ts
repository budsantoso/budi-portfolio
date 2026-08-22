import { profile } from "@/data/profile";

export function getBaseUrl(): string {
  if (profile.siteUrl && !profile.siteUrl.includes("REPLACE_WITH_DOMAIN")) {
    return profile.siteUrl.startsWith("http")
      ? profile.siteUrl
      : `https://${profile.siteUrl}`;
  }
  return "https://budi-agung-santoso.vercel.app";
}

export function getPersonJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.headline,
    url: baseUrl,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: [
      profile.github.url,
      profile.linkedin,
    ].filter(Boolean),
    knowsAbout: [
      "Laravel",
      "PHP",
      "SQL Server",
      "MySQL",
      "RESTful APIs",
      "System Modernization",
      "Database Optimization",
      "Fullstack Development",
    ],
  };
}
