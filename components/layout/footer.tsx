import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <p className="text-xs">{profile.role} · {profile.location}</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            WhatsApp
          </a>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
