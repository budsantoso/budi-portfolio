import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/data/profile";
import { getBaseUrl, getPersonJsonLd, getWebSiteJsonLd, getProfessionalServiceJsonLd } from "@/lib/seo";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = getBaseUrl();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.role} with 5+ years experience in Python (FastAPI), PHP (Laravel), SQL Server, MySQL, Oracle. Expert in ETL pipelines, REST APIs, payment gateways (Midtrans, Xendit, DOKU), Docker, and Linux. Remote-ready backend engineer based in Indonesia.`,
  authors: [{ name: profile.name, url: baseUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    "Budi Agung Santoso",
    "Budi Agung Santoso Backend",
    "Budi Agung Santoso Developer",
    "Budi Agung Santoso Engineer",
    "Budi Agung Santoso Portfolio",
    "Budi Agung Santoso FastAPI",
    "Budi Agung Santoso Laravel",
    "Budi Agung Santoso Indonesia",
    "Budi Agung Santoso Remote",
    "Senior Backend Engineer",
    "Data Specialist",
    "Python Developer",
    "FastAPI Developer",
    "PHP Developer",
    "Laravel Developer",
    "SQL Server",
    "MySQL",
    "Oracle",
    "ETL Pipeline",
    "ELT Pipeline",
    "Data Engineering",
    "REST API",
    "Payment Gateway",
    "Midtrans",
    "Xendit",
    "DOKU",
    "Docker",
    "Linux",
    "Remote Developer",
    "Remote Backend Engineer",
    "Indonesia Developer",
    "Fullstack Developer",
    "Database Optimization",
    "Webhook Integration",
    "CI/CD",
    "Backend Architecture",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description: `${profile.role} with 5+ years experience in Python (FastAPI), PHP (Laravel), SQL Server, MySQL, Oracle. Expert in ETL pipelines, REST APIs, payment gateways, Docker, and Linux. Remote-ready.`,
    images: [
      {
        url: `${baseUrl}/images/profile.jpg`,
        width: 400,
        height: 400,
        alt: `${profile.name} — ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: `${profile.role} with 5+ years experience in Python (FastAPI), PHP (Laravel), SQL Server, MySQL, Oracle. Expert in ETL pipelines, REST APIs, payment gateways, Docker, and Linux. Remote-ready.`,
    images: [`${baseUrl}/images/profile.jpg`],
    creator: "@budsantoso",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "DvrjLmGr91uMfYhxnEMTbUkCZuJcOXFQ9zW0Jlp23SI",
  },
  category: "technology",
  classification: "Software Engineering, Backend Development, Data Engineering",
  referrer: "origin-when-cross-origin",
  other: {
    "google-site-verification": "DvrjLmGr91uMfYhxnEMTbUkCZuJcOXFQ9zW0Jlp23SI",
    "contact:email": profile.email,
    "contact:phone": profile.phone,
    "contact:linkedin": profile.linkedin,
    "profile:first_name": "Budi Agung",
    "profile:last_name": "Santoso",
    "profile:username": profile.github.username,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = getPersonJsonLd();
  const websiteJsonLd = getWebSiteJsonLd();
  const serviceJsonLd = getProfessionalServiceJsonLd();

  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/profile.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-14">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
