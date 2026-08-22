import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/data/profile";
import { getBaseUrl, getPersonJsonLd } from "@/lib/seo";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.role} specializing in Laravel, PHP, SQL, APIs, business applications, database engineering, and system integrations.`,
  authors: [{ name: profile.name, url: baseUrl }],
  creator: profile.name,
  keywords: [
    "Budi Agung Santoso",
    "Senior Fullstack Developer",
    "Software Engineer",
    "Laravel",
    "PHP",
    "SQL Server",
    "MySQL",
    "REST API",
    "System Modernization",
    "Indonesia Developer",
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
    description: `${profile.role} specializing in Laravel, PHP, SQL, APIs, business applications, database engineering, and system integrations.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: `${profile.role} specializing in Laravel, PHP, SQL, APIs, business applications, database engineering, and system integrations.`,
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = getPersonJsonLd();

  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
