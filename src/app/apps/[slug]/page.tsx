import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAppBySlug, getAllAppSlugs } from "@/data/apps";
import ShareButtons from "@/components/ShareButtons";

interface AppPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "App Not Found" };
  return {
    title: app.name,
    description: app.description,
  };
}

export default async function AppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const shareUrl = `https://iwamaki.app/apps/${slug}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background-secondary">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <Link
            href="/apps"
            className="font-serif text-sm text-foreground-secondary transition-colors hover:text-foreground"
          >
            ← Apps
          </Link>
          <span className="font-serif text-sm text-foreground-muted">
            iwamaki.app
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* App Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-background-card">
              {app.icon ? (
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
              ) : (
                <span className="font-serif text-2xl text-foreground-secondary">
                  {app.name.charAt(0)}
                </span>
              )}
            </div>

            {/* Title & Meta */}
            <div>
              <h1 className="font-serif text-xl text-foreground">{app.name}</h1>
              <p className="mt-1 text-sm text-foreground-secondary">
                {app.tagline}
              </p>
              <p className="mt-2 text-xs text-foreground-muted">
                {app.category} • {app.lastUpdated} 更新
              </p>
            </div>
          </div>

          {/* Share Buttons */}
          <ShareButtons url={shareUrl} title={app.name} />
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* About Section */}
        <section>
          <h2 className="font-serif text-base text-foreground">About</h2>
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground-secondary">
            {app.description}
          </p>
        </section>

        {/* Features Section */}
        {app.features.length > 0 && (
          <section className="mt-10">
            <h2 className="font-serif text-base text-foreground">Features</h2>
            <ul className="mt-4 space-y-3">
              {app.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-foreground-secondary"
                >
                  <span className="text-foreground-muted">・</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Screenshots Section */}
        {app.screenshots.length > 0 && (
          <section className="mt-10">
            <h2 className="font-serif text-base text-foreground">Screenshots</h2>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
              {app.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="h-48 w-28 shrink-0 rounded border border-border bg-background-secondary"
                >
                  <Image
                    src={screenshot}
                    alt={`${app.name} screenshot ${index + 1}`}
                    width={112}
                    height={192}
                    className="h-full w-full rounded object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Download Button */}
        {(app.playStoreUrl || app.appStoreUrl || app.websiteUrl) && (
          <section className="mt-10">
            <div className="flex flex-wrap gap-3">
              {app.playStoreUrl && (
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  Google Play
                </a>
              )}
              {app.appStoreUrl && (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </a>
              )}
              {app.websiteUrl && (
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-border bg-background-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background-secondary"
                >
                  Website
                </a>
              )}
            </div>
          </section>
        )}

        {/* Links Section */}
        <section className="mt-10">
          <div className="flex flex-wrap gap-4 text-sm">
            {app.termsUrl && (
              <a
                href={app.termsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary underline transition-colors hover:text-foreground"
              >
                Terms of Service
              </a>
            )}
            {app.privacyUrl && (
              <a
                href={app.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary underline transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>
            )}
            {app.contactEmail && (
              <a
                href={`mailto:${app.contactEmail}`}
                className="text-foreground-secondary underline transition-colors hover:text-foreground"
              >
                Contact
              </a>
            )}
          </div>
        </section>
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
