import Link from "next/link";
import { apps } from "@/data/apps";

export const metadata = {
  title: "Apps",
  description: "公開中のアプリケーション一覧",
};

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background-secondary">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link
            href="/"
            className="font-serif text-sm text-foreground-secondary transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <span className="font-serif text-sm text-foreground-muted">
            iwamaki.app
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="font-serif text-xl text-foreground">Apps</h1>
        <p className="mt-2 text-sm text-foreground-muted">アプリケーション</p>

        {/* Card Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="group rounded border border-border bg-background-card p-6 transition-colors hover:border-foreground-muted"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-light bg-background">
                <span className="font-serif text-lg text-foreground-secondary">
                  {app.name.charAt(0)}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="mt-4 font-serif text-base text-foreground group-hover:text-accent">
                {app.name}
              </h2>
              <p className="mt-1 text-xs text-foreground-muted">
                {app.tagline}
              </p>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <p className="text-center font-serif text-xs text-foreground-muted">
          © {new Date().getFullYear()} iwamaki.app
        </p>
      </footer>
    </div>
  );
}
