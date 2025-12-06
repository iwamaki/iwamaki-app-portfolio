import Link from "next/link";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { games, getLocalized } from "@/data/games";
import type { Locale } from "@/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface GamesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GamesPageProps) {
  const { locale } = await params;
  return {
    title: "Games",
    description:
      locale === "ja" ? "プレイ可能なウェブゲーム一覧" : "List of playable web games",
  };
}

export default async function GamesPage({ params }: GamesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <GamesContent locale={locale as Locale} />;
}

function GamesContent({ locale }: { locale: Locale }) {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background-secondary">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link
            href="/"
            className="font-serif text-sm text-foreground-secondary transition-colors hover:text-foreground"
          >
            ← {t("common.home")}
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-serif text-sm text-foreground-muted">
              {t("common.siteName")}
            </span>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="font-serif text-xl text-foreground">
          {t("games.title")}
        </h1>
        <p className="mt-2 text-sm text-foreground-muted">
          {t("games.subtitle")}
        </p>

        {/* Card Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group rounded border border-border bg-background-card p-6 transition-colors hover:border-foreground-muted"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-light bg-background">
                <span className="font-serif text-lg text-foreground-secondary">
                  {game.name.charAt(0)}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="mt-4 font-serif text-base text-foreground group-hover:text-accent">
                {game.name}
              </h2>
              <p className="mt-1 text-xs text-foreground-muted">
                {getLocalized(game.tagline, locale)}
              </p>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <p className="text-center font-serif text-xs text-foreground-muted">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </footer>
    </div>
  );
}
