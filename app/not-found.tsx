import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-14rem)] items-center justify-center py-20">
      <Container size="sm" className="text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          404 Error
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          The requested case study or page could not be located.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            <ArrowLeft className="size-4" />
            Return to Homepage
          </Link>
        </div>
      </Container>
    </div>
  );
}
