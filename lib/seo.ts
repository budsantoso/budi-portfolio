import { profile } from "@/data/profile";

export function getBaseUrl(): string {
  const url = profile.siteUrl;
  if (url && url.startsWith("http")) {
    return url;
  }
  return "https://budi-portfolio-mocha.vercel.app";
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
    email: profile.email,
    telephone: profile.phone,
    image: `${baseUrl}/images/profile.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indonesia",
      addressCountry: "ID",
    },
    sameAs: [
      profile.github.url,
      profile.linkedin,
    ].filter(Boolean),
    knowsAbout: [
      "Python",
      "FastAPI",
      "PHP",
      "Laravel",
      "SQL Server",
      "MySQL",
      "Oracle",
      "ETL/ELT",
      "RESTful APIs",
      "Database Optimization",
      "Payment Gateway Integration",
      "Docker",
      "Linux",
      "Backend Architecture",
      "Data Engineering",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: profile.education.school,
      url: "https://www.unand.ac.id",
    },
    award: profile.award,
    worksFor: {
      "@type": "Organization",
      name: "NTT Ltd.",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Backend Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Indonesia",
      },
      skills: [
        "Python",
        "FastAPI",
        "PHP",
        "Laravel",
        "SQL",
        "Database Engineering",
        "ETL Pipelines",
        "REST API Design",
      ],
    },
    potentialAction: {
      "@type": "ContactAction",
      target: [
        `mailto:${profile.email}`,
        `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
      ],
      name: "Contact Budi Agung Santoso",
    },
  };
}

export function getWebSiteJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} — Portfolio`,
    url: baseUrl,
    description: profile.headline,
    author: {
      "@type": "Person",
      name: profile.name,
      url: baseUrl,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/projects?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getProfessionalServiceJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    url: baseUrl,
    provider: {
      "@type": "Person",
      name: profile.name,
      url: baseUrl,
      image: `${baseUrl}/images/profile.jpg`,
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    serviceType: [
      "Backend Engineering",
      "Data Engineering",
      "API Development",
      "Database Optimization",
      "System Integration",
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Remote Consulting",
      serviceUrl: baseUrl,
      serviceSmsNumber: profile.phone,
      serviceEmail: profile.email,
    },
  };
}
